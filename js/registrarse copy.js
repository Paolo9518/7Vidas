/*Para validar que el formulario esten completo los datos*/

const registar = () => {
    window.location.href="/html/registrarse.html"
    let nombres, email, password;
    nombres = document.getElementById('name').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if (nombres === '' || email === '' || password === '') {
        alert('Complete los datos')
    }
    else {
        mensaje.document('Fue registrado exitosamente');
    }
}
