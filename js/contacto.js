/*Para validar que el formulario este completo los datos*/
const validar = () => {
    let nombres, correo, mensaje; 
    nombres = document.getElementById('nombresp').value;
    correo = document.getElementById('emailp').value;
    mensaje = document.getElementById('mensajep').value;

    if (nombres === '' || correo === '' || mensaje === '') {
        alert('Ingrese sus datos completos')
    }
    else {
        alert('Su mensaje fue enviado exitosamente');
    }
}
