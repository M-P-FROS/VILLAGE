    <template>
        <section>
        
            <div class="cvmpf">
            <h2> Accédez au CV</h2>
            <figure>
          <a href="#"><img src="../assets/img/photompf.jpg" alt="photo de Marie pierre Frossard, femme senior"></a>
          </figure>
          <div class="bouton">
  <h1>En savoir plus!</h1>
  <br>
     <button class="bout" @click="this.exists = !this.exists">{{btnText}}</button>
   <br>
   <br>
  <p v-if="exists">Ce CV a été réalisé en janvier 2024 en utilisant les langages HTML et CSS.
  <br>
  <br>  
  <a href="https://github.com/M-P-FROS/CVMPF.git" target="_blank">Lien GITHUB</a>
  </p>
</div>

          </div>
        <div class="socket">
            <h2>Un cahier des charges co-construit</h2>
            <figure>
            <a href="#"><img src="../assets/img/socket.png" alt="photo du logo de l'entreprise socket : une chaussette sur fond blanc"></a> 
        </figure>
                <div class="bouton">
            <h1>Définition de votre besoins</h1>
           <br>
            <button class="bout" @click="this.exists = !this.exists">{{btnText}}</button>
            <br>
            <br>
            <p v-if="exists">Cet exemple de cahier des charges a été réalisé en février 2024.<br>
              Votre site sera réalisé à partir d'un cahier des charges rédigé en collaboration avec les élus de votre collectivité.</p>
            </div>

        </div>
        <div class="client">
            <h2>Votre site </h2>
            <figure>
            <a href="#"><img src="../assets/img/client.png" alt="photo d'un logo représentant un village"></a> 
        </figure>
          <br>
        <a target="_blank" href="../../img/PNF.png">Accès à votre site</a>
        </div>
        </section>        
    </template>


<style scoped>
section{
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-content:center;
justify-content: space-evenly;
color: green;
text-align: center;
}
a img {
    border-radius: 75px;
}
a{
  color:bisque;
}

#photompf{
    cursor:zoom-in;
}
.cvmpf {
height:450px;
width:500px;
border:dashed;
}
.cvmpf.bouton {
  padding-left: 0px;
}

.socket {
height:450px;
width:500px;
border: dashed;
}

.client {
height:450px;
width: 500px;
color:green;
border: dashed;
}
.client a{
  color: green;
  font-size: 22px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.bouton{
    padding-top: 30px;
}
.bouton  p {
    background-color: green;
    padding: 10px;
    color: bisque;
  }
  .bouton h1{
  color: green;
} 

.cvmpf.a{
  color: bisque;
}

</style>

<script>
export default {
  data() {
    return {
      exists: false
    }
  },
  computed: {
    btnText() {
      if(this.exists) {
        return 'Retour';
      }
      else {
        return 'En savoir plus';
      }
    }
  }
}
</script>

