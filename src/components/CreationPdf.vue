<template>
    <section>
        <div class="cvmpfpdf">
        <h2> Accédez au CV</h2>
        <button @click="downloadPdf('/public/CVMPF.pdf')">Charger le document pdf</button>
        </div>

    <div class="socketpdf">
        <h2>Un cahier des charges co-construit</h2>
        <button @click="downloadPdf('/public/CDCSOCKET.pdf')">Charger le document pdf</button>
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
.cvmpfpdf {
height:200px;
width:750px;

}

.socketpdf {
height:200px;
width:750px;
}


</style>

<script>
import useDownloadPdf from './DownloadPdf.vue';

export default {
  name: 'Mon CV',
  setup() {
    const { downloadPdf } = useDownloadPdf();

    return {
      downloadPdf,
    };
  },
};
</script>