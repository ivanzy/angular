# Conhecendo Angular

Vamos testar a nossa primeira aplicação Angular. Nesse momento, não é importante entendermos tudo o que está acontecendo, vamos apenas tentar executar o código e ter nossa primeira experiência com o ambiente de desenvolvimento e o framework. 

Para desenvolver uma aplicação Angular, precisamos ter o (Node)[https://nodejs.org/en/download/] e o npm instalado na nossa máquina. Verifique se o Node e o npm foram instalados corretamente; 
```console
$ node -v
$ npm -v
```

É necessário também instalar o TypeScript
```console 
$ npm install -g typescript
$ tsc
```

Esse tutorial é uma versão resumida do guia que está no site do [Angular](https://angular.io/guide/setup-local). Para instalar o angular execute: 

```console
$ npm install -g @angular/cli
```

## Criar um Workspace e uma aplicação inical

1. Crie um novo app pela CLI, defina todas as configurações como padrão. Esse comando demora um pouco para executar.

```console
$ ng new meu-app
```

2. Entre no diretório que contém o código do app
```console
$ cd meu-app/
```

3. Execute o app
```console
$ ng serve --open
```