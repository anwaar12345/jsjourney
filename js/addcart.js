    document.getElementById('add').addEventListener('click',()=>{
        addToCart();
    });

    function addToCart(){
        var shows = document.getElementById('cart');
       
        if(typeof(shows) == 'object' && shows == null){
            console.log(shows);
            var divNew =  document.createElement('div');
            divNew.setAttribute('id','cart');
            divNew.setAttribute('class','cart');
            var divMain = document.getElementsByClassName('main');
            divMain[0].appendChild(divNew)
            var divUpper = divNew.previousSibling.previousSibling.previousSibling.previousSibling.childNodes;
            for(var i = 0; i< divUpper.length; i++){
               if(divUpper[i].nodeType == 1 && divUpper[i].innerHTML != "Add To Cart"){
                   
                document.getElementById('cart').appendChild(divUpper[i].cloneNode(true))
               }
            }
        }
     
      
    }