## React + Vite Teddy teste técnico
Projeto criado como teste técnico para a empresa [Teddy](https://teddydigital.io/)

## Tecnologias utilizadas:
 - Front end desenvolvido com [Vite](https://vite.dev/) e [React](https://pt-br.react.dev/)
 - Containerização com [Docker](https://www.docker.com/)
 - Estilização com [Tailwind](https://tailwindcss.com/)
 - Formatação de código com [Prettier](https://prettier.io)
 - Encontro de erros com [ESLint](https://eslint.org)
 - Typagem com [TypeScript](https://typescriptlang.org)
 - Testes unitários feitos com [Vitest](https://vitest.dev/)

## Utilização:
 - **Docker** <br>
    - Para utilizar o docker como forma de levantar o serviço front end, vá até a pasta do projeto 
    - E execute: ``docker compose up --build -d``

 - **CLI:** <br>
Para utilizar o CLI ou terminal para iniciar o projeto você deve configurar seu ambiente e para isso deve: 
      - Fazer a instalação do node seguindo a documentação disponível na pagina do [node](https://nodejs.org/en/download)<br>

   Após o ambiente configurado conforme suas variáveis de ambiente siga as etapas abaixo:
    - Para executar o projeto através do terminal vá até a pasta do projeto. <br> 
    - e execute: ``yarn install`` para instalar as dependencias de projeto. <br>
    - Após execute ``yarn dev`` para inicar o servidor. <br>

## Testing:
Para executar os testes, já com o ambiente configurado, execute
 - ``yarn test`` 

## Pontos de melhorias ou não finalizados:
Alguns pontos de melhoria que podiam ser implementados ou melhorados no projeto.
- Adição testes unitátios para garantir a estabilidade do código.
- Com o docker criado, adicionar uma linha CI/CD do GitHub actions.
- Melhoria da documentaçãO utilizando o Gitpod para teste do projeto e código em nuvem.
- Melhorias de desing e responsividade como adição de uma snackbar com os resultados das requisições.

## Visualizaçao do projeto através de video: 
Voce pode visualizar as funcionalidades do projeto em no [link](https://youtu.be/qvssJZawZgw)