<script setup>
import {createApp } from 'vue'
let logoLMV ="<img logoLMV=.\VILLAGE\src\assets\img\logoLMV.png>"
</script>

<template>
    <header>
              <div class="logo">
                  <h5>lien LOGO??</h5>
        </div>
        <div class="entete">
            <h1>VILATGE REALISATION DE SITES WEB <br> POUR LES COMMUNES DE PETITES STRATES</h1>
        </div>
        <div class="menu">
            <nav>
            <ul>
              <li><a href="#Accueil">Accueil</a></li>
              <li><a href="#Contact">Contact</a></li>
              <li><a href="#404">404</a></li>
            </ul>
          </nav>
        </div>
    </header>
</template>

<style scoped>

header {
  width: 1200px;
  height: 107px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color:green;
  font-weight: bold;
  top:0px;
  left:0px;
  }
.logo {
  width: 130px;
  height: 107px;
  border-style: solid;
  display:flex;
  object-fit: none;
}

.entete {
  float: right;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  width: 930px;
  border-style: solid;
}

.entete h1 {
    font-weight:bold;   
}
.menu {
  font-size: 0.8rem;
  text-align: left;
  width: 130px;
 
}

.menu a {
    color: green;
    font-weight: bold;
}
</style>