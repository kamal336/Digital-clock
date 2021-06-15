setInterval(function(){
    const date = new Date();

    const hour = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    
    if(hour < 10) {
        hour = "0" + hour;
    }
    
    if(mins < 10){
        mins = "0" + mins;
    }
    
    if(secs <10){
        secs = "0" + secs;
    }
    const hourSpan = document.getElementById("hour");
    const minSpan = document.getElementById("min");
    const secSpan = document.getElementById("sec");
    
    hourSpan.innerHTML = hour;
    minSpan.innerHTML = ":" + mins;
    secSpan.innerHTML = ":" + secs;
    
},1000);
