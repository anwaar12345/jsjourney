/// smarter way to learn js kick start
//from extreme basics
console.log("******************* Smarter way to Learn JS KICK start *********************");

var b;
b ="hoistng demo with alert";
alert(b);
var b = 5;

alert(b);
alert((2+2)*2)


let a  = prompt("Enter name","Name");
let c = prompt("Enter Age","22");

console.log(`My Name is ${a} and my age is ${c}`);
console.log('********************** JS ARRAYS and Array manipulation ******************************');

var arr = [];

arr.push({name:'Anwar Shah',age:26});
console.log(arr);
var btns = document.getElementById('clicker');
btns.addEventListener('click', function(){
var show;
var regx = /\w/;
arr.forEach(element => {
     var shows = document.getElementById('inner');
    if(typeof(shows) != 'undefined' && shows != null){
       return;
    } else{
        show = document.createElement('div');
        show.setAttribute('id','inner')
        show.innerHTML = "<p>"+element.name+"</p>"+ "<br><p>Age: "+ element.age+"</p>";
        document.getElementById('app').appendChild(show);
        regx.test(document.getElementById('demo').innerHTML) ? document.getElementById('inner').style.color = "red" : "";
        
    }
    
});
} );
var sts = [];
sts.push('shah')
sts.push(26)
console.log(sts);
sts.pop();
sts.unshift('se')
sts.shift()
console.log(sts)  

console.log("************************ splice manipulates orignal array and slice creates new array ******************************")

var fruits = ['Banana','Grapes','Mango','Apricot'];
console.log(fruits,'oringnal');
fruits.splice(1,0,'Strawberry');
console.log(fruits,'splice');
var newa = fruits.slice(1,3) 
console.log(newa,'slice');
