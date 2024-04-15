<script setup>
import {createApp} from 'vue'
</script>

<template>
        <section class="presentation">
          <h2>Marie Pierre FROSSARD</h2>
          <p>Après une vie professionnelle dans le secteur privé puis pubic, 
              une reconversion me permet de vous proposer mes compétences en matière de réalisation de site web.
            Parcequ'un site de collectivité répond à une structure particulière, mes 20 dernières années réalisées
             en collectivité nous permettront d'échanger facilement pour créer votre site institutionnel.
            </p>
        </section>     
</template>

<style scoped>

.presentation {
  width: 742px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}


.presentation h2 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: left;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 742px;
  height: 70px;

}
.presentation p {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 742px;
  height: 200px;
  border-style: solid;
}
</style>

