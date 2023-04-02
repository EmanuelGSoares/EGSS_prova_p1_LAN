<h2> O aplicativo de teste usado foi o Insomnia </h2>

Para instalar as dependências
- npm install

Para rodar o servidor 
- npm run dev

O banco esta hospedado no mongoDB com permissão global (0.0.0.0) <br /> <br />
Utilizado MongoDB, logo o arquivo "index.sql" ficou inutilizado

As rotas para cada acesso são:
- rota GET '/pokemon' = index, mostra todos os dados do banco <br />
- rota POST '/pokemon' = rota com body json para inserção dos dados com o seguinte padrão:<br />
  - {
     "nome": " ", <br />
    "tipoUm": " ", <br />
    "tipoDois": " ", <br />
    "genero": " " <br />
   }
- rota GET '/pokemon-info/:id' = rota de busca especifica baseado no id cadastrado <br />
- rota DELETE '/pokemon-delete/:id' = rota de exclusão baseado no id cadastrado<br />
- rota PUT '/pokemon-update/:id' = rota de edição/atualização baseado no id cadastrado
