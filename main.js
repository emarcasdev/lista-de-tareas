$(document).ready(function() {
    // Agregar tareas
    $(".boton-añadido").click(function(event) {
        event.preventDefault(); 
        let tarea = $("input").val(); // Declaro lo que se ingresará el usuario.
        let botonBorrar = "<button class='borrar'>💀</button>"; // Declaro el botón de eliminado
        if (tarea !== "") { // Si el usuario inserta algo se hará lo siguiente.
            $(".sin-tareas").hide(); // ocultamos el texto de sin tareas pendientes.
            $(".lista-tareas").append("<li><span>" + tarea + "</span>" + botonBorrar + "</li>"); // Agregar al principio cada tarea.
            $("input").val(""); // Esto sirve para darle dejar vacio donde añadimos las tareas despues de agregar la tarea.
        }
    });
    
    // Marcar como hechas
    $(document).on("click", "li span", function() {
        $(this).toggleClass("hecho"); 
    });

    // Borrar tareas
    $(document).on("click", ".borrar", function() {
        $(this).parent().remove();
        if ($(".lista-tareas li").length === 0) { 
            $(".sin-tareas").show();
        }
    });
});

