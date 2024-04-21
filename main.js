$(document).ready(function() {
    // Agregar tareas
    $(".boton-añadido").click(function(event) {
        event.preventDefault(); 
        let tarea = $("input").val(); // Declaro lo que se ingresará el usuario.
        let botonBorrar = "<button class='borrar'>💀</button>"; // Declaro el botón de eliminado
        if (tarea !== "") { // Si el usuario inserta algo se hará lo siguiente.
            $(".sin-tareas").hide(); // Ocultamos el texto de sin tareas pendientes.
            $(".lista-tareas").append("<li><span>" + tarea + "</span>" + botonBorrar + "</li>"); // Agregar al principio cada tarea.
            $("input").val(""); // Esto sirve para darle dejar vacio donde añadimos las tareas despues de agregar la tarea.
        }
    });
    
    // Marcar como hechas
    $(document).on("click", "li span", function() { // Cuando haga un click en el texto de tarea se hará lo siguiente.
        $(this).toggleClass("hecho"); // Añadimos la clase hecho para darle el estilo de tarea hecha.
    });

    // Borrar tareas
    $(document).on("click", ".borrar", function() {// Cuando haga un click en el botón de la calavera se hará lo siguiente.
        $(this).parent().remove(); // Eliminamos el contenedor li que se selecciono.
        if ($(".lista-tareas li").length === 0) { // Cuando no haya ninguna tarea hará lo siguiente.
            $(".sin-tareas").show(); // Mostramos el texto de sin tareas pendientes.
        }
    });
});