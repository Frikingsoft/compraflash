<template>
  <div class="flex flex-center flex-wrap">
    <div class="imagen">
      <q-avatar size="160px" class="foto">
        <img :src="usuario.foto" class="fotoUsuario">
      </q-avatar>
    </div>
    <q-list v-for="(item,index) in opcionesUsuario" :key="index" class="text-yellow-11 lista glossy">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon :name="item.icono" color="yellow-11"/>
        </q-item-section>
        <q-item-section color="yellow-11">{{item.nombre}}</q-item-section>
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
    }
  },
};
</script>
<style scoped>
  .lista{
    width: 100%;
    box-shadow: 0 0 2px yellow;
  }
  .imagen{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    box-shadow: 0 0 2px yellow;
  }
  .fotoUsuario{
    border: 5px solid rgb(225, 225, 141);
  }
  .foto{
    box-shadow: 0 0 15px yellow;
  }
</style>