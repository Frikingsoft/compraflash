<template>
   <q-tabs v-model="opcion"  class="bg-primary glossy text-white shadow-2 menuFinal">
    <q-tab v-for="(item) in rubros" :key="item.nombre" :name="item.nombre" :icon="item.icono" :label="item.nombre">
        <q-badge color="red" floating v-if="item.mensajes">{{item.mensajes}}</q-badge>
    </q-tab>
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
        }
    }
</script>

<style scoped>
    .menuFinal{
        position: fixed;
        bottom: 0;
        width: 100%;
       
    }
    
    
</style>