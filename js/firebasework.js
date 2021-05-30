function saveData(){
var name = document.getElementById('name');
var email = document.getElementById('email');
var firekey = firebase.database().ref('students').push().key;
var student = {
    name: name.value,
    email: email.value,
    key: firekey
}
if(firebase.database().ref('students').child(firekey).set(student)){
    name.value = "";
    email.value = "";
    alert('student Added successfully');
}   

}

function getData(){
    var list = document.getElementById('list');
    var name;
    var email;
    var key;
    var students = firebase.database().ref().child('students');
    var data_details = [];

    students.on('child_added', data =>{
        console.log(data.val().value)
     named = data.child('name').val();
     email = data.child('email').val();
     key = data.child('key').val();
     var element = document.createElement('div');
     element.setAttribute('id',key)
     element.setAttribute('class','elements')
     var p = document.createElement('p');
     var txt = document.createTextNode('Name: '+named);
     var pe = document.createElement('p');
     var txtpe = document.createTextNode('Email: '+email);
     pe.appendChild(txtpe);
     p.appendChild(txt);
     element.appendChild(p);
     var dltbtn = document.createElement('button');
     dltbtn.setAttribute('class',"bntd")
     dltbtn.setAttribute('onclick','deleteBtn(this)')
     var dltTxt = document.createTextNode('Delete');
     //edit
     var edtbtn = document.createElement('button');
     edtbtn.setAttribute('class',"bntd")
     edtbtn.setAttribute('onclick','edtBtn(this)')
     var edtTxt = document.createTextNode('Edit');
     edtbtn.appendChild(edtTxt);
     dltbtn.appendChild(dltTxt);
     element.appendChild(pe);
     element.appendChild(dltbtn)
     element.appendChild(edtbtn)   
     list.appendChild(element);
     var divs = document.getElementById('list');
     divs.appendChild(named)
    });
       
}
getData();
function deleteBtn(e){
    firebase.database().ref('students/'+e.parentNode.id).remove();
    e.parentNode.remove()
}

function edtBtn(e){

}