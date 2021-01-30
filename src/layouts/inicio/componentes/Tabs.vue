<template>
   <q-tabs v-model="opcion"  class="bg-primary glossy text-white shadow-2 menuFinal">
    <q-route-tab v-for="(item) in rubros" :key="item.nombre" :name="item.nombre" :icon="item.icono" :label="item.nombre" :to="item.ruta">
        <q-badge color="red" floating v-if="item.mensajes">{{item.mensajes}}</q-badge>
    </q-route-tab>
   </q-tabs>
</template>

<script>
    export default {
        data(){
            return{
                opcion: 'Ofertas'
            }
        },
        computed:{
            rubros:{
                get(){
                   return this.$store.state.login.rubros
                }
            }
        },
       
    }
</script>

<style scoped>
    .menuFinal{
        position: fixed;
        bottom: 0;
        width: 100%;
       
    }

    .q-router-link--exact-active::before{
      
        content: " ";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 6%;
        border-radius: 50% 50% 0 0 /80%;
        background-color: white;
        box-shadow: -1px -1px 3px rgb(31, 31, 31);
    }
     .q-router-link--exact-active::after{
       
        content: " ";
        position: absolute;
        top: 0;
        width: 100%;
        height: 6%;
        border-radius: 0 0 50% 50%/80%;
        background-color: white;
        box-shadow: 1px 1px 3px rgb(31, 31, 31);
    }
  
</style>