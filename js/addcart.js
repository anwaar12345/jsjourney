    document.getElementById('add').addEventListener('click',()=>{
        addToCart();
    });

    function increment(){
        var val = document.getElementById('quantity');
        val.value++
        var price = document.getElementById('price').innerHTML;
        document.getElementById('price').innerHTML = 'Rs: '+(3000 * val.value);
        console.log(price)
    }
    function decrement(thi){
        var val1 = document.getElementById('quantity');
        thi.disabled = false;
        if(val1.value > 0){
            --val1.value
            console.log(val1.value,'p')
            
        }else{
            // thi.disabled = true;
            val1.value = 0;
        }
        var price = document.getElementById('price').innerHTML;
        document.getElementById('price').innerHTML = 'Rs: '+(3000 * val1.value);
        
    }
    function addToCart(){
        var shows = document.getElementById('cart');
        if(typeof(shows) == 'object' && shows == null){
            console.log(shows);
            var divNew =  document.createElement('div');
            divNew.setAttribute('id','cart');
            divNew.setAttribute('class','cart');
            var divMain = document.getElementsByClassName('main');
            divMain[0].appendChild(divNew)
            var divUpper = divNew.previousSibling.previousSibling.childNodes;
          
            for(var i = 0; i< divUpper.length; i++){
               if(divUpper[i].nodeType == 1 && divUpper[i].innerHTML != "Add To Cart"){
                   
                document.getElementById('cart').appendChild(divUpper[i].cloneNode(true))
               }
            }
        }
     
      
    }