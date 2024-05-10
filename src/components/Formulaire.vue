<template>
  <div class="formulaire">
    
      <form id="App" 
      @submit="checkForm"
      method="post">

      <h2> Formulaire de contact à renseigner</h2>
    <p v-if="errors.length">
      <p>Merci de corriger</p>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </p>

    <p>
      <label for="surname">Nom: </label>
      <input name="surname" type="text" v-model="surname">
    </p>

    <p>
      <label for="firstname">Prénom: </label>
      <input name="firstname" type="text" v-model="firstname">
    </p>

    <p>
      <label for="collectivité">Collectivité: </label>
      <input name="collectivité" type="text" v-model="collectivité" rows="10" cols="66">
    </p>

    <p>
      <label for="qualité">Qualité: </label>
      <input name="collectivité" type="text" v-model="collectivité">
    </p>

    <p>
      <label for="email">Mail: </label>
      <input name="email" type="email" v-model="email">
    </p>
    <h2>Laissez moi un message</h2>
<p>  <label for="message"></label>
    <textarea id="message" name="message" rows="10" cols="100">message/.....</textarea>
</p>

    <p>
      <input type="submit" value="Submit">
    </p> 
 
 </form>
</div>
</template>

<style>

.formulaire{
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-content:center;
align-items:flex-start;
justify-content: space-evenly;
color: green;
padding-left:20px;
text-align: left;
font-weight:bold;
font-size:larger;
width:1550px;
}


</style>





<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      errors: [],
      surname: null,
      firstname: null,
      email: null
    }
  },
  methods: {
    checkForm: function(e) {

      // Clear errors
      this.errors = [];

      // Check if the surname is not empty and length <= 50
      if (!this.surname || this.surname.length > 50)
      {
        this.errors.push("Le nom ne peut dépasser 50 caractères <= 50 !");
      }

      // Check if the firstname is not empty and length <= 50
      if (!this.firstname || this.firstname.length > 50)
      {
        this.errors.push("Le prénom ne peut dépasser 50 caractères <= 50 !");
      }

      // Check if the email is not empty and match the email pattern
      var re = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
      if (!this.email || !re.test(this.email))
      {
        this.errors.push("le mail renseigné est invalide !");
      }

      if (!this.errors.length)
      {
        return true;
      }

      e.preventDefault();
    }
  }
}
</script>











































































