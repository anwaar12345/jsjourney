

    let toggles = false;
    var btn = document.getElementById('clicker');
    btn.addEventListener('click',function(){
    let element = document.getElementById('demo');
    if(!toggles){
        element.innerHTML = "wow "+Date('YYYY');
        element.style.color = "red";
        toggles = true;
        return;
    }
    if(toggles){
        element.innerHTML = "demo";
        toggles = false;
        element.style.color = "black";
    }
    });

    let {name:var_name,age:var_age} = {name:"test",age:12}; 
    console.log(var_name);
