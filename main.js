
let listaTareas = [];
let respuestas = document.getElementById("ValorTareas")
let boton = document.getElementById("agregarLista")
let resultado = document.getElementById("resultado")
let buscador = document.getElementById("buscadorTareas")
let resultado2 = document.getElementById("resultado2")

window.onload = function(){
    let valorGuardado = localStorage.getItem("tareaGuardada")

    if (valorGuardado){
        listaTareas = JSON.parse(valorGuardado)

        mostrarTareas()
    }
}

boton.addEventListener("click", function(){
    let valorInput =respuestas.value;

    let TareaObjeto = {
        tarea:valorInput,
        fecha:new Date().toLocaleString()
    }

    listaTareas.push(TareaObjeto)
    console.log(listaTareas)

    localStorage.setItem("tareaGuardada",JSON.stringify(listaTareas))
    respuestas.value = ""

    mostrarTareas()
})

let mostrarTareas = () => {
    resultado.innerHTML = ""

    listaTareas.forEach(function(tarea){
    resultado.innerHTML += `Tarea: ${tarea.tarea}, Fecha: ${tarea.fecha}<br>`
    
})
}

buscador.addEventListener("input", function(){
    let cadenaBusqueda = buscador.value.toLowerCase();

    let tareasFiltradas = listaTareas.filter(function(tareaBuscada){

        return tareaBuscada.tarea.toLowerCase().includes(cadenaBusqueda);

    });
    mostrarTareasFiltradas(tareasFiltradas);

})


function mostrarTareasFiltradas(tareas){
    resultado2.innerHTML = ""

    if (tareas.length > 0) {
        resultado2.innerHTML += "<ul>";

        tareas.forEach(function(tarea){
            resultado2.innerHTML += `<li>Tarea: ${tarea.tarea}, Fecha: ${tarea.fecha}<br></li>`
        });

        resultado2.innerHTML += "</ul>"

    }else{
        resultado2.innerHTML = "No se encontraron tareas que coincidan con la busqueda.";
    }
}



