function displayTimeEST(data){
    const today = data.formatted.split('');
    console.log(today);
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    console.log(date);
    document.getElementById('toronto_date').innerHTML= date
    document.getElementById('ottawa_date').innerHTML= date
    document.getElementById('newYork_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    console.log(time);
    document.getElementById('toronto_time').innerHTML= time;
    document.getElementById('ottawa_time').innerHTML= time;
    document.getElementById('newYork_time').innerHTML= time;

}


function displayTimePST(data){
    const today = data.formatted.split('');
    console.log(today);
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    console.log(date);
    document.getElementById('vancouver_date').innerHTML= date
    document.getElementById('losAngeles_date').innerHTML= date
    // document.getElementById('newYork_date').innerHTML= date

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    console.log(time);
    document.getElementById('vancouver_time').innerHTML= time;
    document.getElementById('losAngeles_time').innerHTML= time;
    // document.getElementById('newYork_time').innerHTML= time;

}

function displayTimeCST(data){
    const today = data.formatted.split('');
    console.log(today);
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    console.log(date);
    document.getElementById('mexicoCity_date').innerHTML= date
    

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    console.log(time);
    document.getElementById('mexicoCity_time').innerHTML= time;
    
}

function displayTimeHST(data){
    const today = data.formatted.split('');
    console.log(today);
    const date = today[5]+today[6]+today[7]+today[8]+today[9]+today[4]+today[0]+today[1]+today[2]+today[3];
    console.log(date);
    document.getElementById('mexicoCity_date').innerHTML= date
    

    const time= today[11]+today[12]+today[13]+today[14]+today[15];
    console.log(time);
    document.getElementById('mexicoCity_time').innerHTML= time;
    
}



fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=America/Toronto')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data);
    console.log(data.formatted);
    displayTimeEST(data);
})


fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=America/Vancouver')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data);
    console.log(data.formatted);
    displayTimePST(data);
})


fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=B2C87GZ05GU6&format=json&by=zone&zone=Pacific/Honolulu')

.then((response) =>{
    console.log(response);
    return response.json();
})

.then((data) => {
    console.log(data);
    console.log(data.formatted);
    displayTimeHST(data);
})