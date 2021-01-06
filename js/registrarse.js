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


/*

//const form = document.getElementById("form").value;


//const parrafo = document.getElementById("warnings").value;

//form.addEventListener("submit", e=>{
    //e.preventDefault()
const validar=()=>{
    //let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    //parrafo.innerHTML = ""
    if(nombre.nodeValue.length <6){
        alert('El nombre no es valido')
        //warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.nodeValue)){
        alert('El email no es valido')
        //warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        alert('La contraseña no es valida')
        //warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        alert('No se puede enviar el mensaje');
        //parrafo.innerHTML = warnings
    }else{
        //parrafo.innerHTML = "Enviado"
        alert('Su registro correctamente');
    }
}*/