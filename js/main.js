 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ce8386fd3mshd50f37b9c6546d0p11d7c9jsnbcb54db58d88',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=%20-20.6971%2C%20-44.8278&days=3&lang=pt', options)
	.then(response => response.json())
	.then(response => {
		//console.log(response);
		
		let dataHoje = moment(response.location.localtime).format('DD/MM/YYYY');
		let horario = moment(response.location.localtime).format('DD/MM/YYYY hh:mm A');
		let horaAgr = moment(response.location.localtime).format('H:mm');
		let temperatura = (response.current.temp_c * 1).toFixed(0);
		let cidade = response.location.name;
		let regiao = response.location.region;
		let situacao = response.current.condition.text;
		let icones = response.current.condition.icon;
		let icone = icones.slice(icones.length - 8);
		let tempMax = (response.forecast.forecastday[0].day.maxtemp_c * 1).toFixed(0) + "°C";
		let tempMin = (response.forecast.forecastday[0].day.mintemp_c * 1).toFixed(0) + "°C";
		let hora = new Date(response.location.localtime).getHours();
		let chanceChuvaAgora = "Chuva: " + response.forecast.forecastday[0].hour[hora].chance_of_rain + "%";
		let tempMaxAmanha = (response.forecast.forecastday[1].day.maxtemp_c * 1).toFixed(0) + "°C";
		let tempMinAmanha = (response.forecast.forecastday[1].day.mintemp_c * 1).toFixed(0) + "°C";
		let situacaoAmanha = response.forecast.forecastday[1].day.condition.text;
		let chuvaAmanha = "Chuva: " + response.forecast.forecastday[1].day.daily_chance_of_rain + "%";
		let iconeAmanha = (response.forecast.forecastday[1].day.condition.icon).slice(icones.length - 8);
		let iconeDepoisAmanha = (response.forecast.forecastday[2].day.condition.icon).slice(icones.length - 8);
		let tempMaxDepoisAmanha = (response.forecast.forecastday[2].day.maxtemp_c * 1).toFixed(0) + "°C";
		let tempMinDepoisAmanha = (response.forecast.forecastday[2].day.mintemp_c * 1).toFixed(0) + "°C";
		let situacaoDepoisAmanha = response.forecast.forecastday[2].day.condition.text;
		let chuvaDepoisAmanha = "Chuva: " + response.forecast.forecastday[2].day.daily_chance_of_rain + "%";
		let dataAmanha = moment(response.forecast.forecastday[1].date).format('DD/MM/YYYY');
		let dataDepoisAmanha = moment(response.forecast.forecastday[2].date).format('DD/MM/YYYY');
		let diaOUnoite;
		
		//let fundoDia = "linear-gradient(0deg, #48b0ff 0%, #0FBBEE 52%, #63e8ff 98%)";
		//let fundoNoite = "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(6,5,85,1) 52%, rgba(9,9,121,1) 98%)"; 

		document.getElementById("tempo").innerHTML = horaAgr;
		document.getElementById("temperatura").innerHTML = temperatura + "°C";
		document.getElementById("cidadeTempo").innerHTML = `${cidade} - MG ${dataHoje}` ;
		document.getElementById("situacao").innerHTML = situacao;
		response.current.is_day == 1 ? diaOUnoite = "day" : diaOUnoite = "night"
		document.getElementById("icone").src = `//cdn.weatherapi.com/weather/128x128/${diaOUnoite}${icone}`;
		document.getElementById("tempMax").innerHTML = tempMax;
		document.getElementById("tempMin").innerHTML = tempMin;
		document.getElementById("tempMaxAmanha").innerHTML = tempMaxAmanha;
		document.getElementById("tempMinAmanha").innerHTML = tempMinAmanha;
		document.getElementById("chuvaAgora").innerHTML = chanceChuvaAgora;
		document.getElementById("situacaoAmanha").innerHTML = situacaoAmanha;
		document.getElementById("chuvaAmanha").innerHTML = chuvaAmanha;
		document.getElementById("iconeAmanha").src = `//cdn.weatherapi.com/weather/128x128/${diaOUnoite}${iconeAmanha}`;
		document.getElementById("iconeDepoisAmanha").src = `//cdn.weatherapi.com/weather/128x128/${diaOUnoite}${iconeDepoisAmanha}`;
		document.getElementById("tempMaxDepoisAmanha").innerHTML = tempMaxDepoisAmanha;
		document.getElementById("tempMinDepoisAmanha").innerHTML = tempMinDepoisAmanha;
		document.getElementById("situacaoDepoisAmanha").innerHTML = situacaoDepoisAmanha;
		document.getElementById("chuvaDepoisAmanha").innerHTML = chuvaDepoisAmanha;
		document.getElementById("data-amanha").innerHTML = dataAmanha;
		document.getElementById("data-depois").innerHTML = dataDepoisAmanha;
	})

