# ✨ Quick Start Guide - TaskInput

## 🎯 5 Minutos para Começar

### 1️⃣ Instalar (1 min)

```bash
git clone https://github.com/seu-usuario/taskInput.git
cd taskInput
npm install
```

### 2️⃣ Iniciar (1 min)

```bash
npm start
```

Abra: `http://localhost:4200`

### 3️⃣ Desenvolver (3 min)

- ✍️ Digite uma tarefa no input
- ➕ Clique em "Adicionar"
- ▶️ Clique "Start" para iniciar
- ✅ Clique "Finish" para concluir

**Pronto! Você está rodando a aplicação.**

---

## 📁 Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `src/app/pai/pai.ts` | 🧠 Lógica principal |
| `src/app/filho/filho.ts` | 👀 Exibição da lista |
| `src/app/filho-two/filho-two.ts` | 📊 Monitor de status |

---

## 🛠️ Tarefas Comuns

### Adicionar Nova Propriedade

```typescript
// No pai.ts
export class Pai {
  // Adicione aqui
  novaPropriedade: string = 'valor';
}
```

### Chamar Método do Pai no Filho

```typescript
// No pai.html
<app-filho 
  [listaRecebida]="listaDeTarefas"
  (removerItem)="removerItem($event)"
></app-filho>
```

### Adicionar Novo Evento

```typescript
// No filho.ts
@Output() novoEvento = new EventEmitter<string>();

dispararEvento() {
  this.novoEvento.emit('dados');
}
```

---

## 🎨 Personalizações Rápidas

### Mudar Cores

Edite `src/styles.css` ou `src/app/[componente]/[componente].css`

```css
/* Exemplo */
button {
  background-color: #007bff;
  color: white;
}
```

### Mudar Textos

Edite os templates `.html`

```html
<!-- Antes -->
<h2>Componente Pai</h2>

<!-- Depois -->
<h2>Meu Gerenciador de Tarefas</h2>
```

---

## 🚀 Deploy Rápido

### GitHub Pages

```bash
npm run build
cd dist/taskInput
touch .nojekyll
git add .
git commit -m "Deploy"
git push
```

Configure nas Settings do GitHub para usar `gh-pages` branch.

---

## 📝 Checklist Básico

- [ ] Clone funcionando
- [ ] `npm install` completado
- [ ] `npm start` iniciado
- [ ] Aplicação rodando em localhost:4200
- [ ] Tarefas podem ser adicionadas
- [ ] Tarefas podem ser iniciadas
- [ ] Tarefas podem ser finalizadas

---

## ❓ Problemas?

### Port 4200 em Uso

```bash
# Use outra porta
ng serve --port 4201
```

### Módulos Não Encontrados

```bash
# Limpe e reinstale
rm -rf node_modules
npm install
```

### Cache do Navegador

```bash
# Limpe (Ctrl+Shift+Delete no Chrome)
# Ou force no Angular
ng serve --poll 500
```

---

## 📚 Próximos Passos

1. ✅ Explorar o código
2. ✅ Ler [DESENVOLVIMENTO.md](DESENVOLVIMENTO.md)
3. ✅ Executar testes: `npm test`
4. ✅ Fazer um build: `npm run build`
5. ✅ Consultar [ARQUITETURA.md](ARQUITETURA.md)

---

**Bem-vindo ao TaskInput!** 🎉
