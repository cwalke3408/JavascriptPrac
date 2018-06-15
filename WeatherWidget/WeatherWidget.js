
$(document).ready(() => {




    $('#weather-form').submit(()=>{
        // By default , the browser will try and submit
        // We don't want that.
        // It's JS job to handle the submission.
        const weatherData = {"message":"accurate","cod":"200","count":1,"list":[{"id":4574989,"name":"Clemson","coord":{"lat":34.6851,"lon":-82.8365},"main":{"temp":75.52,"pressure":1020,"humidity":44,"temp_min":75.2,"temp_max":77},"dt":1525805220,"wind":{"speed":4.7,"deg":20},"sys":{"country":"US"},"rain":null,"snow":null,"clouds":{"all":75},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}]}]};
        const forcastData = {"cod":"200","message":0,"city":{"geoname_id":524901,"name":"Moscow","lat":55.7522,"lon":37.6156,"country":"RU","iso2":"RU","type":"city","population":0},"cnt":7,"list":[{"dt":1485766800,"temp":{"day":262.65,"min":261.41,"max":262.65,"night":261.41,"eve":262.65,"morn":262.65},"pressure":1024.53,"humidity":76,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":4.57,"deg":225,"clouds":0,"snow":0.01},{"dt":1485853200,"temp":{"day":262.31,"min":260.98,"max":265.44,"night":265.44,"eve":264.18,"morn":261.46},"pressure":1018.1,"humidity":91,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":4.1,"deg":249,"clouds":88,"snow":1.44},{"dt":1485939600,"temp":{"day":270.27,"min":266.9,"max":270.59,"night":268.06,"eve":269.66,"morn":266.9},"pressure":1010.85,"humidity":92,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":4.53,"deg":298,"clouds":64,"snow":0.92},{"dt":1486026000,"temp":{"day":263.46,"min":255.19,"max":264.02,"night":255.59,"eve":259.68,"morn":263.38},"pressure":1019.32,"humidity":84,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":3.06,"deg":344,"clouds":0},{"dt":1486112400,"temp":{"day":265.69,"min":256.55,"max":266,"night":256.55,"eve":260.09,"morn":266},"pressure":1012.2,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":7.35,"deg":24,"clouds":45,"snow":0.21},{"dt":1486198800,"temp":{"day":259.95,"min":254.73,"max":259.95,"night":257.13,"eve":254.73,"morn":257.02},"pressure":1029.5,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.6,"deg":331,"clouds":29},{"dt":1486285200,"temp":{"day":263.13,"min":259.11,"max":263.13,"night":262.01,"eve":261.32,"morn":259.11},"pressure":1023.21,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":5.33,"deg":234,"clouds":46,"snow":0.04}]};
        event.preventDefault();
        // console.log('submit: trys to send to the next page');
        // console.log('automatic puts "?"');
        // console.log("Form Submitted!");
        const userCity = $('#city').val()
        // const userCity = document.getElementById('#city')
   //     const weatherUrl = `https://api.openweathermap.org/data/2.5/find?q=${userCity}&units=imperial&appid=${apiKey}`;
       // console.log(weatherUrl);
            

        //$.getJSON(weatherUrl, function(weatherData){

            $(`#weather-info`).html(`
                <h1>${weatherData.list[0].name}</h1>
                
                <div>
                    <h2>Today's Temperature</h2>
                    <h3>${weatherData.list[0].main.temp}</h3> 
                    <h3>${weatherData.list[0].weather[0].description}</h3>   

                    <div>
                        <img src="http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png" />
                    </div>
                </div>
            `);

            $(`#forcast-info`).html(`
                <h1>${forcastData.city.name}</h1>

                ${myStr = ""}
                ${forcastData.list.forEach(function(elem){
                    myStr += elem.temp;
                    console.log(elem.temp);
                })}
                <div class="col-sm-4">${myStr}</div>
                <div class="row">
                    <div class="col-sm-4">${forcastData.list[0].temp.morn}</div>
                    <div class="col-sm-4">${forcastData.list[0].temp.day}</div>
                    <div class="col-sm-4">${forcastData.list[0].temp.night}</div>
                    
                </div>
            `)

        //});
    });
})