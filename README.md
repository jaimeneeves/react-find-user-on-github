# React - Buscar Usuário no GitHub

> Esse projeto tem como finalidade as seguintes ações:

### Funcionalidades
1. Pesquisar um usuário pelo seu nome no GitHub.
2. Listar os repositórios do usuário pesquisado.
3. Listar os seguidores do usuário pesquisado.
4. Listar quem o usuário pesquisado segue.

Nessa aplicação você irá pesquisar um usuário no GitHub pelo seu nome. Se a aplicação encontrar o usuário pesquisado, irá mostrar sua foto, nome, bio, quantidade de repositórios e seus stars, quantidade de seguidores e pessoas que o usuário segue.

### Lista de repositórios
![repositorio](https://user-images.githubusercontent.com/6599252/113571016-e5315200-95eb-11eb-890b-947015de27b8.png)

### Lista de seguidores
![seguidores](https://user-images.githubusercontent.com/6599252/113571077-0c881f00-95ec-11eb-8970-1d5b82bc9af7.png)

### Pessoas que o usuário segue
![seguindo](https://user-images.githubusercontent.com/6599252/113571129-275a9380-95ec-11eb-8d2b-766761a0eb06.png)


## Pré-requisitos
Para executar esse projeto algumas ferramentas precisam já está instaladas em sua máquina

* Git
* Node.js

## Estrutura de Arquivos

* `package.json`: Arquivo de configuração para o NPM, contém dependências e metadados do projeto
* `.gitignore`: Arquivos que devem ser ignorados pelo Git. O `node_modules` sempre será recriado
* `.env`: Arquivo onde configuramos nossas variáveis de ambiente
* `.editorconfig`: Arquivo que ajuda manter os mesmos estilos de codificação do projeto em IDEs e editores diferentes
* `generate-react-cli.json`: Arquivo de configuração da lib [generate-react-cli](https://github.com/arminbro/generate-react-cli)
* `src/index.js`: Este arquivo é o ponto de entrada para o aplicativo. Ele coloca nosso aplicativo na tela
* `src/components/*`: Todos os componentes do nosso aplicativo
* `src/services/*`: Todos os arquivos que servem como serviços para a aplicação

## Passo a passo para rodar a aplicação

```bash

# Faça o clone do projeto
$ git clone https://github.com/jaimeneeves/challenge-front-end-exame.git
$ cd challenge-front-end-exame

# Faça a instalação das dependências
$ npm install

# Após a instalação das dependências execute esse comando para rodar a aplicação
# modo desenvolvimento
$ npm start
```

## Ferramentas Usadas

| Tecnologia   | Descrição |
|----------|-------------|
| [React.JS](https://reactjs.org/) | Framework FrontEnd |
| [Bootstrap](https://getbootstrap.com/) | Componentes de UI|
| [Create React App](https://create-react-app.dev/) | Configurar App |
| [Generate React CLI](https://github.com/arminbro/generate-react-cli) | Auxilia na criação de componentes |

