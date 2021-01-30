<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <Toolbar/>
    </q-header>

    <q-drawer v-model="abrirMenu" bordered content-class="bg-primary" overlay>
      <Menus/>
    </q-drawer>

    <q-page-container @click="abrirMenu=false" class="row justify-center bg-grey-3" v-touch-swipe.mouse="cambiarPagina" style="height:90vh">
      <div class="col-12 flex flex-center">
          <input type="text" placeholder="Buscar..." class="q-mt-md buscar text-white"/>
      </div>
    
      <router-view/>
   
    
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
     info:null,
     pagina:0,
     ruta:''
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
          return this.$store.state.login.login
        }
      },
    rubros:{
       get(){
          return this.$store.state.login.rubros
        }
    }
  },
  methods:{
     cambiarPagina ({ evt, ...info }) {
      this.info = info
      let ultimaPagina=this.rubros.length  
            
      if(this.info.direction==="right"){
        if(this.pagina>0){
        this.pagina=this.pagina-=1
        this.ruta=this.rubros[this.pagina].ruta 
        this.$router.push(this.ruta)
        }
      }
      if(this.info.direction==="left"){
          if(this.pagina<ultimaPagina){
            this.pagina=this.pagina+=1
            this.ruta=this.rubros[this.pagina].ruta 
            this.$router.push(this.ruta)
          }
      }
   
    }
  }
}
</script>
<style scoped>
  @import url('./inicio.css');
</style>
