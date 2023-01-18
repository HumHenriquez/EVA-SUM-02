//funcion para validar si los datos estan correctos


function valForm(){
    console.log("Acceso establecido")
    var vNom = $('#nombre').val();
    var vCorreo = $('#correo').val();
    var vMensaje = $('mensaje').val();
    var vMascota = $('#mascota').val();
    var vNinos = $('#ninos').val();
    var vDireccion = $('#direccion').val();
    var vMensaje = $('#mensaje').val();



    if(vNom == "" || vNom == null){
        Err_color("nombre");
        Err_contenido("nombre");
        return false;
    }else{
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(vNom)){
            Err_color("nombre");
            Err_contenido("No se permiten caracteres especiales.");
            return false;
        }
    }
    if(vDireccion == "" || vDireccion == null){
        Err_color("direccion");
        Err_contenido("direccion");
        return false;
    }else{
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(vDireccion)){
            Err_color("direccion");
            Err_contenido("No se permiten caracteres especiales.");
            return false;
        }
    }



// validacion del correo



    if(vCorreo== "" || vCorreo==null ){
        Err_color("Correo");
        Err_contenido("Correo");
        return false;   
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(vCorreo)){
            Err_color("Correo");
            Err_contenido("Formato no valido de correo ");
            return false;
        }
    }
// validacion  mascota
    if(vMascota== "" || vMascota==null ){
        Err_color("Mascota");
        Err_contenido("Mascota");
        return false;   
    }else{
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(vMascota)){
            Err_color("Mascota");
            Err_contenido("Debe rellenar el campo");
            return false;
        }
    }


    if(vNinos== "" || vNinos==null ){
        Err_color("Niños");
        Err_contenido("Niños");
        return false;   
    }else{
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(vNinos)){
            Err_color("Niños");
            Err_contenido("Debe rellenar el campo");
            return false;
        }
    }
    if(vMensaje== "" || vMensaje==null ){
        Err_color("Mensaje");
        Err_contenido("Mensaje");
        return false;   
    }else{
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(vMensaje)){
            Err_color("Mensaje");
            Err_contenido("Debe rellenar el campo");
            return false;
        }
    }




    function Err_color(id_div){
        alert("Dato no valido "+id_div);
        $('#'+id_div).css('border','1px solid red');
    }


    function Err_contenido(dato){
        alert("Error en el ingreso del "+dato);
    }


    function ColorDefault(id_div){
        $('#'+id_div).css('border','1px solid #999');
    }


    $('input').focus(function(){
    ColorDefault('nombre');
    ColorDefault('correo');
    }
    )


}