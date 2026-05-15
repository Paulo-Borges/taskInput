# 🏗️ Arquitetura e Expansão - TaskInput

## 📐 Diagrama de Arquitetura

### Hierarquia de Componentes

```
App (Raiz)
└── Pai (Gerenciador de Estado)
    ├── Filho (Apresentador - Lista)
    └── FilhoTwo (Monitor - Status)
```

### Fluxo de Dados Detalhado

```
┌──────────────────────────────────────────────────────────┐
│                     App Component                         │
│            Bootstrap & App Configuration                 │
└────────────────────┬─────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────────────────┐
│                   Pai Component                           │
│                                                           │
│  📊 Estado (State):                                      │
│  • listaDeTarefas: string[]                              │
│  • tarefaEmAndamento: string | null                      │
│                                                           │
│  🔧 Métodos:                                             │
│  • adicionarItem(novoItem)                               │
│  • removerItem(index) ─────────────► @Output removerItem │
│  • startTask(index) ────────────────► @Output startTask  │
│                                                           │
│  📤 Saídas:                                              │
│  • @Input para Filho: listaDeTarefas                     │
│  • @Input para FilhoTwo: listaDeTarefas, tarefaEmAnd...  │
└────┬─────────────────────────────────────┬───────────────┘
     │                                      │
     │ @Input: listaRecebida                │ @Input: listaRecebida
     │                                      │         tarefaSendoExecutada
     ▼                                      ▼
┌───────────────────────┐        ┌──────────────────────────┐
│  Filho Component      │        │ FilhoTwo Component       │
│                       │        │                          │
│ 🎨 Apresentação:      │        │ 🎯 Monitoramento:       │
│ • Exibe lista         │        │ • Exibe status          │
│ • Botões Start/Fin... │        │ • Mostra tarefa ativa   │
│                       │        │                          │
│ 📤 Eventos:           │        │ (Apenas observador)      │
│ • removerItem → Pai   │        │                          │
│ • startTask → Pai     │        │                          │
└───────────────────────┘        └──────────────────────────┘
```

### Ciclo de Uma Tarefa

```
1. ADICIONAR TAREFA
   Usuario input → Pai.adicionarItem()
   └─► Pai.listaDeTarefas atualizado
       ├─► Filho recebe via @Input
       │   └─► Template re-renderizado
       └─► FilhoTwo recebe via @Input
           └─► Template re-renderizado

2. INICIAR TAREFA
   Usuario clica "Start" → Filho.onStart()
   └─► Filho.startTask.emit(index)
       └─► Pai.startTask()
           └─► Pai.tarefaEmAndamento = mensagem
               └─► FilhoTwo recebe via @Input
                   └─► Exibe mensagem

3. FINALIZAR TAREFA
   Usuario clica "Finish" → Filho.onFinish()
   └─► Filho.removerItem.emit(index)
       └─► Pai.removerItem()
           ├─► Remove de listaDeTarefas
           └─► Pai.tarefaEmAndamento = mensagem
               └─► FilhoTwo exibe mensagem
```

---

## 🔄 Patterns Implementados

### 1. Container/Presentational Pattern

**Container (Pai):**
- Gerencia lógica e estado
- Conecta com services (futuro)
- Passa dados para filhos
- Recebe eventos dos filhos

**Presentational (Filho, FilhoTwo):**
- Apenas exibe dados
- Não gerencia estado complexo
- Emite eventos para container
- Reutilizável

### 2. Smart/Dumb Components

```typescript
// Smart Component (Pai)
export class Pai {
  // Tem lógica e estado
  listaDeTarefas: string[] = [...];
  adicionarItem(item) { ... }
}

// Dumb Component (Filho)
export class Filho {
  // Apenas recebe dados e emite eventos
  @Input() listaRecebida: string[];
  @Output() removerItem = new EventEmitter();
}
```

---

## 🚀 Exemplos de Expansão

### Exemplo 1: Adicionar Prioridade

**Passo 1: Criar Interface**
```typescript
// models/tarefa.model.ts
export interface Tarefa {
  id: string;
  titulo: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}
```

**Passo 2: Atualizar Pai**
```typescript
export class Pai {
  listaDeTarefas: Tarefa[] = [
    { 
      id: '1', 
      titulo: 'Arrumar a casa', 
      prioridade: 'alta',
      concluida: false 
    }
  ];
}
```

**Passo 3: Atualizar Filho**
```html
<!-- filho.html -->
@for (item of listaRecebida; track item.id) {
  <div [ngClass]="'prioridade-' + item.prioridade">
    <li>{{ item.titulo }}</li>
    <span class="prioridade">{{ item.prioridade }}</span>
  </div>
}
```

**Passo 4: Estilizar**
```css
/* filho.css */
.prioridade-alta { border-left: 4px solid red; }
.prioridade-media { border-left: 4px solid orange; }
.prioridade-baixa { border-left: 4px solid green; }
```

---

### Exemplo 2: Integrar com API

**Passo 1: Criar Service**
```typescript
// services/tarefa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = '/api/tarefas';
  
  constructor(private http: HttpClient) {}
  
  getTarefas(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
  
  addTarefa(tarefa: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { titulo: tarefa });
  }
  
  removeTarefa(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

**Passo 2: Usar no Pai**
```typescript
import { HttpClientModule } from '@angular/common/http';
import { TarefaService } from './services/tarefa.service';

@Component({
  selector: 'app-pai',
  imports: [Filho, FilhoTwo, HttpClientModule],
  templateUrl: './pai.html'
})
export class Pai implements OnInit {
  constructor(private tarefaService: TarefaService) {}
  
  ngOnInit() {
    this.tarefaService.getTarefas().subscribe(
      tarefas => this.listaDeTarefas = tarefas,
      error => console.error('Erro ao carregar tarefas:', error)
    );
  }
}
```

---

### Exemplo 3: Adicionar Autenticação

**Passo 1: Criar Guard**
```typescript
// guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}
  
  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
```

**Passo 2: Usar em Rotas**
```typescript
// app.routes.ts
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'tarefas', 
    component: Pai,
    canActivate: [AuthGuard]
  }
];
```

---

### Exemplo 4: Adicionar Persistência Local

**Passo 1: Criar Service**
```typescript
// services/storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private key = 'tarefas_app';
  
  getTarefas(): string[] {
    const saved = localStorage.getItem(this.key);
    return saved ? JSON.parse(saved) : [];
  }
  
  saveTarefas(tarefas: string[]): void {
    localStorage.setItem(this.key, JSON.stringify(tarefas));
  }
}
```

**Passo 2: Integrar ao Pai**
```typescript
export class Pai implements OnInit {
  listaDeTarefas: string[] = [];
  
  constructor(private storage: StorageService) {}
  
  ngOnInit() {
    this.listaDeTarefas = this.storage.getTarefas();
  }
  
  adicionarItem(novoItem: string) {
    if (novoItem) {
      this.listaDeTarefas = [...this.listaDeTarefas, novoItem];
      this.storage.saveTarefas(this.listaDeTarefas);
    }
  }
}
```

---

### Exemplo 5: Adicionar Filtros

**Passo 1: Adicionar Propriedade**
```typescript
export class Pai {
  listaDeTarefas: string[] = [...];
  filtroAtual: 'todas' | 'ativa' | 'concluida' = 'todas';
}
```

**Passo 2: Criar Método Computed**
```typescript
import { computed } from '@angular/core';

export class Pai {
  tarefasFiltradas = computed(() => {
    return this.filtroAtual === 'todas' 
      ? this.listaDeTarefas 
      : [...]; // lógica de filtro
  });
}
```

**Passo 3: Usar no Template**
```html
<div class="filtros">
  <button (click)="filtroAtual = 'todas'">Todas</button>
  <button (click)="filtroAtual = 'ativa'">Ativas</button>
  <button (click)="filtroAtual = 'concluida'">Concluídas</button>
</div>

<app-filho [listaRecebida]="tarefasFiltradas()"></app-filho>
```

---

## 📊 Matriz de Decisão de Arquitetura

```
┌─────────────────┬──────────────────┬────────────────────┐
│ Requisito       │ Quando Usar      │ Tecnologia         │
├─────────────────┼──────────────────┼────────────────────┤
│ Estado Local    │ Componente só    │ Propriedade comum  │
│ Pequeno         │                  │                    │
├─────────────────┼──────────────────┼────────────────────┤
│ Estado Reativo  │ Múltiplos filhos │ Signals            │
│ Mudanças freq.  │                  │                    │
├─────────────────┼──────────────────┼────────────────────┤
│ Estado Global   │ Toda app         │ Service + Signals  │
│ Compartilhado   │                  │                    │
├─────────────────┼──────────────────┼────────────────────┤
│ Dados Async     │ HTTP/API         │ RxJS + Observables │
│                 │                  │                    │
├─────────────────┼──────────────────┼────────────────────┤
│ Estado Complexo │ Múltiplas ações  │ NgRx (futuro)      │
│ Histórico       │                  │                    │
└─────────────────┴──────────────────┴────────────────────┘
```

---

## 🎯 Roadmap de Funcionalidades

### V1 (Atual)
- ✅ CRUD básico de tarefas
- ✅ Componentes standalone
- ✅ Comunicação pai-filho

### V2 (Próximo)
- 🔄 Prioridades
- 🔄 Datas de vencimento
- 🔄 Categorias/Tags

### V3
- 📅 Autenticação
- 📅 Persistência em API
- 📅 Sincronização em tempo real

### V4
- 🚀 Compartilhamento de listas
- 🚀 Notificações
- 🚀 PWA

---

## 📈 Métricas de Qualidade

| Métrica | Target | Atual | Status |
|---------|--------|-------|--------|
| Test Coverage | 80% | ~40% | ⚠️ |
| TypeScript Errors | 0 | 0 | ✅ |
| Lighthouse Score | 90+ | TBD | - |
| Bundle Size | <200KB | ~150KB | ✅ |
| Performance | LCP < 2s | TBD | - |

---

## 🔗 Dependências de Features

```
Autenticação
    ↓
API Integration
    ↓
Persistência
    ↓
Filtros & Busca
    ↓
Compartilhamento
    ↓
Notificações em Tempo Real
```

---

Documento criado como guia de arquitetura e expansão do projeto TaskInput.
