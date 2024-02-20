//cambiar color
$("#ingredientes strong").on("dblclick",function(){
    $('#ingredientes strong').css('color', 'red')
    $('#ingredientes strong').css('text-decoration', 'underline')
});

$("#preparacion strong").on("dblclick",function(){
    $('#preparacion strong').css('color', 'red')
    $('#preparacion strong').css('text-decoration', 'underline')
});

//ocultar informacion del plato de las card
$("#plato1").click(function(){
    $("#descripcion1").toggle();
});

$("#plato2").click(function(){
    $("#descripcion2").toggle();
});

$("#plato3").click(function(){
    $("#descripcion3").toggle();
});

$("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...")
});

$(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();
})
