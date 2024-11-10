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


  
