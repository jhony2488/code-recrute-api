<h1 align="center" id="app-tarefas">
   App de estacionamento Back End
</h1>

<h2 id="tabela-de-conteudo">Tabela de conteúdos</h2>
<!--ts-->
   
- [Sobre](#---vuttr)

- [Tabela de Conteudo](#tabela-de-conteudo)

- [Status do projeto](#----vuttr--em-construção--)

- [Features](#----features)

- [Como usar](#como-usar)

  - [Pre Requisitos](#pré-requisitos)

  - [Instalação](#instalação)

  - [Rodando a API](#-rodando-a-api)

- [Testes](#-testes)

- [Documentação](#----documentatação-da-aplicação)

- [Tecnologias](#-tecnologias)

- [Autor](#autor)

- [Licença](#licença)
<!--te-->

<h2  id="features">  
  Features
</h2>

- [x] Desenvolver e realizar os testes
- [x] CRUD clientes
- [x] CRUD log de clientes
- [x] CRUD veiculos
- [x] CRUD Notas e moedas
- [x] Funcionalidade de gerar troco a partir de notas e moedas disponiveis e dar feedback em cima disso
- [x] middleware de segurança da api
- [x] Aplicado conteinerização com docker


<h2>Como usar</h2>

<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/docs/),[Docker](https://hub.docker.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h3 id="instalacao">Instalação</h3>

```bash
# Clone este repositório
$ git clone <https://github.com/jhony2488/desafio-flowdriver-back-end>
# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-flowdriver-back-end
# Instale as dependências
$ npm install || yarn install
```

<h3 id="rodando-api">🎲 Rodando a API com docker</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o Docker atravez do link abaixo caso ainda não o tenha instalado

- [https://hub.docker.com/](https://hub.docker.com/)

```bash
# Execute o docker compose no seu terminal/CMD
$  docker compose up --build

# O servidor inciará na porta:80 - acesse <http://localhost:80>
```

<h3 id="rodando-api">🎲 Rodando a API sem docker no Windows</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/](https://www.postgresql.org/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/)

```bash
# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate

# Execute a aplicação
$ npm run start || yarn start

# O servidor inciará na porta:80 - acesse <http://localhost:80>
```


<h3 id="rodando-api">🎲 Rodando a API sem docker no Mac</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/](https://www.postgresql.org/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/)

```bash

# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate

# Execute a aplicação
$ npm run start || yarn start

# O servidor inciará na porta:80 - acesse <http://localhost:80>
```

<h3 id="rodando-api">🎲 Rodando a API sem docker no Linux</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/](https://www.postgresql.org/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/)

```bash

# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate

# Execute a aplicação
$ npm run start || yarn start

# O servidor inciará na porta:80 - acesse <http://localhost:80>
```

<h2 id="tests">🛠 Testes com docker</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o Docker atravez do link abaixo caso ainda não o tenha instalado

- [https://hub.docker.com/](https://hub.docker.com/)

```bash
# Execute o docker compose no seu terminal/CMD
$  docker compose up --build

# Executar os testes
$ npm run test || yarn test

# Executar testes de estresse na API
$ npm run test-stress || yarn test-stress

```

<h2 id="tests">🛠 Testes sem docker no Windows</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/)

```bash
# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate

# Executar os testes
$ npm run test || yarn test

# Executar testes de estresse na API
$ npm run test-stress || yarn test-stress

```

<h2 id="tests">🛠 Testes sem docker no Mac</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/)

```bash
# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate

# Executar os testes
$ npm run test || yarn test

# Executar testes de estresse na API
$ npm run test-stress || yarn test-stress

```

<h2 id="tests">🛠 Testes sem docker no Linux</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/)

```bash
# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate

# Executar os testes
$ npm run test || yarn test

# Executar testes de estresse na API
$ npm run test-stress || yarn test-stress

```

<h2 id="app-demo">  
  Documentação da aplicação com docker
</h2>

```bash
# Execute o docker compose no seu terminal/CMD
$  docker compose up --build

# O servidor inciará na porta:80 - acesse a documentação <http://localhost:80/documentation/>
```

<h2 id="app-demo">  
  Documentação da aplicação sem docker com Linux
</h2>

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/)

```bash
# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate
#  Executar o build da documentação
$ npm run documentation || yarn documentation

# O servidor inciará na porta:80 - acesse a documentação <http://localhost:80/documentation/>
```

<h2 id="app-demo">  
  Documentação da aplicação sem docker com Windows
</h2>

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/)

```bash
# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate
#  Executar o build da documentação
$ npm run documentation || yarn documentation

# O servidor inciará na porta:80 - acesse a documentação <http://localhost:80/documentation/>
```

<h2 id="app-demo">  
  Documentação da aplicação sem docker com Mac
</h2>

#### Instale o POSTGRESQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

#### configure a o banco de dados e crie o banco de dados com o nome de appDB

- [https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/)

```bash
# Agora no seu CMD rode as migrations para criar as tabelas no banco de dados
$ sequelize db:migrate
#  Executar o build da documentação
$ npm run documentation || yarn documentation

# O servidor inciará na porta:80 - acesse a documentação <http://localhost:80/documentation/>
```

### Acesse a documentação da localmente

- [http://localhost:80/documentation/](http://localhost:80/documentation/)

<h2 id="app-demo">  
  Testar a API com Insomnia
</h2>

#### Instale o Insomnia atravez do link abaixo caso ainda não o tenha instalado

- [https://insomnia.rest/download](https://insomnia.rest/download)

#### Documentação do insomnia

- [https://docs.insomnia.rest/](https://docs.insomnia.rest/)


<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
- [Jest](https://jestjs.io/)
- [JWT](https://jwt.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [PostgreSQL](https://www.postgresql.org/docs/)

