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
console.log("********************** string manipulation started *******************************");

var strs = 'apple';
console.log(strs.indexOf('a'),strs.charAt(0));

console.log("*********************** date manipulation *************************************");
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var today = new Date();
console.log(dayNames[today.getDay()],today.getFullYear());

console.log("************************ functions ****************************");
function expandLoris(){
    document.getElementById('slowLoris').innerHTML = 'Slow lorises are a group of several species of trepsirrhine primates which  make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals';
}
document.getElementById('image').addEventListener('mouseover',function(){
   
    document.getElementById(this.id).src = "https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg";
})

document.getElementById('image').addEventListener('mouseout',function(){
   
    document.getElementById(this.id).src = "https://www.tutorialrepublic.com/lib/images/javascript-illustration.png";
})

var headings  = document.getElementsByTagName('h1');

for(let z = 0; z < headings.length; z++){
    console.log(headings[z].style.color = 'green')
}
var claa = document.getElementsByClassName('cla');

for(let x = 0; x < claa.length; x++){
claa[x].style.color="lightseagreen";
}


console.log("*************************************** dom traversing advance *********************************************");

var cal = document.getElementById('cal');
var p = cal.getElementsByTagName("p");
p[1].style.color = "lightseagreen";
console.log(p)

console.log("*************************************** dom traversing advance using childnode *********************************************");
var cal = document.getElementById('cal');
var p = cal.childNodes[1];
p.style.color = "lightseagreen";
console.log(p)

console.log("*********************************************** DOM ADVANCE *************************************************")

console.log(document.childNodes[1].childNodes[2].childNodes[1])


console.log("******************* DOM ************************");

var dm = document.getElementById('cal');

for(var i=0;i<dm.childNodes.length;i++){
    if(dm.childNodes[i].nodeType==1){
        // dm.childNodes[i].innerHTML = "h1";
        // console.log(dm.childNodes[i].nodeName)
    }else if(dm.childNodes[i].nodeType==3){
      
    }
}

var ny = document.getElementById('ny');

for(var i = 0; i < ny.previousSibling.previousSibling.childNodes.length; i++){
    if(ny.previousSibling.previousSibling.childNodes[i].nodeType == 1){
        console.log(ny.previousSibling.previousSibling.childNodes[i].innerHTML)
    }
}


