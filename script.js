// Toronto, Ottawa, NY date/time  //
function displayTimeEST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('toronto_date').innerHTML= date
    document.getElementById('ottawa_date').innerHTML= date
    document.getElementById('newYork_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('toronto_time').innerHTML= time;
    document.getElementById('ottawa_time').innerHTML= time;
    document.getElementById('newYork_time').innerHTML= time;
}

//  Toronto weather  //
function displayWeatherToronto(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('toronto_temp').innerHTML= temp;
    document.getElementById('toronto_status').innerHTML= status;
    document.getElementById('toronto_cloud').innerHTML= cloud;
}

// Ottawa weather  //
function displayWeatherOttawa(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('ottawa_temp').innerHTML= temp;
    document.getElementById('ottawa_status').innerHTML= status;
    document.getElementById('ottawa_cloud').innerHTML= cloud;
}

// New York weather  //
function displayWeatherNewYork(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('newYork_temp').innerHTML= temp;
    document.getElementById('newYork_status').innerHTML= status;
    document.getElementById('newYork_cloud').innerHTML= cloud;
}

// Vancouver, LA date/time  //
function displayTimePST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('vancouver_date').innerHTML= date
    document.getElementById('losAngeles_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('vancouver_time').innerHTML= time;
    document.getElementById('losAngeles_time').innerHTML= time;
}

// Vancouver weather  //
function displayWeatherVancouver(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('vancouver_temp').innerHTML= temp;
    document.getElementById('vancouver_status').innerHTML= status;
    document.getElementById('vancouver_cloud').innerHTML= cloud;
}

// LA weather  //
function displayWeatherLosAngeles(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('losAngeles_temp').innerHTML= temp;
    document.getElementById('losAngeles_status').innerHTML= status;
    document.getElementById('losAngeles_cloud').innerHTML= cloud;
}

//  Mexico City date/time  //
function displayTimeCST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('mexicoCity_date').innerHTML= date
    
    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('mexicoCity_time').innerHTML= time;
}

// Mexico City weather  //
function displayWeatherMexicoCity(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('mexicoCity_temp').innerHTML= temp;
    document.getElementById('mexicoCity_status').innerHTML= status;
    document.getElementById('mexicoCity_cloud').innerHTML= cloud;
}

//  Honolulu date/time  //
function displayTimeHST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('honolulu_date').innerHTML= date
    
    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('honolulu_time').innerHTML= time;
}

// Honolulu weather  //
function displayWeatherHonolulu(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('honolulu_temp').innerHTML= temp;
    document.getElementById('honolulu_status').innerHTML= status;
    document.getElementById('honolulu_cloud').innerHTML= cloud;
}

//  Reykjavik date/time  //
function displayTimeGMT(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('reykjavik_date').innerHTML= date
    
    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('reykjavik_time').innerHTML= time;
}

// Reykjavik weather  //
function displayWeatherReykjavik(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('reykjavik_temp').innerHTML= temp;
    document.getElementById('reykjavik_status').innerHTML= status;
    document.getElementById('reykjavik_cloud').innerHTML= cloud;
}

//  London date/time  //
function displayTimeBST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('london_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('london_time').innerHTML= time;
}

// Lonodn weather  //
function displayWeatherLondon(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('london_temp').innerHTML= temp;
    document.getElementById('london_status').innerHTML= status;
    document.getElementById('london_cloud').innerHTML= cloud;
}

// Paris, Berlin, Barcelona, Rome date/time  //
function displayTimeCET(data){
    const today = data.formatted.split('');
    console.log(today);
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    console.log(date);
    document.getElementById('paris_date').innerHTML= date
    document.getElementById('berlin_date').innerHTML= date
    document.getElementById('barcelona_date').innerHTML= date
    document.getElementById('rome_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    console.log(time);
    document.getElementById('paris_time').innerHTML= time;
    document.getElementById('berlin_time').innerHTML= time;
    document.getElementById('barcelona_time').innerHTML= time;
    document.getElementById('rome_time').innerHTML= time;
}

// Paris weather  //
function displayWeatherParis(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('paris_temp').innerHTML= temp;
    document.getElementById('paris_status').innerHTML= status;
    document.getElementById('paris_cloud').innerHTML= cloud;
}

// Berlin weather  //
function displayWeatherBerlin(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('berlin_temp').innerHTML= temp;
    document.getElementById('berlin_status').innerHTML= status;
    document.getElementById('berlin_cloud').innerHTML= cloud;
}

// Barcelona weather  //
function displayWeatherBarcelona(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('barcelona_temp').innerHTML= temp;
    document.getElementById('barcelona_status').innerHTML= status;
    document.getElementById('barcelona_cloud').innerHTML= cloud;
}

// Rome weather  //
function displayWeatherRome(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('rome_temp').innerHTML= temp;
    document.getElementById('rome_status').innerHTML= status;
    document.getElementById('rome_cloud').innerHTML= cloud;
}


//  Dubai date/time  //
function displayTimeGST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('dubai_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('dubai_time').innerHTML= time;
}

// Dubai weather  //
function displayWeatherDubai(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('dubai_temp').innerHTML= temp;
    document.getElementById('dubai_status').innerHTML= status;
    document.getElementById('dubai_cloud').innerHTML= cloud;
}

//  New Delhi date/time  //
function displayTimeIST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    console.log(date)
    document.getElementById('newDelhi_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('newDelhi_time').innerHTML= time;
}

// New Delhi weather  //
function displayWeatherNewDelhi(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('newDelhi_temp').innerHTML= temp;
    document.getElementById('newDelhi_status').innerHTML= status;
    document.getElementById('newDelhi_cloud').innerHTML= cloud;
}

//  Bangkok date/time  //
function displayTimeICT(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('bangkok_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('bangkok_time').innerHTML= time;
}

// Bangkok weather  //
function displayWeatherBangkok(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('bangkok_temp').innerHTML= temp;
    document.getElementById('bangkok_status').innerHTML= status;
    document.getElementById('bangkok_cloud').innerHTML= cloud;
}

//  Hong Kong date/time  //
function displayTimeHKT(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('hongKong_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('hongKong_time').innerHTML= time;
}

// Hong Kong weather  //
function displayWeatherHongKong(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('hongKong_temp').innerHTML= temp;
    document.getElementById('hongKong_status').innerHTML= status;
    document.getElementById('hongKong_cloud').innerHTML= cloud;
}

//  Tokyo date/time  //
function displayTimeJST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('tokyo_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('tokyo_time').innerHTML= time;
}

// Tokyo weather  //
function displayWeatherTokyo(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('tokyo_temp').innerHTML= temp;
    document.getElementById('tokyo_status').innerHTML= status;
    document.getElementById('tokyo_cloud').innerHTML= cloud;
}

//  Sydney date/time  //
function displayTimeAEDT(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('sydney_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('sydney_time').innerHTML= time;
}

// Sydney weather  //
function displayWeatherSydney(data){
    let temp = data.list[0].main.temp -273.15;
    temp = temp.toFixed(1);
    console.log(temp);
    const status = data.list[0].weather[0].description;
    const cloud = data.list[0].clouds.all;
    
    document.getElementById('sydney_temp').innerHTML= temp;
    document.getElementById('sydney_status').innerHTML= status;
    document.getElementById('sydney_cloud').innerHTML= cloud;
}



// Toronto Date/Time //
fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=America/Toronto')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data.formatted);
    displayTimeEST(data);
})

// Toronto weather //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=6167865&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherToronto(data)
})


//  Ottawa weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=6094817&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherOttawa(data)
})


//  New York weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=5128638&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherNewYork(data)
})


//  Vancouver date/time  //
fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=America/Vancouver')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data.formatted);
    displayTimePST(data);
})


//  Vancouver weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=6173331&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherVancouver(data)
})


//  LA weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=5368361&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherLosAngeles(data)
})


//  Honolulu date/time  //
function timeOut(){
fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Pacific/Honolulu')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data.formatted);
    displayTimeHST(data);
})
}
setTimeout(timeOut, 1110)


//  Honolulu weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=5856195&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherHonolulu(data)
})


//  Mexico City date/time  //
function timeOut2(){
fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=America/Mexico_City')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data.formatted);
    displayTimeCST(data);
})
}
setTimeout(timeOut2, 2200)


//  Mexico City weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=3530597&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherMexicoCity(data)
})


//  Reykjavik date/time  //
function timeOut3(){
fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Atlantic/Reykjavik')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data.formatted);
    displayTimeGMT(data);
})
}
setTimeout(timeOut3,3300)


//  Reykjavik weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=3413829&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherReykjavik(data)
})


//  London date/time  //
function timeOut4(){
fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Europe/London')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data.formatted);
    displayTimeBST(data);
})}
setTimeout(timeOut4,4400)


//  London weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=2643741&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherLondon(data)
})


//  Paris date/time  //
function timeOut5(){
fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Europe/Paris')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data);
    console.log(data.formatted);
    displayTimeCET(data);
})}
setTimeout(timeOut5,5500)


//  Paris weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=6455259&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherParis(data)
})

//  Berlin weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=2950159&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherBerlin(data)
})

//  Barcelona weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=6356055&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherBarcelona(data)
})

//  Rome weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=6539764&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherRome(data)
})


// Dubai date/time  //
function timeOut6(){
fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Asia/Dubai')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data);
    console.log(data.formatted);
    displayTimeGST(data);
})}
setTimeout(timeOut6,6600)


//  Dubai weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=292223&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherDubai(data)
})


//  New Delhi date/time  //
function timeOut7(){
    fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Asia/Almaty')

    .then((response) =>{
        console.log(response);
        return response.json();
    })

    .then((data) => {
        console.log(data);
        console.log(data.formatted);
        displayTimeIST(data);
    })
}
setTimeout(timeOut7,7700)


//  New Delhi weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=1261481&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherNewDelhi(data)
})


//  Bangkok date/time  //
function timeOut8(){
    fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Asia/Bangkok')
    
    .then((response) =>{
        console.log(response);
        return response.json();
    })
    
    .then((data) => {
        console.log(data);
        console.log(data.formatted);
        displayTimeICT(data);
    })
}
setTimeout(timeOut8,8800)


//  Bangkok weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=1609350&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherBangkok(data)
})


//  Hong Kong date/time  //
function timeOut9(){
    fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Asia/Hong_Kong')
    
    .then((response) =>{
        console.log(response);
        return response.json();
    })
    
    .then((data) => {
        console.log(data);
        console.log(data.formatted);
        displayTimeHKT(data);
    })
}
setTimeout(timeOut9,9900)


//  Hong Kong weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=1819729&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherHongKong(data)
})


//  Tokyo date/time  //
function timeOut10(){
    fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Asia/Tokyo')
    
    .then((response) =>{
        console.log(response);
        return response.json();
    })
    
    .then((data) => {
        console.log(data);
        console.log(data.formatted);
        displayTimeJST(data);
    })
}
setTimeout(timeOut10,10100)


//  Tokyo weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=1850147&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherTokyo(data)
})


//  Sydney date/time  //
function timeOut11(){
    fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Australia/Sydney')
    
    .then((response) =>{
        console.log(response);
        return response.json();
    })
    
    .then((data) => {
        console.log(data);
        console.log(data.formatted);
        displayTimeAEDT(data);
    })
}
setTimeout(timeOut11,11100)


//  Sydney weather  //
fetch('http://api.openweathermap.org/data/2.5/forecast?id=6619279&APPID=9fac9411a1a57adaafd3ae34354f9687')

.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data) =>{
    console.log(data);
    displayWeatherSydney(data)
})