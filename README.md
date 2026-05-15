# 📋 TaskInput - Gerenciador de Tarefas em Angular

<div align="center">

[![Angular 21](https://img.shields.io/badge/Angular-21.2.0-red?logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org)
[![npm](https://img.shields.io/badge/npm-10.8.2-CB3837?logo=npm)](https://www.npmjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Um aplicativo moderno de gerenciamento de tarefas desenvolvido com Angular 21, demonstrando boas práticas de arquitetura e comunicação entre componentes.**

[Demonstração](#funcionalidades) • [Instalação](#instalação) • [Como Usar](#como-usar) • [Arquitetura](#arquitetura)

</div>

---

## 📌 Descrição

TaskInput é uma aplicação educacional e prática que demonstra os padrões modernos do **Angular 21**, com foco em:

- ✅ **Componentes Standalone** - Sem necessidade de NgModules
- ✅ **Comunicação Pai-Filho** - Através de @Input/@Output
- ✅ **Template Control Flow** - Usando @for, @if, @empty (sintaxe moderna)
- ✅ **Signal API** - Estado reativo com Signals
- ✅ **TypeScript Moderno** - v5.9 com tipos fortes
- ✅ **Vitest** - Testes unitários rápidos e modernos

A aplicação gerencia uma lista de tarefas onde:

- O **Pai** (Componente Principal) armazena e gerencia o estado das tarefas
- A **Filha** (Filho 1) exibe a lista e permite iniciar/finalizar tarefas
- A **Mãe** (Filho 2) monitora o status de tarefas em andamento

---

## 🎯 Funcionalidades

- ✨ **Adicionar Tarefas** - Insira novas tarefas através do input
- ▶️ **Iniciar Tarefa** - Marque uma tarefa como em andamento
- ✅ **Finalizar Tarefa** - Remova uma tarefa concluída
- 📊 **Monitorar Status** - Acompanhe tarefas em execução
- 🔄 **Reatividade em Tempo Real** - Interface atualiza automaticamente
- 📱 **Responsivo** - Design adaptável para diferentes tamanhos

---

## 🛠️ Tecnologias

| Tecnologia     | Versão | Descrição                |
| -------------- | ------ | ------------------------ |
| **Angular**    | 21.2.0 | Framework principal      |
| **TypeScript** | 5.9    | Linguagem de programação |
| **RxJS**       | 7.8.0  | Programação reativa      |
| **Vitest**     | 4.0.8  | Test runner moderno      |
| **npm**        | 10.8.2 | Gerenciador de pacotes   |

---

## 📁 Estrutura do Projeto

```
taskInput/
├── src/
│   ├── app/
│   │   ├── app.ts                 # Componente raiz
│   │   ├── app.html               # Template raiz
│   │   ├── app.css                # Estilos raiz
│   │   ├── app.config.ts          # Configuração da aplicação
│   │   ├── app.routes.ts          # Rotas da aplicação
│   │   ├── app.spec.ts            # Testes do App
│   │   │
│   │   ├── pai/
│   │   │   ├── pai.ts             # Componente Pai (gerenciador)
│   │   │   ├── pai.html           # Template Pai
│   │   │   ├── pai.css            # Estilos Pai
│   │   │   └── pai.spec.ts        # Testes Pai
│   │   │
│   │   ├── filho/
│   │   │   ├── filho.ts           # Componente Filho (exibidor)
│   │   │   ├── filho.html         # Template Filho
│   │   │   ├── filho.css          # Estilos Filho
│   │   │   └── filho.spec.ts      # Testes Filho
│   │   │
│   │   └── filho-two/
│   │       ├── filho-two.ts       # Componente Filho 2 (monitor)
│   │       ├── filho-two.html     # Template Filho 2
│   │       ├── filho-two.css      # Estilos Filho 2
│   │       └── filho-two.spec.ts  # Testes Filho 2
│   │
│   ├── index.html                 # Arquivo HTML principal
│   ├── main.ts                    # Ponto de entrada
│   ├── styles.css                 # Estilos globais
│   └── ...
│
├── public/                        # Arquivos estáticos
├── angular.json                   # Configuração Angular CLI
├── tsconfig.json                  # Configuração TypeScript
├── package.json                   # Dependências do projeto
├── README.md                      # Este arquivo
└── ...
```

---

## 🚀 Instalação

### Pré-requisitos

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x (ou yarn/pnpm)

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/taskInput.git
cd taskInput
```

2. **Instale as dependências**

```bash
npm install
```

3. **Pronto!** O projeto está configurado e pronto para uso.

---

## 📖 Como Usar

### 🔧 Iniciar Servidor de Desenvolvimento

```bash
npm start
```

- O servidor iniciará em `http://localhost:4200`
- A aplicação recarregará automaticamente ao salvar arquivos

### 🏗️ Build para Produção

```bash
npm run build
```

- Gera artefatos otimizados em `dist/taskInput`
- Inclui tree-shaking, minificação e otimizações

### 📝 Executar Testes Unitários

```bash
npm test
```

- Usa [Vitest](https://vitest.dev/) para testes rápidos
- Suporta watch mode automático

### 👀 Watch Mode (Desenvolvimento)

```bash
npm run watch
```

- Recompila automaticamente ao detectar mudanças
- Útil para desenvolvimento contínuo

---

## 🏛️ Arquitetura

### Padrão de Comunicação

A aplicação segue o **padrão Unidireção de Dados** (One-Way Data Flow):

```
Pai (Gerenciador de Estado)
├── @Input() → Filho (Lista de Tarefas)
│   └── @Output() → (Eventos: removerItem, startTask)
└── @Input() → Filho-Two (Monitor de Status)
```

### Fluxo de Dados

```
Usuario Input → Pai → Lista atualizada
                ├→ Filho recebe lista (@Input)
                │  └→ Usuario clica → Emite evento (@Output)
                │     └→ Pai recebe evento → Atualiza estado
                │
                └→ Filho-Two recebe tarefa em andamento (@Input)
                   └→ Exibe mensagem de status
```

---

## 📚 Componentes

### 1️⃣ **App (app.ts)**

Componente raiz da aplicação.

**Responsabilidades:**

- Renderizar o componente Pai
- Gerenciar a aplicação principal

**Características:**

```typescript
- Signal: title = 'taskInput'
- Imports: [RouterOutlet, Pai]
- Standalone: true
```

---

### 2️⃣ **Pai (pai.ts)**

Componente gerenciador central - armazena estado e lógica.

**Responsabilidades:**

- Manter a lista de tarefas
- Adicionar e remover tarefas
- Rastrear tarefa em andamento
- Comunicar com componentes filhos

**Propriedades:**

```typescript
// Estado
listaDeTarefas: string[] = [...]
tarefaEmAndamento: string | null = null

// Métodos
adicionarItem(novoItem: string)
removerItem(index: number)
startTask(index: number)
```

**Comunicação:**

- Envia `listaDeTarefas` via @Input para Filho e Filho-Two
- Recebe eventos `(removerItem)` e `(startTask)` do Filho
- Envia `tarefaEmAndamento` via @Input para Filho-Two

---

### 3️⃣ **Filho (filho.ts)**

Componente apresentador - exibe lista e permite interações.

**Responsabilidades:**

- Exibir lista de tarefas
- Fornecer botões Start/Finish
- Emitir eventos para o Pai

**Inputs:**

```typescript
@Input() listaRecebida: string[] = []
```

**Outputs:**

```typescript
@Output() removerItem = new EventEmitter<number>()
@Output() startTask = new EventEmitter<number>()
```

**Métodos:**

```typescript
onStart(index: number)
onFinish(index: number)
```

---

### 4️⃣ **FilhoTwo (filho-two.ts)**

Componente de monitoramento - exibe status de tarefas.

**Responsabilidades:**

- Monitorar tarefa em andamento
- Exibir mensagens de status

**Inputs:**

```typescript
@Input() listaRecebida: string[] = []
@Input() tarefaSendoExecutada: string | null = null
```

---

## 🎨 Template Control Flow Moderno

O projeto usa a sintaxe moderna de controle de fluxo do Angular 21:

### @for - Iteração

```html
@for (item of listaRecebida; track $index) {
<li>{{ item }}</li>
} @empty {
<li>Lista vazia</li>
}
```

- `track` melhora performance
- `@empty` substitui `*ngIf`

### @if - Condicional

```html
@if (tarefaSendoExecutada) {
<p>{{ tarefaSendoExecutada }}</p>
}
```

- Mais legível que `*ngIf`
- Sem necessidade de NgIf

---

## 🔄 Signals - Reatividade

O projeto utiliza a **Signal API** do Angular para estado reativo:

```typescript
// No App
protected readonly title = signal('taskInput');
```

**Vantagens:**

- ✅ Mais simples que Subjects/Observables
- ✅ Melhor performance
- ✅ API mais intuitiva
- ✅ Futuro do Angular

---

## ✅ Boas Práticas Implementadas

| Prática                    | Descrição                            | Localização           |
| -------------------------- | ------------------------------------ | --------------------- |
| **Componentes Standalone** | Sem NgModules                        | Todos os componentes  |
| **Type Safety**            | TypeScript com tipos fortes          | Todas as propriedades |
| **One-Way Data Binding**   | @Input/@Output                       | Pai → Filhos          |
| **Template Control Flow**  | @for, @if, @empty                    | Templates             |
| **Track Function**         | Otimização de listas                 | filho.html            |
| **Event Emitters**         | Comunicação reativa                  | Filhos                |
| **Composição**             | Componentes pequenos e reutilizáveis | Arquitetura           |
| **Separation of Concerns** | Responsabilidade única               | Cada componente       |

---

## 🧪 Testes

O projeto inclui testes unitários para cada componente:

```bash
# Executar testes
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

**Estrutura de Testes:**

- `app.spec.ts` - Testes do App
- `pai.spec.ts` - Testes do Pai
- `filho.spec.ts` - Testes do Filho
- `filho-two.spec.ts` - Testes do FilhoTwo

---

## 🔧 Configurações Importantes

### tsconfig.json

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": false,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### angular.json

- **Builder:** @angular/build:application
- **Source Root:** src
- **Prefix:** app
- **Styles:** CSS (src/styles.css)

---

## 📈 Como Expandir o Projeto

### 1. Adicione um Serviço de Tarefas

```typescript
// services/tarefa.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefas$ = new BehaviorSubject<string[]>([]);

  adicionarTarefa(tarefa: string) {
    // lógica
  }
}
```

### 2. Implemente Persistência

```typescript
// Salve em localStorage
localStorage.setItem('tarefas', JSON.stringify(this.listaDeTarefas));

// Carregue ao inicializar
const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
```

### 3. Adicione Roteamento

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '', component: Pai },
  { path: 'sobre', component: Sobre },
];
```

### 4. Use RxJS para Operações Assincronas

```typescript
tarefas$ = this.http.get('/api/tarefas');

// No template
@for (tarefa of tarefas$ | async; track tarefa.id) {
  <li>{{ tarefa.nome }}</li>
}
```

### 5. Implemente Validação de Formulários

```typescript
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

form = this.fb.group({
  tarefa: ['', [Validators.required, Validators.minLength(3)]],
});
```

---

## 📊 Diagrama de Fluxo

```
┌─────────────────────────────────┐
│           App Root              │
│  - Bootstrap da aplicação       │
└────────────┬────────────────────┘
             │
             ▼
┌──────────────────────────────────────────────────┐
│        Componente Pai (Gerenciador)              │
│ - listaDeTarefas: string[]                       │
│ - tarefaEmAndamento: string | null               │
│ - adicionarItem(novoItem)                        │
│ - removerItem(index) → emite evento              │
│ - startTask(index) → emite evento                │
└──┬─────────────────────────────────────────────┬─┘
   │                                              │
   ▼                                              ▼
┌──────────────────────────┐     ┌──────────────────────────┐
│  Filho (Apresentador)    │     │ FilhoTwo (Monitor)       │
│ @Input: listaRecebida    │     │ @Input: listaRecebida    │
│ @Output: removerItem     │     │ @Input: tarefaSendoEx... │
│ @Output: startTask       │     │                          │
│                          │     │ Exibe status da tarefa   │
│ [Exibe Lista]            │     │ em andamento             │
│ [Botões: Start/Finish]   │     │                          │
└──────────────────────────┘     └──────────────────────────┘
```

---

## 🐛 Debugging

### Console do Navegador

```typescript
// Veja logs de eventos
console.log(this.tarefaEmAndamento); // Em pai.ts
```

### DevTools do Angular

1. Instale a [Angular DevTools Extension](https://angular.dev/guide/devtools)
2. Abra DevTools (F12)
3. Vá para a aba "Angular"
4. Inspecione componentes e seu estado

### Vitest UI

```bash
npm test -- --ui
```

---

## 📝 Convenções de Código

```typescript
// ✅ Bom
@Input() tarefas: string[] = [];
@Output() tarefaConcluida = new EventEmitter<string>();

// ❌ Evitar
@Input() t: string[] = [];
@Output() emit = new EventEmitter();
```

---

## 🔐 Segurança

O projeto implementa:

- ✅ TypeScript strict mode
- ✅ Sanitização de templates (automática no Angular)
- ✅ Sem uso de innerHTML/eval

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Diretrizes

- Mantenha os padrões de código
- Escreva testes para novas funcionalidades
- Atualize o README se necessário
- Use mensagens de commit descritivas

---

## 📄 Licença

Este projeto é licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📞 Suporte

- 📧 Email: [seu-email@example.com](mailto:seu-email@example.com)
- 💬 Issues: [GitHub Issues](https://github.com/seu-usuario/taskInput/issues)
- 📚 Documentação: [Angular Official Docs](https://angular.dev)

---

## 🙏 Agradecimentos

- [Angular Team](https://angular.dev) - Framework incrível
- [Vitest](https://vitest.dev/) - Test runner moderno
- [TypeScript](https://www.typescriptlang.org/) - Superset seguro

---

## 📚 Recursos Úteis

- [Angular 21 Documentation](https://angular.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular Best Practices](https://angular.dev/guide/styleguide)
- [Vitest Guide](https://vitest.dev/guide/)

---

<div align="center">

**[⬆ voltar ao topo](#-taskinput---gerenciador-de-tarefas-em-angular)**

Desenvolvido com ❤️ usando Angular 21

</div>
