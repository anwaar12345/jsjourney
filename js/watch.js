    var interval;

    var min = 0,sec = 0,msec = 0;
    (()=>{
        if(document.getElementById('msec').innerHTML == 0 ){
            document.getElementById('reset').disabled = true;
            document.getElementById('stop').disabled = true;
        }
    })();
    document.getElementById('start').addEventListener('click',()=> {
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('reset').disabled = false;
        interval = setInterval(()=>{
        msec++;
        document.getElementById('msec').innerHTML =  msec;
    if(msec >= 100){
        sec++
        document.getElementById('sec').innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++;
        document.getElementById('sec').innerHTML = min;
        sec = 0;
    }

    },10);

    });

    document.getElementById('stop').addEventListener('click',() => {
        document.getElementById('start').disabled = false;
        document.getElementById('reset').disabled = false;
        clearInterval(interval);
    });
    function reseter(){
        min = 0;
        sec = 0;
        msec = 0;
        document.getElementById('start').disabled = false;
        document.getElementById('stop').disabled = true;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
        document.getElementById('msec').innerHTML = msec;
        clearInterval(interval);    
    }
    document.getElementById('reset').addEventListener('click',()=>{
        reseter();
    })