
<template>
       <footer>
       <h2> Ce site a été réalisé en mai 2024 en utilisant les langages HTML, CSS, Javascript ainsi que l'outil VScode implémenté de Vue.JS.</h2>
      
       <div class="facebook">
              <a href="#"><img src="../assets/img/facebook.png" alt="logo facebook"></a>
              <a class="lien" href="https://www.facebook.com/mariepierre.frossard" target="_blank">Lien facebook </a>
          </div>

          <div class="github">
              <a href="#"><img src="../assets/img/github.png" alt="github"></a>
              <a class="lien" href="https://github.com/M-P-FROS" target="_blank">Lien GITHUB</a>
          </div>

          <h3> MP FROSSARD </h3>
          <h3>54 Rte des Faget 64290 ESTIALESCQ</h3>

          <div class="mail">
            <a href="mailto:mp.frossard@gmail.com">mp.frossard@gmail.com</a>
          </div>

        </footer>
 </template>
 
 <style scoped>

footer{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position:fixed;
  bottom:10px;
  overflow: hidden;
  width:1550px;
  height:200px;
  background-color:green;
  color: bisque;
  padding-bottom: 0px;
 
    }

h2 {
  padding-left:20px;
  font-size:25px;
  text-align: center;
  width:1550px;
  height:40px; 
 }

.facebook{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-left:20px;
  padding-top:10px;
  width:750px;
  height:60px;
 }

 .facebook a img{
  width: 40px;
  height:40px;
 }

.lien {
  padding-left: 80px;
  font-size: 25px;
  color:bisque;
 }

 .github {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-top :10px;
  width:750px;
  height:80px;
 }

 .github a img{
  width: 40px;
  height:40px;
 }
 
 h3{
  padding-left:100px;
  font-size: 20px;
 }

.mail a{
  font-weight:bold;
  font-size:20px;
  padding-left:300px;
  color:bisque
 }
 </style>