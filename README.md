<h1>Trybesmith</h1>
<p>Este projeto foi desenvolvido em novembro de 2022 durante meus estudos na <a href="https://www.betrybe.com/">Trybe</a>.</p>

<br/>

<h2>O quê foi desenvolvido</h2>
<p>Foi desenvolvido um CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript.<p>
<br/>
  
<h2>O quê foi avaliado</h2>
<ul>
  <li>Declaração de variáveis e funções com tipagens Typescript;</li>
  <li>Construção de uma API Node Express utilizando o Typescript.</li>
</ul>

<br/>

<h2>Endpoints</h2>

 <h3>/login</h3>

| Método | Função | Corpo |
|---|---|---|
|POST| Realiza login e retorna o token | { "username": string, "password": string } |

<hr />
<h3>/products</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Busca produtos |  |
|POST| Cadastra produto | { "name": string, "amount": string }|

<hr/>
<h3>/users</h3>

| Método | Função | Corpo |
|---|---|---|
|POST| Cadastra usuário | { "username": string, "classe": string, "level": number, "password": string } |

<hr />
<h3>/orders</h3>

| Método | Função | Corpo |
|---|---|---|
|GET| Lista pedidos | |
|POST| Cadastra pedidos | { "productsIds": arrayOfNumbers } |

<br/>

<h2>Guia de instalação</h2> 
<ol>
  <li>
    <p>Clone o repositório</p>
    <pre>git clone git@github.com:celso-rodrigo/trybesmith.git</pre>
  </li>
  <li>
    <p>Abra a pasta do repositório</p>
  </li>
  <li>
    <p>Instale as dependências</p>
    <pre>npm install</pre>
  </li>
  <li>
    <p>Inicie o projetot</p>
    <pre>npm start</pre>
  </li>
</ol>
