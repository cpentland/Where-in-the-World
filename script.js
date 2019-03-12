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


function displayTimePST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('vancouver_date').innerHTML= date
    document.getElementById('losAngeles_date').innerHTML= date
    // document.getElementById('newYork_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('vancouver_time').innerHTML= time;
    document.getElementById('losAngeles_time').innerHTML= time;
    // document.getElementById('newYork_time').innerHTML= time;

}

function displayTimeCST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('mexicoCity_date').innerHTML= date
    
    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('mexicoCity_time').innerHTML= time;
    
}

function displayTimeHST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('honolulu_date').innerHTML= date
    
    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('honolulu_time').innerHTML= time;
    
}

function displayTimeGMT(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('reykjavik_date').innerHTML= date
    
    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('reykjavik_time').innerHTML= time;
}

function displayTimeBST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('london_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('london_time').innerHTML= time;
}

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

function displayTimeGST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('dubai_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('dubai_time').innerHTML= time;
}

function displayTimeIST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    console.log(date)
    document.getElementById('newDelhi_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('newDelhi_time').innerHTML= time;
}

function displayTimeICT(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('bangkok_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('bangkok_time').innerHTML= time;
}

function displayTimeHKT(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('hongKong_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('hongKong_time').innerHTML= time;
}

function displayTimeJST(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('tokyo_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('tokyo_time').innerHTML= time;
}

function displayTimeAEDT(data){
    const today = data.formatted.split('');
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    document.getElementById('sydney_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    document.getElementById('sydney_time').innerHTML= time;
}




fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=America/Toronto')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data.formatted);
    displayTimeEST(data);
})


fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=America/Vancouver')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data.formatted);
    displayTimePST(data);
})

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