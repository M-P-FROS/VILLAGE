<template>
   <div class="top">
   <header>
              <div class="logo">
                 <a href="#"><img src="../assets/img/logoLMV.png" alt="logo entreprise représentant des coteaux et des collines"></a>
              </div>
        
              <div class="entete">
                <h1>"VILATGE" REALISATION DE SITES WEB <br> POUR LES COMMUNES DE PETITES STRATES</h1>
              </div>
        
              <div class="menu">
              <div>
              <router-view></router-view>
              </div>
                <nav>
                <ul>
                  <li><router-link to="/Presentation">Présentation</router-link></li>
                  <li><router-link to="/Creations">Créations</router-link></li>
                  <li><router-link to="/Formulaire">Formulaire</router-link></li>
                  </ul>
              </nav>
              </div>
    </header>
   </div>
</template>

<style scoped>

.top {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position:fixed;
  top:4.8px;
  overflow: hidden;
  height: 150px;
 }

header {
  width: 1540px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color:green;
  font-weight: bold;
  position: sticky;
  background-color: white;
  }

.logo {
  width: 300px;
  height: 150px;
  padding-left: 20px;
  display:flex;
  object-fit: none;
  position: fixed;
  padding-top: 20px;  
}
.entete {
  padding-left:301px;
  text-align: center;
  width: 950px;
  height:150px;
  position: fixed; 
  font-size: 0.8rem;
}

.entete h1 {
    width: 950px;
    padding-top: 20px;
    font-size: 35px;
}
.menu {
  text-align:left;
  width: 300px;
  height: 150px;
  padding-left: 1255px;
  padding-top: 20px;
 

 }
.menu ul{
  list-style-type:none;
  font-size:x-large;
}
.menu a {
    color: green;
    font-weight: bold;   
}

a:hover,

a.router-link-active {
    background-color:bisque;
  }
</style>