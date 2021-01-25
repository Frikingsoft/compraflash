<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <Toolbar/>
    </q-header>

    <q-drawer v-model="abrirMenu" bordered content-class="bg-primary" overlay>
      <Menus/>
    </q-drawer>

    <q-page-container @click="abrirMenu=false" class="flex flex-center">
      <router-view />
    </q-page-container>
    <Tabs/>
  </q-layout>
</template>

<script>
import Toolbar from './componentes/Toolbar'
import Menus from './componentes/Menus'
import Tabs from './componentes/Tabs'
export default {
  name: 'MainLayout',
  components: {Toolbar,Menus,Tabs},
  data () {
    return {
      
    }
  },
 
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
}
</script>
<style scoped>
  @import url('./inicio.css');
</style>
