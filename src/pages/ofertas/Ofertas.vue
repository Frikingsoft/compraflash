<template>
  <div class="q-mt-md row items-start verOfertas">
    <q-card class="my-card col-12 bg-primary glossy text-white ofertas" v-for="(item,index) in ofertas" :key="index">
      <q-card-section>
        <div class="text-h4">{{item.nombre}}</div>
        <div class="text-subtitle2" v-for="(i,indice) in item.articulo" :key="indice"> <span v-if="indice==='precio'">$</span> {{i}}</div>
         <div class="imagen">
           <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" class="rounded-borders"/>
         </div>
         
        <div class="text-h6">{{item.local}}</div>
        <q-rating
        v-model="item.calificacion"
        size="2em"
        color="white"
         max="10"
        readonly
        icon="star_border"
        icon-selected="star"
      />    
      </q-card-section>
     
    </q-card>
  </div>    
</template>

<script>

export default {
  name: "PageIndex",
  components:{
 
  },
    data () {
    return {
     
    }
  },
   methods: {},
  computed: {
    ofertas: {
      get() {
        return this.$store.state.ofertas.ofertas;
      },
    }
  },
 
};
</script>
<style scoped>
@import url("./oferta.css");
</style>