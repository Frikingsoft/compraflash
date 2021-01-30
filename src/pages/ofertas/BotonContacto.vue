<template>
  <div>
    <q-dialog v-model="contacto" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">¿Cual es su Consulta?</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model=" registroContacto"
            autofocus
            @keyup.enter="contacto = false"
          />
        </q-card-section>

        <q-card-actions align="center" class="text-primary">
          <q-btn flat label="OK" v-close-popup />
          <q-btn flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      registroContacto:""
    }
  },
  computed: {
    contacto: {
      get() {
        return this.$store.state.login.contacto;
      },
      set(valor) {
        this.$store.commit("login/realizarContacto", valor);
      },
    },
  },
};
</script>

<style scoped>
</style>