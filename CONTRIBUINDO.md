# 🤝 Guia de Contribuição - TaskInput

## Bem-vindo Contribuidor! 👋

Obrigado por considerar contribuir com TaskInput! Este documento fornece diretrizes e instruções para contribuir.

---

## 📋 Código de Conduta

Este projeto e todos os participantes dele são regidos por nosso Código de Conduta. Ao participar, você concorda em agir com respeito, inclusão e profissionalismo.

**Esperamos:**
- ✅ Comunicação construtiva
- ✅ Respeito por diferentes opiniões
- ✅ Apoio mútuo
- ✅ Foco na melhoria do projeto

---

## 🚀 Como Começar

### 1. Fork o Repositório

```bash
# Clique em "Fork" no GitHub
# Ou via CLI:
gh repo fork seu-usuario/taskInput
```

### 2. Clone Localmente

```bash
git clone https://github.com/seu-usuario/taskInput.git
cd taskInput
npm install
```

### 3. Crie uma Branch

```bash
# Feature nova
git checkout -b feature/sua-feature

# Bug fix
git checkout -b fix/seu-bug

# Documentação
git checkout -b docs/atualização
```

### 4. Faça suas Mudanças

```bash
# Edite os arquivos
npm start  # Veja mudanças em tempo real
npm test   # Execute testes
```

### 5. Commit e Push

```bash
git commit -m "feat: descrição clara da mudança"
git push origin feature/sua-feature
```

### 6. Abra um Pull Request

- Descreva a mudança claramente
- Referencie issues relacionadas (#123)
- Adicione screenshots se for UI

---

## 📝 Padrão de Commits

Use o padrão **Conventional Commits**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types Válidos

| Type | Descrição |
|------|-----------|
| `feat` | Nova funcionalidade |
| `fix` | Bug fix |
| `docs` | Documentação |
| `style` | Formatação, estilos |
| `refactor` | Refatoração de código |
| `perf` | Melhoria de performance |
| `test` | Testes |
| `chore` | Tarefas de build, deps |

### Exemplos

```bash
# Boa feature
git commit -m "feat(pai): adicionar filtro de tarefas"

# Bom fix
git commit -m "fix(filho): corrigir bug ao remover item com índice"

# Boa documentação
git commit -m "docs: atualizar seção de instalação"

# Ruim ❌
git commit -m "fixed stuff"
git commit -m "Update README"
```

---

## ✅ Checklist de Pull Request

Antes de abrir um PR, garanta que:

- [ ] Fork atualizado com upstream
- [ ] Branch criada do `main`
- [ ] Código segue o estilo do projeto
- [ ] Sem console.log/debugger em produção
- [ ] Testes passando: `npm test`
- [ ] Build funcionando: `npm run build`
- [ ] Documentação atualizada
- [ ] Commit messages seguem o padrão
- [ ] PR tem descrição clara
- [ ] Não há conflitos com `main`

---

## 🧪 Testando sua Contribuição

### Rodar Testes

```bash
# Todos os testes
npm test

# Um teste específico
npm test -- --reporter=verbose --match="nome teste"

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

### Verificar Linting

```bash
# Verificar TypeScript
npx tsc --noEmit

# Formatar código
npx prettier --write "src/**/*.{ts,html,css}"
```

### Build Local

```bash
npm run build
# Verifica se constrói sem erros
```

---

## 📚 Tipos de Contribuições

### 🐛 Reportar Bugs

**Ao reportar, inclua:**
- Versão do Angular/Node
- Passos para reproduzir
- Comportamento esperado vs. atual
- Screenshots/logs relevantes

**Template:**
```markdown
## Descrição
[Descrição clara do bug]

## Passos para Reproduzir
1. ...
2. ...
3. ...

## Resultado Esperado
[O que deveria acontecer]

## Resultado Atual
[O que realmente acontece]

## Ambiente
- Angular: 21.2.0
- Node: 20.x
- OS: Windows 10
```

### ✨ Sugerir Melhorias

**Inclua:**
- Caso de uso/problema que resolve
- Possível solução ou alternativas
- Impacto na performance/UX

### 📖 Melhorar Documentação

- Typos e correções
- Exemplos mais claros
- Documentação em português/inglês
- Diagramas e visuals

### 🔧 Enviar Código

**Requisitos:**
- Deve estar alinhado com arquitetura
- Deve ter testes unitários
- Deve seguir convenções
- Deve ser bem documentado

---

## 🎨 Padrões de Código

### TypeScript

```typescript
// ✅ Bom
export class MeuComponente {
  @Input() dados: string[] = [];
  @Output() evento = new EventEmitter<number>();
  
  private readonly logger = inject(Logger);
  
  processar(item: string): void {
    // implementação
  }
}

// ❌ Evitar
export class MyComponent {
  @Input() data: any = [];
  @Output() event = new EventEmitter();
  
  processItem(x: any) { }
}
```

### Templates

```html
<!-- ✅ Bom -->
@for (item of items; track item.id) {
  <app-item 
    [data]="item"
    [disabled]="isLoading"
    (delete)="onDelete($event)"
  />
}

<!-- ❌ Evitar -->
<div *ngFor="let item of items">
  <app-item [data]="item" (delete)="delete(item)"/>
</div>
```

### CSS

```css
/* ✅ Bom */
.componente-titulo {
  color: var(--primary-color);
  font-size: 1.5rem;
}

/* ❌ Evitar */
.title {
  color: #007bff;
  font-size: 24px;
}
```

---

## 🔄 Processo de Revisão

### O que Esperar

1. **Automático:** Testes e linting passam
2. **Manual:** Revisão de código de maintainers
3. **Feedback:** Comentários ou solicitações
4. **Ajustes:** Você faz as mudanças
5. **Merge:** PR é aceito e mergeado

### Tempo Estimado

- Bug fix simples: 2-3 dias
- Feature pequena: 3-5 dias
- Feature grande: 1-2 semanas

---

## 📖 Recursos Úteis

| Recurso | Link |
|---------|------|
| **Conventional Commits** | https://conventionalcommits.org |
| **Angular Style Guide** | https://angular.dev/guide/styleguide |
| **TypeScript Handbook** | https://www.typescriptlang.org/docs |
| **GitHub Guides** | https://guides.github.com |

---

## ❓ Dúvidas?

- 📧 Email: seu-email@example.com
- 💬 Issues: Use [GitHub Discussions](https://github.com/seu-usuario/taskInput/discussions)
- 📚 Wiki: Consulte nossa [documentação](./README.md)

---

## 🎉 Obrigado!

Sua contribuição ajuda a tornar TaskInput melhor para todos! 

**Contribuidores:**
- Você pode aparecer aqui também! 🌟

---

**Última atualização:** Maio 2026
**Versão:** 1.0
