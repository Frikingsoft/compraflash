<template>
  <div class="flex flex-center flex-wrap">
    <div class="imagen">
      <q-avatar size="160px" class="foto">
        <img :src="usuario.foto" class="fotoUsuario">
      </q-avatar>
    </div>
    <q-list v-for="(item,index) in opcionesUsuario" :key="index" class="text-white text-weight-bold lista glossy">
      <q-item clickable v-ripple v-if="item.estado === login">
        <q-item-section avatar>
          <q-icon :name="item.icono" color="white"/>
        </q-item-section>
        <q-item-section color="white">{{item.nombre}}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  computed: {
    opcionesUsuario: {
      get() {
        return this.$store.state.login.opcionesUsuario;
      },
    },
    usuario:{
      get() {
        return this.$store.state.login.usuario;
      },
    },
     login: {
      get() {
        return this.$store.state.login.login;
      },
    },
    
  },
};
</script>
<style scoped>
  .lista{
    width: 100%;
    box-shadow: 0 0 2px rgb(255, 255, 255);
  }
  .imagen{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    box-shadow: 0 0 2px rgb(255, 255, 255);
  }
  .fotoUsuario{
    border: 5px solid rgb(255, 255, 255);
  }
  .foto{
    box-shadow: 0 0 15px rgb(255, 255, 255);
  }
 

</style>