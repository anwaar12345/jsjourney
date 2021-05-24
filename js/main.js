

    let toggles = false;
    var btn = document.getElementById('clicker');
    btn.addEventListener('click',function(){
    let element = document.getElementById('demo');
    if(!toggles){
        element.innerHTML = "wow "+Date('YYYY');
        toggles = true;
        return;
    }
    if(toggles){
        element.innerHTML = "demo";
        toggles = false;
    }
    });
   
