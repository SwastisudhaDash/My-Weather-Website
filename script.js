
 var serchbox=document.getElementById('serchbox');
 var body_img=document.getElementById('bodyimg');
 var body_data=document.getElementById('bodyd');
 var deatil=document.getElementById('info');

 var temp=document.getElementById('tempn');
 var cityName=document.getElementById('cityn');
 var humidity=document.getElementById('humidity');
 var windspeed=document.getElementById('wind');
 var searchinput=document.getElementById('sinput');
 
    async function checkWeather(city) {
        let Upi_key='f27b269d54e4fa1e72993364a80fa8bd'
        let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
        let data= await repsponse.json();

  
        
    temp.innerHTML=Math.floor(data.main.temp )+'°C';
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +"%";
    windspeed.innerHTML=data.wind.speed+'km/h';
    console.log(data)

  
    

    
    if (data.weather[0].main=="Clouds") {
        body_img.src='images/cloud.png'
    }
     else if (data.weather[0].main=='Clear') {
        body_img.src='images/clear.png'
    }
    else if (data.weather[0].main=='Rain') {
        body_img.src='images/rain.png'
    }
    else if (data.weather[0].main=='Drizzle') {
        body_img.src='images/darzizzl.png'
    }
    else if (data.weather[0].main=='Mist') {
        body_img.src='images/mist.png'
    }
    else if (data.weather[0].main=='Haze') {
        body_img.src='images/haze.png'
    }
     body_data.style.display='flex';
     deatil.style.display='flex';
     }
    
      serchbox.addEventListener('click',()=>
      {
          let cityIn = searchinput.value;
          checkWeather(cityIn);  
      })