export default function () {
  return {
    abrirMenu:false,
    login:true,
    contacto:false,
    pedido:false,
    nocturno:false,
    usuario:{
      nombre:"",
      apellido:"",
      foto:"https://ayudawp.com/wp-content/uploads/2014/02/usuario-registrado.jpg"
    },
    rubros:[
      {nombre:"Ofertas",icono:"local_offers",ruta:"/", mensajes:4},
      {nombre:"Alimentos",icono:"fastfood",ruta:"/alimentos"},
      {nombre:"Medicina",icono:"local_hospital",ruta:"/medicina"},
      {nombre:"Servicios",icono:"fas fa-comment",ruta:"/servicios"},
      {nombre:"Favoritos",icono:"star",ruta:"/favoritos"},
      {nombre:"Ferretería",icono:"star",ruta:"/ferreteria"}
    ],
    opcionesUsuario:[
      {nombre:"Perfil",icono:"assignment_ind",estado:true},
      {nombre:"Grupos",icono:"groups",estado:true},
      {nombre:"Seguridad",icono:"lock",estado:true},
      {nombre:"Tarjetas",icono:"credit_card",estado:true},
      {nombre:"Carrito",icono:"shopping_cart",estado:true},
      {nombre:"Favoritos",icono:"stars",estado:true},
      {nombre:"Iniciar Sesión",icono:"fact_check",estado:false},
      {nombre:"Registrarse",icono:"how_to_reg",estado:false},
      {nombre:"Cambiar Usuario",icono:"cached",estado:true},
      {nombre:"Cerrar Sesión",icono:"exit_to_app",estado:true}
    ]
  }
}
