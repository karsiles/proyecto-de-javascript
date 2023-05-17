//lista de alumnos para clases particulares de matematica
// ver datos de cada alumnos y agregar nuevos alumnos al curso
//cada vez que se cree un alumno se le asignara un id




let id =0
class Alumno{
    constructor (nombre, apellido, descripcion){
        this.id= id++
        this.nombre= nombre;
        this.apellido= apellido;
        this.descripcion= descripcion;
    }
} 


// array inicial 

const alumnosDeMatematica= []
 let uba = new Alumno(
        "dario",
        "gomez",
        "ingreso uba"
    )
 let unaj = new Alumno(
        "tamara",
        "siles",
        "ingreso unaj"
        
    )
 let derivadas = new Alumno(
        "nahuel",
        "zacarias",
        "sexto año derivadas e integrales"

    )
let primaria = new Alumno(
        "candela",
        "rosales",
        "4 grado, numeros romanos"
    )
let ingenieria = new Alumno(
        "brisa",
        "perez",
        "matematica1 ingeniria"
    )

//enviar constructores al array 
alumnosDeMatematica.push(uba,unaj,primaria,ingenieria)
const{nombre,apellido,descripcion} =uba


// funciones
//form padre al dom
let agregarAlumnos =document.getElementById("agregarAlumnos")

let btn= document.getElementById('btn')
let IconoBorrar= document.createElement('span')

//agregar un nuevo alumno

const crearAlumno= (e) =>{ e.preventDefault()
     id++;
     let nombre = e.target
     let apellido = e.target
     let descripcion= e.target
     let alumnoNuevo = new Alumno(
        
        nombre.children[1].value,
        apellido.children[3].value,
        descripcion.children[5].value,
     );
     alumnosDeMatematica.push(alumnoNuevo)

    //mostrar el resultado 
    let mostrarAlumnosDeMatematica= document.getElementById("mostrarAlumnosDeMatematica")
    mostrarAlumnosDeMatematica.innerHTML = "";
    

//crear un li 
for (const dato of alumnosDeMatematica) {
   let li = document.createElement("li") 
   li.innerHTML= `nombre del alumno: <b>${dato.nombre}</b> apellido del alumno <b>${dato.apellido}</b> descripcion del alumno <b>${dato.descripcion}</b>` 

mostrarAlumnosDeMatematica.appendChild(li) 
 btn.addEventListener('click',alerta)
 function alerta(){
    swal("alumno agregado");
 }
 
}
}



//evento 
// agregarAlumnos.addEventListener("submit",crearAlumno)
agregarAlumnos.addEventListener("submit", crearAlumno)

//obtener el selec del Dom 

let filtrarPorApellidochange = document.getElementById("filtrarPorApellidochange")
//evento change
filtrarPorApellidochange.addEventListener("change", filtrarPorApellido)

//funcion para filtrar
function filtrarPorApellido(e) {
    let filtro = e.target.value;
    let mostrarPorApellido = document.getElementById("mostrarPorApellido")
    mostrarPorApellido.innerHTML = ""
    let alumnoFiltrado;
    if (filtro === "gomez" ){
        alumnoFiltrado = alumnosDeMatematica.filter((alumno) => alumno.apellido === "gomez")
    } else  if (filtro === "siles" ){
        alumnoFiltrado = alumnosDeMatematica.filter((alumno) => alumno.apellido === "siles")
    } else  if (filtro === "zacarias" ){
        alumnoFiltrado = alumnosDeMatematica.filter((alumno) => alumno.apellido === "zacarias")
    } else  if (filtro === "rosales" ){
        alumnoFiltrado = alumnosDeMatematica.filter((alumno) => alumno.apellido === "rosales")
    } else  if (filtro === "perez" ){
        alumnoFiltrado = alumnosDeMatematica.filter((alumno) => alumno.apellido === "perez")
    }
    alumnoFiltrado.forEach(info =>{
        let p = document.createElement("p")
         mostrarPorApellido.innerHTML = `El alumno elegido es  ${info.apellido}, se llama ${info.nombre} y su descripcion es: ${info.descripcion}`
         mostrarPorApellido.appendChild(p)
        
    })
}
 
 
//datos al storage 
const guardarDatos= (clave , valor) => {localStorage.setItem(clave, valor)}
 guardarDatos("listaDeAlumnos", JSON.stringify(alumnosDeMatematica));
// const alumnosAgendados = JSON.parse(localStorage.getItem("listaDeAlumnos"))
  
const alumnosAgendados = JSON.parse(localStorage.getItem("listaDeAlumnos"))

