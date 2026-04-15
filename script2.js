function irInicio(){
    window.location.href = "index.html";
}
const data = [

{
partido:"Fuerza Popular",
senadores:[
{
nombre:"Miguel Ángel Torres Morales",
dni:"40433187",
sexo:"Masculino",
nacimiento:"Lima",
domicilio:"Lima",
educacion:"Abogado - Universidad de Lima",
experiencia:"Congresista 2016-2021"
},
{
nombre:"Luis Galarreta Velarde",
dni:"22222222",
sexo:"Masculino",
nacimiento:"Lima",
domicilio:"Lima",
educacion:"Derecho",
experiencia:"Congresista"
}
]
},

{
partido:"Renovación Popular",
senadores:[
{
nombre:"Rafael López Aliaga",
dni:"33333333",
sexo:"Masculino",
nacimiento:"Lima",
domicilio:"Lima",
educacion:"Economista",
experiencia:"Alcalde de Lima"
}
]
},

{
partido:"Alianza para el Progreso",
senadores:[
{
nombre:"César Acuña",
dni:"44444444",
sexo:"Masculino",
nacimiento:"Trujillo",
domicilio:"Trujillo",
educacion:"Educación",
experiencia:"Gobernador"
}
]
}

];

let actualPartido = [];

function verPartido(i){

document.getElementById("partidos").style.display="none";
document.getElementById("senadores").style.display="block";
document.getElementById("detalle").style.display="none";

actualPartido = data[i].senadores;

document.getElementById("tituloPartido").innerText = data[i].partido;

let html = "";

actualPartido.forEach((s, index)=>{
html += `<div class="candidate-item" onclick="verSenador(${index})">
<p>${s.nombre}</p>
</div>`;
});

document.getElementById("listaSenadores").innerHTML = html;
}

function verSenador(i){

let s = actualPartido[i];

document.getElementById("senadores").style.display="none";
document.getElementById("detalle").style.display="block";

document.getElementById("nombre").innerText = s.nombre;
document.getElementById("partido").innerText = "";
document.getElementById("dni").innerText = s.dni;
document.getElementById("sexo").innerText = s.sexo;
document.getElementById("nacimiento").innerText = s.nacimiento;
document.getElementById("domicilio").innerText = s.domicilio;
document.getElementById("educacion").innerText = s.educacion;
document.getElementById("experiencia").innerText = s.experiencia;
}

/* BOTONES HEADER */
function volverInicio(){
document.getElementById("partidos").style.display="block";
document.getElementById("senadores").style.display="none";
document.getElementById("detalle").style.display="none";
}

function mostrarSenadores(){
document.getElementById("partidos").style.display="block";
document.getElementById("senadores").style.display="none";
document.getElementById("detalle").style.display="none";
}

function volverSenadores(){
document.getElementById("senadores").style.display="block";
document.getElementById("detalle").style.display="none";
}