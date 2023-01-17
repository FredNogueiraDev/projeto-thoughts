# Thoughts

![Badge Projeto finalizado](http://img.shields.io/static/v1?label=STATUS&message=Finalizado&color=GREEN&style=for-the-badge)

</br>

Projeto desenvolvido para exercitar meus conhecimentos em **HTML, CSS, JavaScript, MySQL e NodeJS,** para isso, foi implementado uma rede social denominada de Thoughts, a mesma se baseia no que os usuários estão pensando, estes pensamentos são chamados de thought e ficam expostos na página “Home” para que todos possam ver.

</br>

![home](https://user-images.githubusercontent.com/102488476/212920147-80ece5a1-a17c-4dc8-bab4-5f17f9451fa0.png)

![dashboard](https://user-images.githubusercontent.com/102488476/212920281-0f18cc9b-fd5d-4f2b-9b35-9a84a51f38e4.png)

![registro](https://user-images.githubusercontent.com/102488476/212920317-a74d5df3-b423-428c-bc8a-c79ce52b0cd7.png)

</br>

Os posts ficam salvos em um banco de dados MySQL, além das contas dos usuários com nome, email e senha, a mesma é criptografada com auxilio do bcrypt.

</br>

![bd](https://user-images.githubusercontent.com/102488476/212920359-a775528e-e2a3-4e30-8a95-28df865a50ea.png)

</br>

Neste exemplo, os usuários Joao e Vinicius estão usando a mesma senha, mesmo assim, o bcrypt se encarrega de criptografar de forma diferente, para a segurança de todos.

</br>

## Como utilizar o projeto

Para utilizar o Thoughts, você deve ter os seguintes softwares instalados em sua máquina:

* Node v.12.22.9
* MySQL 8.0.27

### Passo a passo

- Criação do banco de dados

```html
CREATE SCHEMA `thoughts` ;
```

- Instalar dependências

```html
npm install
```

- Com as dependências instaladas e o banco criado, as tabelas serão baixadas automáticamente ao executar:

```html
npm start
```

- Com isso, acesse: [http://localhost:3000](http://localhost:3000/), e o projeto estará pronto para o uso.

---

## Autor

| [<img src="https://avatars.githubusercontent.com/u/102488476?v=4" width=115><br><sub>Frederico Nogueira</sub>](https://www.linkedin.com/in/frederico-nogueira-654924238/) | 
| :---: |
