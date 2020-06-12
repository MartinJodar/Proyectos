var Contador = 0;

var Verificar1 = document.getElementById('Verificar');

var Teoria1 = document.getElementsByName("Teoria1");

Verificar1.addEventListener("click", Verificacion1);

function Verificacion1(){
	for(var i = 0; i < Teoria1.length; i++){
		if(Teoria1[i].checked){
			if(Teoria1[i].defaultValue == 1){
					var padre = document.getElementById('Checked1');
					padre.removeChild(Verificar1);
					var P = document.createElement("p");
					P.className = "Correcto";
					P.textContent = "O Correcto";
					padre.appendChild(P);
					Contador++;
					Respuesta1.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
			else {
				var padre = document.getElementById('Checked1');
					padre.removeChild(Verificar1);
					var P = document.createElement("p");
					P.className = "Incorrecto";
					P.textContent = "X Incorrecto";
					padre.appendChild(P);
					Respuesta1.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
		}
	}
}

var Verificar2 = document.getElementById('Verificar2');

var Teoria2 = document.getElementsByName("Teoria2");

Verificar2.addEventListener("click", Verificacion2);

function Verificacion2(){
	for(var i = 0; i < Teoria2.length; i++){
		if(Teoria2[i].checked){
			if (Teoria2[i].defaultValue == 1) {
				var padre = document.getElementById('Checked2');
				padre.removeChild(Verificar2);
				var P = document.createElement("p");
				P.className = "Correcto";
				P.textContent = "O Correcto";
				padre.appendChild(P);
				Contador++;
				Respuesta2.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
			else {
					var padre = document.getElementById('Checked2');
					padre.removeChild(Verificar2);
					var P = document.createElement("p");
					P.className = "Incorrecto";
					P.textContent = "X Incorrecto";
					padre.appendChild(P);
					Respuesta2.innerHTML = "Respuestas correctas "+Contador+" /5";
				}	
		}
	}	
}

var Verificar3 = document.getElementById('Verificar3');

var Teoria3 = document.getElementsByName("Teoria3");

Verificar3.addEventListener("click", Verificacion3);

function Verificacion3(){
	for(var i = 0; i < Teoria3.length; i++){
		if(Teoria3[i].checked){
			if (Teoria3[i].defaultValue == 1) {
				var padre = document.getElementById('Checked3');
				padre.removeChild(Verificar3);
				var P = document.createElement("p");
				P.className = "Correcto";
				P.textContent = "O Correcto";
				padre.appendChild(P);
				Contador++;
				Respuesta3.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
			else {
				var padre = document.getElementById('Checked3');
				padre.removeChild(Verificar3);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta3.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
		}
	}
}

var Verificar4 = document.getElementById('Verificar4');

var Teoria4 = document.getElementsByName("Teoria4");

Verificar4.addEventListener("click", Verificacion4);

function Verificacion4(){
	for(var i = 0; i < Teoria4.length; i++){
		if(Teoria4[i].checked){
			if (Teoria4[i].defaultValue == 1) {
					var padre = document.getElementById('Checked4');
					padre.removeChild(Verificar4);
					var P = document.createElement("p");
					P.className = "Correcto";
					P.textContent = "O Correcto";
					padre.appendChild(P);
					Contador++;
					Respuesta4.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
			else {
				var padre = document.getElementById('Checked4');
				padre.removeChild(Verificar4);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta4.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
		}
	}
}

var Verificar5 = document.getElementById('Verificar5');

var Teoria5 = document.getElementsByName("Teoria5");

Verificar5.addEventListener("click", Verificacion5);

function Verificacion5(){
	for(var i = 0; i < Teoria5.length; i++){
		if(Teoria5[i].checked){
			if (Teoria5[i].defaultValue == 1) {
				var padre = document.getElementById('Checked5');
				padre.removeChild(Verificar5);
				var P = document.createElement("p");
				P.className = "Correcto";
				P.textContent = "Correcto";
				padre.appendChild(P);
				Contador++;
				Respuesta5.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
			else {
				var padre = document.getElementById('Checked5');
				padre.removeChild(Verificar5);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta5.innerHTML = "Respuestas correctas "+Contador+" /5";
			}
		}
	}
}

var Home = document.getElementById('Home');

Home.addEventListener("click", Volver);

function Volver(){
	location.href = "index.html";
}

var Siguiente = document.getElementById('Siguiente');

Siguiente.addEventListener("click", Avanzar);

function Avanzar() {
	location.href = "Verde.html"
}