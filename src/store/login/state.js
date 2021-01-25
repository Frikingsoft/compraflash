export default function () {
  return {
    abrirMenu:false,
    login:false,
    nocturno:false,
    usuario:{
      nombre:"",
      apellido:"",
      foto:"https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg"
    },
    rubros:[
      {nombre:"Ofertas",icono:"local_offers",ruta:"/", mensajes:4},
      {nombre:"Alimentos",icono:"fastfood",ruta:"/alimentos"},
      {nombre:"Medicina",icono:"local_hospital",ruta:"/medicina"},
      {nombre:"Servicios",icono:"fas fa-comment",ruta:"/servicios"},
      {nombre:"Favoritos",icono:"star",ruta:"/favoritos"},
    ],
    opcionesUsuario:[
      {nombre:"Perfil",icono:"assignment_ind"},
      {nombre:"Grupos",icono:"groups"},
      {nombre:"Seguridad",icono:"lock"},
      {nombre:"Tarjetas",icono:"credit_card"},
      {nombre:"Carrito",icono:"shopping_cart"},
      {nombre:"Favoritos",icono:"stars"},
      {nombre:"Iniciar Sesión",icono:"fact_check"},
      {nombre:"Registrarse",icono:"how_to_reg"},
      {nombre:"Cambiar Usuario",icono:"cached"},
      {nombre:"Cerrar Sesión",icono:"exit_to_app"}
    ]
  }
}
