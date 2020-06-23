let locationImage = document.querySelector('img');
let locationDirection = document.querySelector('#directionsP');
let locationMapLink = document.querySelector('#directionsLink');

locationImage.onclick = function(){
    let imgSrc = locationImage.getAttribute('src');
    if (imgSrc === 'images/pier-52-boat-launch.png'){
        locationImage.setAttribute('src','images/crissy_field_boat_launch.jpg');
        locationDirection.textContent = ' to Crissy Field Boat Launch';
        locationMapLink.setAttribute('href','https://goo.gl/maps/m99XdmhqLPFuMRG37');
    }
    else{
        locationImage.setAttribute('src','images/pier-52-boat-launch.png');
        locationDirection.textContent = ' to Pier 52 Boat Launch';
        locationMapLink.setAttribute('href','https://goo.gl/maps/q317obXE3KBbk7ht7');
    }   
}


let weekForecastButton = document.querySelector('button');
let forecastVisible = document.querySelector('#weeklyForecastHeading');

weekForecastButton.onclick=function(){
    if (forecastVisible.textContent==''){
        forecastVisible.textContent = "Week's Forecast Is";
    }
    else{
        forecastVisible.textContent='';
    }
}