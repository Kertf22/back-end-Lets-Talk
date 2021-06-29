<h1>Back-end Lets Talk</h1>

<p align="center">Aqui será montada em node.Js.js toda a aquitetura do sistema do projeto Lets-Talk.</p>

<div align="center">
<img src="https://img.shields.io/badge/javascript-check-orange">
</div>
<h1>Organização</h1>
  
  <h3>O projeto será separado em algumas partes:</h3>

  <br>

  ## <p>API<p>

  <h3>----------<br>
   Cadastro de usuários, de menssagens e de grupos e armazenamento no banco de dados POSTGRES, serão feitos aqui.</h3>

   <br>

   <h3>Ainda, toda requisição será autenticada.
     <br>
    ----------</h3>

  <br>

  ## <p >Web socket<p>
  
  <br>

   <h3>----------<br>
    Para conexão real-time entre os usuários utilizaremos o framework websocket.io.
  <br>----------</h3>
   

   

   
   ### REGRAS
   
    Usuários:

      [] Cada e-mail poderá ser cadastrado somente uma vez.

    Chats:

      [] A pessoa que criar o chat deve estar autenticada.

      [] A pessoa que criar o chat será o adm do chat.

      [] Caso o adm saia do chat a ultima pessoa a entrar no caht será o novo adm, se não houver mais ninguém o grupo será deletado.

      [] Somente o adm pode alterar o nome do chat
   
     
          
    
