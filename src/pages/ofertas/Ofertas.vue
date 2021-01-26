<template>
   <div> 
   
  </div>
</template>

<script>

export default {
  name: "PageIndex",
  components:{
   
  },
  data() {
    return {};
  },

  methods: {},
  computed: {
    ofertas: {
      get() {
        return this.$store.state.ofertas.ofertas;
      },
    }
  },
 
};
</script>
<style scoped>
@import url("./oferta.css");
</style>