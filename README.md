# Gerador de Frases Motivacionais

## Descrição

Projeto desenvolvido em Node.js que exibe uma frase motivacional aleatória.

## Tecnologias utilizadas

- Node.js
- GitHub Actions

## Pipeline de CI/CD

Foi configurado um pipeline simples utilizando GitHub Actions. Sempre que ocorre um push ou pull request na branch `main`, o GitHub executa automaticamente:

1. Checkout do código.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Execução dos testes.
5. Execução da aplicação.

## Estrutura do projeto

```text
frases-motivacionais/
│
├── index.js
├── package.json
└── .github/
    └── workflows/
        └── ci.yml
```