<template>
  <div>
    <q-toolbar class="glossy text-yellow-11">
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="abrirMenu = true"/>
      <q-toolbar-title class="titulo">
        Compra <q-icon name="fas fa-bolt" class="animarFlash" /> Flash
      </q-toolbar-title>
      <q-btn flat dense round icon="qr_code_scanner" aria-label="Menu" />
    </q-toolbar>
  </div>
</template>

<script>
export default {
    computed:{
        abrirMenu:{
            get(){
                return this.$store.state.login.abrirMenu
            },
            set(valor){
                this.$store.commit('login/cerrarMenu',valor)
            }
        }
    }
};
</script>

