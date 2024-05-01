<script setup>
import {ref} from 'vue'
</script>

<template>
    <header>
              <div class="logo">
                 <a href="#"><img src="../assets/img/logoLMV.png" alt="logo entreprise représentant des coteaux et des collines"></a>
        </div>
        <div class="entete">
            <h1>VILATGE REALISATION DE SITES WEB <br> POUR LES COMMUNES DE PETITES STRATES</h1>
        </div>
        <div class="menu">
            <nav>
            <ul>
              <li><a href="#Accueil">Accueil</a></li>
              <li><a href="#Contenu">Réalisations</a></li>
              <li><a href="#Contact">Contact</a></li>
              </ul>
          </nav>
        </div>
    </header>
</template>

<style scoped>

header {
  width: 
  834px;
  height: 107px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:green;
  font-weight: bold;
   }
.logo {
  width: 80px;
  height: 107px;
  display:flex;
  object-fit: none;
  position: fixed;
  top:0;
  left:0;
}

.entete {
  float: right;
  text-align: center;
  font-size: 0.6rem;
  width: 642px;
  position: fixed;
  top:0;
  left:81px;
}

.entete h1 {
    font-weight:bold;   
}
.menu {
  font-size: 0.8rem;
  text-align:left;
  width: 112px;
  position: fixed;
  top:0;
  left:723px;

 }
.menu ul{
  list-style-type:none;
}
.menu a {
    color: green;
    font-weight: bold;
   
}
</style>