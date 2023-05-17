const nombres =document.querySelector('.nombre')
const apellidos =document.querySelector('.apellido')
const descripciones = document.querySelector('.descripcion')
const listado =document.querySelector('.listado')

const archivar =window.localStorage
//btn

btn.onClick = () => {
    let estudiante ={
        id: Math.round(4,100),
        nombre: nombres.value,
        apellido: apellidos.value,
        descripcion: descripciones.value,

    }
    guardarEstudiante( archivar, estudiante)
}
const guardarEstudiante = (archivar, estudiante) => {
    archivar.setItem(estudiante.id, JSON.stringify(estudiante))

   const cargarAlumno = (archivar) =>{
    let claves = Object.keys(archivar)
    for(clave of claves){
        let contacto= JSON.parse(archivar.getItem(clave))
        subirAlumno(parent, estudiante , archivar)
    }
} 
}

const cargarAlumno =(archivar,listado) 

const subirAlumno= ()=>{
    let divContacto = document.createElement('div')
    let nombreContacto= document.createElement('h2')
    let apellidoContacto =document.createElement('p')
    let descripcionContacto= document.createElement('P')
    let iconoBorrar = document.createElement('span')
    nombreContacto.innerHTML =contacto.nombre
    apellidoContacto.innerHTML=contacto.apellido
    descripcionContacto.innerHTML =contacto.descripcion
    iconoBorrar.innerHTML= 'delete'
    divContacto.classList.add('listado')
    iconoBorrar.classList.add('material-symbols-outlined', 'icono')

    iconoBorrar.onClick =() =>{
        archivar.removeItem(estudiante.id)
        
    }
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidoContacto)
    divContacto.appendChild(descripcionContacto)
    divContacto.appendChild(iconoBorrar)
    parent.appendChild(divContacto)

}
