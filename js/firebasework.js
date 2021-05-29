function saveData(){
var name = document.getElementById('name');
var email = document.getElementById('email');
var firekey = firebase.database().ref('students').push().key;
var student = {
    name: name.value,
    email: email.value,
    key: firekey
}
if(firebase.database().ref('students').push(student)){
    name.value = "";
    email.value = "";
    alert('student Added successfully');
}   

}

function getData(){
   firebase.database().ref('students').on('child_added',(data)=>{
    for (n in data.val()){
        console.log(n + ": " + data.val()[n] + "<br>") 
      }
    });
}
getData();
