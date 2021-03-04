<template>
  <div class="q-mt-md row items-start verOfertas">
    <q-card class="my-card col-12 bg-primary text-white ofertas" v-for="(item,index) in ofertas" :key="index" @click="seleccionar(item)" >
      <q-card-section>
        <div class="text-h4 fondoTexto">{{item.nombre}}</div>
        <div class="text-weight-bold text-primary flex flex-center bordeTexto" v-for="(i,indice) in item.articulo" :key="indice"> <span v-if="indice==='precio'">$</span> {{i}}</div>
         <div class="imagen">
           <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" class="rounded-borders"/>
         </div>
         
        <div class="text-h6 fondoTexto">{{item.local }}</div>
        <q-rating
        v-model="item.calificacion"
        size="2em"
        color="primary"
         max="10"
        readonly
        icon="star_border"
        icon-selected="star"
        class="bordeTexto"
      />    
      </q-card-section>
      <q-card-section>
         <q-card-actions>
        <q-btn @click="pedido=true" flat class="bg-grey-3 text-primary text-weight-bold" style="width:150px">Hacer Pedido</q-btn>
        <q-btn @click="contacto=true" flat class="bg-grey-3 text-primary text-weight-bold" style="width:150px">Contacto</q-btn>
      <BotonPedido :itemusuario="datosClick"/>
      <BotonContacto :itemusuario="datosClick"/>
      </q-card-actions>
      </q-card-section>
    </q-card>
  </div>    
</template>

<script>
import BotonPedido from './BotonPedido'
import BotonContacto from './BotonContacto'
export default {
  name: "PageIndex",
  components:{
    BotonPedido,
    BotonContacto
  },
    data () {
    return {
     datosClick:""
    }
  },
   methods: {
     seleccionar(item){
      this.datosClick=item
     }
   
   },
  computed: {
    ofertas: {
      get() {
        return this.$store.state.ofertas.ofertas;
      },
    }, 
    pedido: {
      get() {
        return this.$store.state.login.pedido;
      },
      set(valor){
        this.$store.commit('login/realizarPedido',valor)
      }
    },
     contacto: {
      get() {
        return this.$store.state.login.contacto;
      },
      set(valor){
        this.$store.commit('login/realizarContacto',valor)
      }
    }
  },
 
};
</script>
<style scoped>
@import url("./oferta.css");
</style>