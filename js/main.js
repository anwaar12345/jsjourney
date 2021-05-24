

    let toggles = false;
    var btn = document.getElementById('clicker');
    btn.addEventListener('click',function(){
    let element = document.getElementById('demo');
    if(!toggles){
        element.innerHTML = "wow "+ new Date().getFullYear();
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
    let testing = "chapter";
    console.log(testing.charAt(0));


    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
      console.log(day);

      let car = {
          model: 2010,
          company: "BMW",
          price: 4000+"$"
      }
      let x;
      let car_detail = [];
      for(x in car){
        car_detail[x] = car[x];
      }
      console.log(car_detail);
      
      
