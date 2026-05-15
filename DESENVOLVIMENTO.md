# 🚀 Guia de Desenvolvimento - TaskInput

## Bem-vindo ao TaskInput!

Este documento serve como referência rápida para desenvolvimento, padrões e convenções usadas neste projeto.

---

## 📦 Setup Rápido

```bash
# 1. Clone o projeto
git clone https://github.com/seu-usuario/taskInput.git
cd taskInput

# 2. Instale dependências
npm install

# 3. Inicie o servidor
npm start

# 4. Acesse http://localhost:4200
```

---

## 🏗️ Estrutura de Componentes

Cada componente segue esta estrutura:

```
componente-nome/
├── componente-nome.ts       # Component class
├── componente-nome.html     # Template
├── componente-nome.css      # Estilos
└── componente-nome.spec.ts  # Testes
```

---

## 📝 Criando um Novo Componente

### Usando Angular CLI

```bash
ng generate component novo-componente
```

### Template Estrutura

```typescript
// novo-componente.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novo-componente',
  imports: [CommonModule], // Adicionar imports necessários
  templateUrl: './novo-componente.html',
  styleUrl: './novo-componente.css',
})
export class NovoComponente {
  @Input() dados: any = null;
  @Output() evento = new EventEmitter<string>();
  
  handleClick() {
    this.evento.emit('dados-evento');
  }
}
```

---

## 💻 Convenções de Código

### Nomes de Variáveis
```typescript
// ✅ Bom
listaDeTarefas: string[] = [];
tarefaEmAndamento: string | null = null;
totalTarefas: number = 0;

// ❌ Evitar
list: string[] = [];
task: string | null = null;
total: number = 0;
```

### Nomes de Métodos
```typescript
// ✅ Bom
adicionarItem(item: string): void
removerItem(index: number): void
iniciarTarefa(id: string): void

// ❌ Evitar
add(item: string): void
remove(index: number): void
start(id: string): void
```

### Nomes de Propriedades de Saída
```typescript
// ✅ Bom
@Output() itemAdicionado = new EventEmitter<string>();
@Output() itemRemovido = new EventEmitter<number>();

// ❌ Evitar
@Output() add = new EventEmitter<string>();
@Output() remove = new EventEmitter<number>();
```

---

## 🎨 Padrões de Template

### Iteração com @for

```html
<!-- ✅ Bom com track -->
@for (item of tarefas; track item.id) {
  <div>{{ item.titulo }}</div>
}

<!-- ⚠️ Aceitável em listas pequenas -->
@for (item of tarefas; track $index) {
  <div>{{ item.titulo }}</div>
}
```

### Condicionais com @if

```html
<!-- ✅ Bom -->
@if (tarefas.length > 0) {
  <ul>
    @for (item of tarefas; track item.id) {
      <li>{{ item }}</li>
    }
  </ul>
} @else {
  <p>Nenhuma tarefa</p>
}

<!-- ✅ Com @empty -->
<ul>
  @for (item of tarefas; track $index) {
    <li>{{ item }}</li>
  } @empty {
    <li>Nenhuma tarefa</li>
  }
</ul>
```

### Event Binding

```html
<!-- ✅ Bom -->
<button (click)="adicionarItem(inputValue)">Adicionar</button>
<input (keyup.enter)="adicionarItem(inputValue)" />

<!-- ❌ Evitar -->
<button onclick="adicionarItem()">Adicionar</button>
```

---

## 🔄 Comunicação Entre Componentes

### Pai para Filho (@Input)

```typescript
// pai.ts
@Component({
  imports: [Filho]
})
export class Pai {
  tarefas = ['Tarefa 1', 'Tarefa 2'];
}
```

```html
<!-- pai.html -->
<app-filho [tarefas]="tarefas"></app-filho>
```

```typescript
// filho.ts
export class Filho {
  @Input() tarefas: string[] = [];
}
```

### Filho para Pai (@Output)

```typescript
// filho.ts
export class Filho {
  @Output() tarefaRemovida = new EventEmitter<number>();
  
  remover(index: number) {
    this.tarefaRemovida.emit(index);
  }
}
```

```html
<!-- filho.html -->
<button (click)="remover($index)">Remover</button>
```

```typescript
// pai.ts
removerTarefa(index: number) {
  this.tarefas = this.tarefas.filter((_, i) => i !== index);
}
```

```html
<!-- pai.html -->
<app-filho (tarefaRemovida)="removerTarefa($event)"></app-filho>
```

---

## ✅ Checklist de Qualidade

Antes de fazer commit:

- [ ] Código segue convenções do projeto
- [ ] Sem erros de TypeScript
- [ ] Template é legível e estruturado
- [ ] Componentes são reutilizáveis
- [ ] Testes são executados com sucesso
- [ ] Sem console.log em produção (apenas erros e avisos)
- [ ] Commits com mensagens descritivas
- [ ] README atualizado se necessário

---

## 🧪 Escrevendo Testes

### Estrutura Básica de Teste

```typescript
// componente.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Componente } from './componente';

describe('Componente', () => {
  let component: Componente;
  let fixture: ComponentFixture<Componente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente]
    }).compileComponents();

    fixture = TestBed.createComponent(Componente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve adicionar tarefa', () => {
    component.adicionarItem('Nova tarefa');
    expect(component.tarefas.length).toBe(1);
  });

  it('deve emitir evento ao remover', (done) => {
    component.removerItem.subscribe((id) => {
      expect(id).toBe(0);
      done();
    });
    component.onRemove(0);
  });
});
```

---

## 🐛 Debugging

### Console do Navegador

```typescript
// Adicionar logs estratégicos
console.log('Debug:', variavel); // Azul
console.warn('Aviso:', mensagem); // Amarelo
console.error('Erro:', erro); // Vermelho
```

### Angular DevTools

1. Instale a extensão: [Angular DevTools](https://angular.dev/guide/devtools)
2. Abra DevTools (F12)
3. Vá para aba "Angular"
4. Inspecione componentes

### Breakpoints

```typescript
// VSCode
debugger; // Executa parada no debugger

// Chrome DevTools
// F12 → Sources → Clique na linha
```

---

## 📦 Commits e Versionamento

### Padrão de Commit

```bash
# Feature nova
git commit -m "feat: adicionar componente de estatísticas"

# Bug fix
git commit -m "fix: corrigir validação de tarefas"

# Documentação
git commit -m "docs: atualizar README"

# Refatoração
git commit -m "refactor: extrair lógica de tarefas em service"

# Testes
git commit -m "test: adicionar cobertura para componente Pai"

# Estilo
git commit -m "style: formatar código"

# Chore
git commit -m "chore: atualizar dependências"
```

---

## 🚀 Deploy

### Build para Produção

```bash
npm run build
```

Gera: `dist/taskInput/`

### Verificar Build

```bash
# Instalar http-server globalmente
npm install -g http-server

# Servir build localmente
http-server dist/taskInput
```

### Deploy em GitHub Pages

```bash
# Instalar angular-cli-ghpages
npm install -g angular-cli-ghpages

# Fazer deploy
ng build --configuration production
ngh --dir=dist/taskInput
```

---

## 📚 Recursos Rápidos

| Recurso | Link |
|---------|------|
| **Angular Docs** | https://angular.dev |
| **TypeScript** | https://typescriptlang.org |
| **RxJS** | https://rxjs.dev |
| **Vitest** | https://vitest.dev |
| **Node.js** | https://nodejs.org |

---

## ❓ Dúvidas Frequentes

### P: Como adicionar um novo pacote?
```bash
npm install nome-pacote
```

### P: Como atualizar pacotes?
```bash
npm update
```

### P: Como executar apenas um teste?
```bash
npm test -- --reporter=verbose --match="nome do teste"
```

### P: Qual versão do Angular estou usando?
```bash
ng version
```

### P: Como formatar o código?
```bash
npm run prettier
# ou automático no VSCode com Prettier extension
```

---

## 🎯 Próximas Aprendizagens

- [ ] Signals API avançada
- [ ] RxJS Operators
- [ ] Testes e2e com Cypress
- [ ] Authentication com JWT
- [ ] API Integration
- [ ] State Management com NgRx
- [ ] PWA Features
- [ ] Performance Optimization

---

## 📞 Suporte

- Dúvidas? Abra uma issue no GitHub
- Melhorias? Faça um pull request
- Erros? Cheque os logs no console

---

**Última atualização:** Maio 2026  
**Versão Angular:** 21.2.0  
**Mantido por:** Desenvolvedor Senior Angular

---
