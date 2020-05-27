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
					Respuesta1.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
				var padre = document.getElementById('Checked1');
					padre.removeChild(Verificar1);
					var P = document.createElement("p");
					P.className = "Incorrecto";
					P.textContent = "X Incorrecto";
					padre.appendChild(P);
					Respuesta1.innerHTML = "Respuestas correctas "+Contador+" /9";
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
				Respuesta2.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
					var padre = document.getElementById('Checked2');
					padre.removeChild(Verificar2);
					var P = document.createElement("p");
					P.className = "Incorrecto";
					P.textContent = "X Incorrecto";
					padre.appendChild(P);
					Respuesta2.innerHTML = "Respuestas correctas "+Contador+" /9";
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
				Respuesta3.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
				var padre = document.getElementById('Checked3');
				padre.removeChild(Verificar3);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta3.innerHTML = "Respuestas correctas "+Contador+" /9";
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
					Respuesta4.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
				var padre = document.getElementById('Checked4');
				padre.removeChild(Verificar4);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta4.innerHTML = "Respuestas correctas "+Contador+" /9";
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
				Respuesta5.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
				var padre = document.getElementById('Checked5');
				padre.removeChild(Verificar5);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta5.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
		}
	}
}

var Verificar6 = document.getElementById('Verificar6');

var Teoria6 = document.getElementsByName("Teoria6");

Verificar6.addEventListener("click", Verificacion6);

function Verificacion6(){
	for(var i = 0; i < Teoria6.length; i++){
		if(Teoria6[i].checked){
			if (Teoria6[i].defaultValue == 1) {
				var padre = document.getElementById('Checked6');
				padre.removeChild(Verificar6);
				var P = document.createElement("p");
				P.className = "Correcto";
				P.textContent = "Correcto";
				padre.appendChild(P);
				Contador++;
				Respuesta6.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
				var padre = document.getElementById('Checked6');
				padre.removeChild(Verificar6);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta6.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
		}
	}
}

var Verificar7 = document.getElementById('Verificar7');

var Teoria7 = document.getElementsByName("Teoria7");

Verificar7.addEventListener("click", Verificacion7);

function Verificacion7(){
	for(var i = 0; i < Teoria7.length; i++){
		if(Teoria7[i].checked){
			if (Teoria7[i].defaultValue == 1) {
				var padre = document.getElementById('Checked7');
				padre.removeChild(Verificar7);
				var P = document.createElement("p");
				P.className = "Correcto";
				P.textContent = "Correcto";
				padre.appendChild(P);
				Contador++;
				Respuesta7.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
				var padre = document.getElementById('Checked7');
				padre.removeChild(Verificar7);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta7.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
		}
	}
}

var Verificar8 = document.getElementById('Verificar8');

var Teoria8 = document.getElementsByName("Teoria8");

Verificar8.addEventListener("click", Verificacion8);

function Verificacion8(){
	for(var i = 0; i < Teoria8.length; i++){
		if(Teoria8[i].checked){
			if (Teoria8[i].defaultValue == 1) {
				var padre = document.getElementById('Checked8');
				padre.removeChild(Verificar8);
				var P = document.createElement("p");
				P.className = "Correcto";
				P.textContent = "Correcto";
				padre.appendChild(P);
				Contador++;
				Respuesta8.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
				var padre = document.getElementById('Checked8');
				padre.removeChild(Verificar8);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta8.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
		}
	}
}

var Verificar9 = document.getElementById('Verificar9');

var Teoria9 = document.getElementsByName("Teoria9");

Verificar9.addEventListener("click", Verificacion9);

function Verificacion9(){
	for(var i = 0; i < Teoria9.length; i++){
		if(Teoria9[i].checked){
			if (Teoria9[i].defaultValue == 1) {
				var padre = document.getElementById('Checked9');
				padre.removeChild(Verificar9);
				var P = document.createElement("p");
				P.className = "Correcto";
				P.textContent = "Correcto";
				padre.appendChild(P);
				Contador++;
				Respuesta9.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
			else {
				var padre = document.getElementById('Checked9');
				padre.removeChild(Verificar9);
				var P = document.createElement("p");
				P.className = "Incorrecto";
				P.textContent = "X Incorrecto";
				padre.appendChild(P);
				Respuesta9.innerHTML = "Respuestas correctas "+Contador+" /9";
			}
		}
	}
}