# Projeto CI/CD com GitHub Actions e Render

Este projeto foi desenvolvido para demonstrar a implementação de um pipeline simples de CI/CD.

## Tecnologias utilizadas

* Node.js
* GitHub Actions
* Render

## Integração Contínua (CI)

Foi configurado um pipeline utilizando GitHub Actions que é executado automaticamente a cada push ou pull request na branch principal. O pipeline realiza:

* Checkout do código;
* Instalação das dependências;
* Execução dos testes;
* Execução da aplicação.

## Entrega Contínua (CD)

Foi utilizado o Render para realizar o deploy automático da aplicação. Sempre que uma alteração é enviada para o GitHub, uma nova implantação é realizada automaticamente.

Dessa forma, o projeto possui um pipeline completo de CI/CD.
