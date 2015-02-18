function login(){
	var users = [{user:"aaronsistemas@hotmail.com", password:"123456"},{user:"ajjulio6@misena.edu.co", password:"654321"},{user:"aarontronic10@gmail.com", password:"123654"}];
	var usuario = [document.getElementById('nickname').value, document.getElementById('contraseña').value];
	alert(usuario);
	var encontro = false;
	for (var i = 0; i < users.length; i++) {

		if (users[i].user == usuario[0] && users[i].password == usuario[1]){
				encontro = true;
				alert("Ha iniciado sesión");
				localStorage.setItem('usuario', document.getElementById('nickname').value);
				break;
		}	
	}
	if (encontro == false){
		alert("Login Incorrecto");
		localStorage.removeItem('usuario');
		window.location="http://developando.com/blogNuevo";
	}	
}
