<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <Toolbar/>
    </q-header>

    <q-drawer v-model="abrirMenu" bordered content-class="bg-primary" overlay>
      <Menus/>
    </q-drawer>

    <q-page-container @click="abrirMenu=false" class="row justify-center bg-grey-3">
      <div class="col-12 flex flex-center">
          <input type="text" placeholder="Buscar..." class="q-mt-md buscar text-white"/>
      </div>
    
      <router-view v-if="!login"/>
      <Login v-if="login"/>
    </q-page-container>
    <Tabs/>
  </q-layout>
</template>

<script>
import Toolbar from './componentes/Toolbar'
import Menus from './componentes/Menus'
import Tabs from './componentes/Tabs'
import Login from './componentes/Login/Login'
export default {
  name: 'MainLayout',
  components: {Toolbar,Menus,Tabs,Login},
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
        },
      login:{
        get(){
          this.$store.state.login.login
        }
      }  
  }
}
</script>
<style scoped>
  @import url('./inicio.css');
</style>
