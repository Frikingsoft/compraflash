<template>
  <div>
    <q-dialog v-model="pedido">
      <q-card>
        <q-card-section>
          <div class="text-h6">Realizar Pedido</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          ¿Confirma que quiere realizar el pedido?
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="OK" class="bg-primary text-white" v-close-popup/>
          <q-btn flat label="Cancelar" class="bg-primary text-white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    pedido: {
      get() {
        return this.$store.state.login.pedido;
      },
      set(valor){
        this.$store.commit('login/realizarPedido',valor)
      }
    }
  },
};
</script>

<style scoped>
</style>