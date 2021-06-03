var name = "User1";
function users(){
    var user = "user1 Updated";
}
var Qa = 1;
var qa =2;
console.log(Qa,qa)
 var arr1 = ['Apple','Android'];
 var arr2 = [...arr1,'Black Berry','Sambian'];

 console.log(...arr2);


 console.log('*********************** Spread Operator on Object ************************');

 var on1 = [ {name: "Anwar Shah"},{name: "Anwar Ahmed Shah"} ];
 on1.forEach((e) => {
     console.log(e.name)
 })

 console.log("********************* Object Destructuring *******************************");

 var students = {
     name:"Syed Anwar Ahmed Shah",
     age: 26
 };
 var {name:myName,age:myAge} = students;
 console.log(`I am ${myName} and my age is ${myAge}`);


 var bool =  true;

 var condition = bool ? "ok"  : false; //bool && "ok";
 console.log(condition)

var name1;
 //asyn
setTimeout(()=>{
    name1 = "Anwar Shah";
    console.log('number 1');
},1000);
console.log(name1)
setInterval(()=>{
    console.log('number 2',name1);
},1000);


 console.log('number 3')

 console.log('****************** promise *****************');

 var c;

 var promiseStatus = new Promise((resolve,reject) => {
   firebase.database().ref('students').orderByValue().on('child_added',(data) =>{
    if(data.val()){
     data.val();
        resolve(data.val())
    }else{
        reject("Some thing went wrong");
    }
   });
    
 });

 promiseStatus.then((data) => {
    c= data; 
    console.log("firbase data ",data);
 })
 .catch((error) => {
     console.log(error);
 });


 console.log('****************  Array Destructring ********************',c)

 let names = ['Anwar Shah','Anwar Ahmed Shah','Syed Anwar Ahmed Shah'];
  let [n1,n2,n3] = names;
  console.log(n3);

  console.log("************* Arrow Function shortest way *********************");

  let hi = (h,i) => `${h} Mr ${i}`;

  console.log(hi('Assalam O Alaikum', "Anwar Shah"));

  console.log("****************** this in () => {} and normal function *******************");

  function hello(){
      console.log(this);
  }
  hello()
 var his =  () => console.log(this);
 his();



 console.log("****************** Fetch Example *******************");

 let get_data = (call_back) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => data.json())
    .then(data => {
       call_back(data)
    })
 };

 let call_back = (data) => { console.log(data) };
 get_data(call_back);



 console.log('******************* ARRAY Functions ***************************');

 let arrays = [{name:"syed",age:26},{name:"shah",age:25}];

 let filtered = arrays.filter(e => { return e.age < 30});

 console.log(filtered);

 let namesd = "Anwar Shah";
 let search = "A";
 let my = "h";
if(namesd.startsWith(search) && namesd.endsWith(my)){
    console.log(namesd,'Searched');
}

console.log("************ Map **************");

let a  = [2,3,5,4];
let maped  = a.map(e => e * e);
console.log(maped);


console.log("********************  function constructor *******************");

function Student(name,email,age){
    this.name = name,
    this.email = email,
    this.age = age,
    this.info = () => { console.log(`My Name is ${this.name} and email is ${this.email} and i am ${this.age} years old`) } 
}

let anwar_shah = new Student('Syed Anwar Ahmed Shah','syedanwar016@gmail.com',26);
console.log(anwar_shah,'constructor')
anwar_shah.info();

let mr_shah = new Student('Mr Shah','shah@gmail.com',26);
console.log(mr_shah,'constructor')
anwar_shah.info();


console.log("********************* ES6 Classes ***************");

class School {
    constructor(schName){
        this.schName = schName
    }
}

class Students extends School{
    constructor(schName,name,age){
        super(schName)
        this.name = name
        this.age = age
        
    }
}
// let sch = new School('Best Children Lyari');
// console.log(sch);
let myInfo = new Students("school","Syed Anwar Ahmed Shah",26);
console.log(myInfo);


console.log("*********** fetch api ***");
async function get_data_s() {
 let newpro = new Promise((resolve,reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        resolve(data)
    } ).catch( error => {
        reject(data)
    })
})
var datas = await newpro;
console.log(datas,"async");
}
console.log(get_data_s(),"datas async");
