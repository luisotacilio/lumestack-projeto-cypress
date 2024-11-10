## Teste Funcional com Cypress
Este repositório contém testes funcionais do software OrangeHRM usando o Cypress. 
O objetivo e demonstrar a utilização dessa ferramenta em um teste funcional automatizado.
O contexto para sua realização é ser parte do treinamento para formação em Engenharia de
Qualidade ministrado pela escola de QA (Quality Assurance) Lumestack https://www.lumestack.com.

### Índice
- Introdução
- Pré-requisitos
- Execução dos Testes
- Estrutura de Pastas

### Introdução
O OrangeHRM é um software de gerenciamento de recursos humanos de código aberto criado com 
diversas tecnologias da plataforma web moderna: javascript, VueJs, Jquery etc. Esse projeto
automatiza o teste das funcionalidades de acessar o aplicativo e atualizar os dados pessoais 
dos usuários cadastrados como candidatos a emprego. O cypress estara utilizando a linguagem 
Typescript que por ter um controle de tipagem de variáveis e objetos superior ao Javascript 
proporciona maior qualidade ao minimizar erros de tipo dados obtendo assim testes funcionais
mais robustos.

### Pré-requisitos
Instalação de:
- Node JS
```bash
https://nodejs.org/pt/download/prebuilt-binaries
```
- npm
```bash
npm init -y
```
- Cypress
```bash
npm install cypress --save-dev
```
- Typescript
```bash
npm install typescript --save-dev
```
- Criar e Editar o tsconfig.ts
```bash
npx tsc --init

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "lib": ["dom", "es6", "es7"],
    "types": ["node","cypress"],
    "strict": true,
    "skipLibCheck": true
  },
  "exclude": ["node_modules"],
  "include": ["**/*.ts"]
}
```
### Execução dos Testes
Clonar o projeto:
```bash
$ git clone git@github.com:luisotacilio/lumestack-projeto-cypress
```
Estando no diretorio de intalação do projeto executar o comando 
```bash
npm run dev
```
### Estrutura de Pastas
```bash
lumestack-projetoorangehrm-automation-cypress/
├── cypress/
│   ├── e2e/                    # Arquivos de Teste
|   ├── login.cy.js             # Arquivos .Spec contendo os casos de teste
│   ├── Pages                   # Paginas mapeadas com o Padrão arquitetural POM (Page Objecet Model)
|       ├── loginPage.ts        # Arquivo contendo elementos da página de login e as ações do teste
|       ├── myInfoPage.ts       # Arquivo contendo elementos da página de candidatos a emprego e as ações do teste
│   ├── Reports                 # Páginas mapaeadas com o Padrão arquitetural POM (Page Objecet Model)
|       ├── evidencia1.jpg      # Arquivo contendo imagem do resultado dos testes aplicados ao login
|       ├── evidencia2.jpg      # Arquivo contendo imagem do resultado de teste aplicados ao item myInfoPage
├── cypress.json                # Configuração do Cypress 
└── package.json                # Atributos, chaves e dependencias do projeto
└── README.md                   # Documentação
└── tsconfig.ts                 # Atributos, chaves e configurações da linguagem Typescript
```
	




  
