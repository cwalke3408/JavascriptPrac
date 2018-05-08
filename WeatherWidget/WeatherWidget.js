
$(document).ready(() => {
    console.log("Sanity Check");
    $('#weather-form').submit(()=>{
        // By default , the browser will try and submit
        // We don't want that.
        // It's JS job to handle the submission.

        event.preventDefault();
        // console.log('submit: trys to send to the next page');
        // console.log('automatic puts "?"');
        // console.log("Form Submitted!");

        const userCity = $('#city').val()
        // const userCity = document.getElementById('#city')
        console.log(userCity);
        const weatherUrl = `https://api.openweathermap.org/data/2.5/find?q=${userCity}&units=imperial&appid=${apiKey}`;
        console.log(weatherUrl);
    });
})