var suma = document.getElementById("suma");
		{
			suma.addEventListener("click", function(){
				var numero1 = parseFloat(document.getElementById("numero1").value);
				var numero2 = parseFloat(document.getElementById("numero2").value);
				var resultado = numero1 + numero2;
				document.getElementById("resultado").innerText = resultado;
			});
		}


		var resta = document.getElementById("resta");
		{
			resta.addEventListener("click", function(){
				var numero1 = parseFloat(document.getElementById("numero1").value);
				var numero2 = parseFloat(document.getElementById("numero2").value);
				var resultado = numero1 - numero2;
				document.getElementById("resultado").innerText = resultado;
			});
		}


		var multiplica = document.getElementById("multiplica");
		{
			multiplica.addEventListener("click", function(){
				var numero1 = parseFloat(document.getElementById("numero1").value);
				var numero2 = parseFloat(document.getElementById("numero2").value);
				var resultado = numero1 * numero2;
				document.getElementById("resultado").innerText = resultado;
			});
		}


		var divide = document.getElementById("divide");
		{
			divide.addEventListener("click", function(){
				var numero1 = parseFloat(document.getElementById("numero1").value);
				var numero2 = parseFloat(document.getElementById("numero2").value);
				var resultado = numero1 / numero2;
				document.getElementById("resultado").innerText = resultado;
			});
		}


		var exponente = document.getElementById("exponente");
		{
			exponente.addEventListener("click", function(){
				var numero1 = parseFloat(document.getElementById("numero1").value);
				var numero2 = parseFloat(document.getElementById("numero2").value);
				var resultado = Math.pow(numero1, numero2);
				document.getElementById("resultado").innerText = resultado;
			});
		}


		var raiz = document.getElementById("raiz");
		{
			raiz.addEventListener("click", function(){
				var numero1 = parseFloat(document.getElementById("numero1").value);
				var resultado = Math.sqrt(numero1);
				document.getElementById("resultado").innerText = resultado;
			});
		}