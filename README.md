# Toughts

O projeto Toughts é uma rede social que se baseia no que os usuários estão pensando, os pensamentos ficam expostos na página HOME e todos podem ver.

Os pensamentos são chamados de toughts, todos eles ficam salvos em um banco de dados MySQL, além das contas dos usuários com nome, email e senha que é criptografada com auxilio do bcrypt.

![Thought](https://user-images.githubusercontent.com/102488476/189250097-1f98fdac-c7ba-4aed-85e3-304ea24c7ec2.png)

No projeto utilizei express, sequelize, handlebars, MySQL e mais…

Eu o desenvolvi com auxílio do professor Matheus Battisti (desenvolvedor Full Stack)

## Como utilizar o projeto

Para utilizar o Toughts você deve ter:

```html
Node v.12.22.9
MySQL 8.0.27

```

### Passo a passo

- Criação do banco de dados

```html
CREATE SCHEMA `thoughts` ;
```

- Instalar dependências

```html
npm install
```

- Com as dependências instaladas e o banco criado, as tabelas serão baixadas automaticamente ao executar

```html
npm start
```

- Então, acesse: [http://localhost:3000](http://localhost:3000/), e o projeto está pronto para o uso.

---

Por: [Frederico Nogueira](https://www.linkedin.com/in/frederico-nogueira-654924238/) (LinkedIn)
