<template>
    <div class="formularioLogin" style="max-width: 450px;max-height:300px">
        <q-toolbar class="bg-primary glossy text-yellow-11 flex flex-center tituloLogin">
            Login
        </q-toolbar>
       <q-form @submit="enviar" class="flex flex-wrap flex-center">
            <q-input class="camposEntrada" v-for="(item,index) in campos" :key="index" filled 
            :v-model="item.valor" :label="item.etiqueta" lazy-rules
            standout="bg-primary text-yellow-11"
            :rules="[ val => item.valor && item.valor.length > 0 || `${item.etiqueta} No cumple el mínimo requerido`]"/>
       <div class="botonEnviar">
         <q-btn label="Enviar" @click="enviar" type="submit" color="primary" text-color="yellow-11" class="botonEnviarClase"/>
       </div>
       </q-form> 

  </div>
  
</template>

<script>
export default {
  data() {
    return {
        campos:[
            {nombre:"usuario",valor:"",etiqueta:"Usuario"},
            {nombre:"contra",valor:"",etiqueta:"Contraseña"}
        ]
    };
  },
  methods:{
      enviar(){
          alert("Enviado")
  }
  }
};
</script>

<style scoped>
.formularioLogin{
    margin-top: 150px;
    width: 90%;
    border: 3px double brown;
    height: 60vh;
}
.tituloLogin{
    height: 50px;
    font-size: 25px;
    letter-spacing: 2px;
    margin-bottom: 20px;
    
}
.camposEntrada{
    margin-bottom: 5px;
    width: 80%;
}
.botonEnviar{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.botonEnviarClase{
    width: 100px;
}
</style>