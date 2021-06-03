function saveData(){
var name = document.getElementById('name');
var email = document.getElementById('email');
if(name.value != "" && email.value != ""){
    var firekey = firebase.database().ref('students').push().key;
    var student = {
        name: name.value,
        email: email.value,
        key: firekey
    }
    if(firebase.database().ref('students/'+localStorage.getItem('uid')).child(firekey).set(student)){
        name.value = "";
        email.value = "";
        alert('student Added successfully');
    }   
     
}else if( name.value == "" && email.value == ""){
    alert("please fill the fields");
}
}

function getData(){
    var list = document.getElementById('list');
    
    var email;
    var key;
    var students = firebase.database().ref().child('students/'+localStorage.getItem('uid'));
    students.on('child_added', data =>{
    
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
    });
       
}
getData();
function deleteBtn(e){
    firebase.database().ref('students/'+localStorage.getItem('uid')+'/'+e.parentNode.id).remove();
    e.parentNode.remove()
}

function edtBtn(e){
    var key = e.parentNode.id;
    if(document.getElementById("myModal") == null){
        var modal =  document.createElement('div');
        modal.setAttribute('id','myModal');
        modal.setAttribute('class','myModal');
        document.getElementsByClassName('main')[0].appendChild(modal);
        var modalContent = document.createElement('div');
        modalContent.setAttribute('id','modal-content');
        modalContent.setAttribute('class','modal-content');
        var close = document.createElement('span');
        close.setAttribute('class','close');
        close.innerHTML = '&times';
        modalContent.appendChild(close);
        modal.appendChild(modalContent);

        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var appendarea = document.getElementsByClassName('modal-content');
        if(document.getElementById('editName') == null && document.getElementById('editEmail') == null){
            document.getElementsByClassName('close')[0].addEventListener('click',() => {
                modal.style.display = "none";
                modalContent.innerHTML = "";
                modal.innerHTML = "";
                modal.remove();
            });
            var nameinput = document.createElement('input');
            nameinput.setAttribute('id','editName');
            nameinput.value = e.parentNode.childNodes[0].textContent.split(': ')[1];
            console.log(appendarea[0].insertAdjacentElement('afterbegin',nameinput))
            var emailinput = document.createElement('input');
            emailinput.setAttribute('id','editEmail');
            emailinput.value = e.parentNode.childNodes[1].textContent.split(': ')[1];
            appendarea[0].insertAdjacentElement('afterbegin',emailinput)  
            var btnEdit =  document.createElement('button');
            btnEdit.setAttribute('onclick','editDetails(this)');
            var btnTxt = document.createTextNode('Save');
            btnEdit.appendChild(btnTxt);
            appendarea[0].appendChild(btnEdit);
            var inputHidden = document.createElement('input');
            inputHidden.setAttribute('type','hidden');   
            inputHidden.value = key;
            appendarea[0].appendChild(inputHidden)
        }
    }    
    
}

function editDetails(e){
  var updateData = {
      key: e.parentNode.childNodes[4].value,
      name: e.parentNode.childNodes[1].value,
      email: e.parentNode.childNodes[0].value
  }
  if(firebase.database().ref('students/'+localStorage.getItem('uid')).child(e.parentNode.childNodes[4].value).set(updateData)){
    alert('Data Updated Successfully');
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    var modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = "";
    modal.innerHTML = "";
    modal.remove();
    window.location.reload();  
  }

}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      document.getElementById('logout').style.display = "block";
      console.log(uid);
      localStorage.setItem('uid',uid);
      // ...
    } else {
      // User is signed out
      window.location.href = "./sigin_signup.html";
      // ...
      document.getElementById('logout').style.display = "none";
      localStorage.setItem('uid',null);
      console.log(localStorage.getItem('uid'));
    }
  });


  