    <template>
        <section>
        
            <div class="cvmpf">
            <h2> Accédez au CV</h2>
            <figure>
          <a href="#"><img src="../assets/img/photompf.jpg" alt="photo de Marie pierre Frossard, femme senior"></a>
                    </figure>
       <a href="#" img src="../assets/img/CVNPF.png" target="_blank" >Curriculum Vitae</a>
       <br><br>
       <div class="bouton">
  <h1>En savoir plus!</h1>
   <button class="bout" @click="this.exists = !this.exists">{{btnText}}</button>
   <br>
   <br>
  <p v-if="exists">Ce CV a été réalisé cette année en utilisant les codes HTML et CSS </p>
</div>

          </div>
        <div class="socket">
            <h2>Un cahier des charges co-construit</h2>
            <figure>
            <a href="#"><img src="../assets/img/socket.png" alt="photo du logo de l'entreprise socket : une chaussette sur fond blanc"></a> 
        </figure>
        <p> <a href="../assets/img/CVMPF.png" alt="CV détaillé de l'expérience professionnelle de Marie Pierre FROSSARD" 
            target="_blank"> Cahier des charges </a></p>
        <div class="bouton">
            <h1>Définition de votre besoins</h1>
            <button class="bout" @click="this.exists = !this.exists">{{btnText}}</button>
            <br>
            <br>
            <p v-if="exists">Votre site sera réalisé avec un travail colaboratif avec vos élus</p>
            </div>

        </div>
        <div class="client">
            <h2>Votre site </h2>
            <figure>
            <a href="#"><img src="../assets/img/client.png" alt="photo d'un logo représentant un village"></a> 
        </figure>
        <a target="_blank" href="../../img/CVMPF.png">Accès à votre site</a>
        <br><br>
        <div class="bouton">
            <h1>Votre futur réalisation</h1>
            <button class="bout" @click="this.exists = !this.exists">{{btnText}}</button>
            <br>
            <br>
            <p v-if="exists">Nous vous accompagnerons pour la réalisation, la mise en ligne, la maintenance de votre site</p>
            </div>
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
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: green;
text-align: center;
}
a img {
    border-radius: 75px;
}

#photompf{
    cursor:zoom-in;
}
.cvmpf {
height:500px;
width:500px;
padding-left: 20px;
border:dashed;
}

.socket {
height:500px;
width:500px;
border: dashed;
}

.client {
height:500px;
width: 500px;
border: dashed;
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

