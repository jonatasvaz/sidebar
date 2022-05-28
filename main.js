 // variáveis
 const btn = document.querySelector('#btn');
 const bxSearch = document.querySelector('.bx-search');
 const sidebar = document.querySelector('.sidebar');
 const home = document.querySelector('.homeContent');
 const end = document.querySelector(".end");

 // Eventos de escuta do click
 btn.addEventListener('click',()=>{
     sidebar.classList.toggle('active');
     home.classList.toggle('active');
     end.classList.toggle('active');
 });

 bxSearch.addEventListener('click',()=>{
     sidebar.classList.toggle('active');
     home.classList.toggle('active');
     end.classList.toggle('active');
 });