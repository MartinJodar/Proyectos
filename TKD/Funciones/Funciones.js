var Color = document.getElementsByName("Color");

var Btn = document.getElementById('Empezar');

Btn.addEventListener("click", ColorSelect);

function ColorSelect(){
	for(var i = 0; i < Color.length; i++){
		if(Color[i].checked){
			switch (i) {
				case 0:
					location.href = "Blanco.html";
					break;
				case 1:
					location.href = "PuntaAmarilla.html";
					break;
				case 2:
					location.href = "Amarillo.html";
					break;
				case 3:
					location.href = "PuntaVerde.html";
					break;
				case 4:
					location.href = "Verde.html";
					break;
				case 5:
					location.href = "PuntaAzul.html";
					break;
				case 6:
					location.href = "Azul.html";
					break;	
				case 7:
					location.href = "PuntaRoja.html";
					break;	
				case 8:
					location.href = "Rojo.html";
					break;	
				case 9:
					location.href = "PuntaNegra.html";
					break;
			}
		}
	}
}