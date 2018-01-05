
function post(url,data,successCallback,failCallback)//QUITAR DE AQUÍ
{
    console.log(url);
    $.ajax({
        'url':url,
        type:'POST',
        'data':data,
        cache:false,
        contentType:false,
        processData:false,       
        //dataType:"json"
        success:successCallback, 
        error: failCallback
    });
}

//FUNCION PARA ENVIAR CORREO AL USUARIO
function contactoEnviarMensajeBtn_click()
{
    console.log("enviando mensaje");
	var formData = new FormData();
    formData.append('nombre',   $("input[name='nombre']").val() );
    formData.append('apellido',   $("input[name='apellido']").val() );
    formData.append('correo',   $("input[name='correo']").val() );
    formData.append('opcion',  $("select[name='opciones']").val() );
    formData.append('mensaje',   $("textarea[name='mensaje']").val() );

	post('send-form.php',formData,function(data){
        swal({
            title:"¡ LISTO !",
            text:"¡ Gracias por tu mensaje, nos comunicaremos con usted lo antes posible",
            type: "success",
            confirmButtonColor: '#55b7e6',
        });
		console.log("Exito al enviar el corre");
		console.log(data);
	},function(data){
		console.log("Error al enviar el corre");
		console.log(data);
    });	
    return false;
}


// FUNCION PARA ENVIAR CORREO AL ADMINISTRADOR DE LA PAGINA
function contactoEnviarDatos(){
    console.log("enviando datos");
    var phone = $("input[name='telefono']");
    var tel =  "";
    if (phone.val() === "") {
        tel = "No hay";
    }
    else{
        tel = phone.val();
    }
    console.log(tel);
	var formData = new FormData();
    formData.append('nombre',   $("input[name='nombre']").val() );
    formData.append('apellido',   $("input[name='apellido']").val() );
    formData.append('correo',   $("input[name='correo']").val() );
    formData.append('telefono', tel );
    formData.append('opcion',   $("select[name='opciones']").val() );
    formData.append('mensaje',   $("textarea[name='mensaje']").val() );

	post('send-data.php',formData,function(data){
		console.log("Exito al enviar datos");
		console.log(data);
	},function(data){
		console.log("Error al enviar datos");
		console.log(data);
    });	
    return false;
}