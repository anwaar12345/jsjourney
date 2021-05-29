document.getElementById('add').addEventListener('click',() => {
try{
 
var task = document.getElementById('task');
var err = document.getElementById('err');

if(task.value == "" && err == null){
    task.style.borderColor="red";
   var err = document.createElement('span');
   err.setAttribute('id','err')
   var msg = document.createTextNode("Please Enter Task");
   var err_msg = err.appendChild(msg);
   document.getElementById('task').insertAdjacentElement("afterend",err);
//    throw "Please enter at least 8 characters.";                 
   return false;
}else if(document.getElementById('err') != null && task.value != ""){
    document.getElementById('err').remove();
    //create text node
    task.style.borderColor="black";
    var textNode = document.createTextNode(task.value);
    var item = document.createElement('li');
    item.appendChild(textNode);
    document.getElementById('lists').appendChild(item); 
    //create delete btn
    var dltbtn = document.createElement('button');
    dltbtn.setAttribute('class',"bntd")
    dltbtn.setAttribute('onclick','deleteBtn(this)')
    var dltTxt = document.createTextNode('Delete');
    dltbtn.appendChild(dltTxt);
    item.appendChild(dltbtn);
    //create edit
    var edtbtn = document.createElement('button');
    edtbtn.setAttribute('class',"bnte")
    edtbtn.setAttribute('onclick','edtBtn(this)')
    var edtTxt = document.createTextNode('Edit');
    edtbtn.appendChild(edtTxt);
    item.append(edtbtn)
    task.value = "";
}else if(task.value != ""){
    task.style.borderColor="black";
    var textNode = document.createTextNode(task.value);
    var item = document.createElement('li');
    item.appendChild(textNode);
    document.getElementById('lists').appendChild(item); 
    //create delete btn
    var dltbtn = document.createElement('button');
    dltbtn.setAttribute('class',"bntd")
    dltbtn.setAttribute('onclick','deleteBtn(this)')
    var dltTxt = document.createTextNode('Delete');
    dltbtn.appendChild(dltTxt);
    item.appendChild(dltbtn);
     //create edit
     var edtbtn = document.createElement('button');
     edtbtn.setAttribute('onclick','edtBtn(this)')
     edtbtn.setAttribute('class',"bnte")
     var edtTxt = document.createTextNode('Edit');
     edtbtn.appendChild(edtTxt);
     item.append(edtbtn)
    task.value = "";
}

}catch(e){
    console.log(e);
}
});

function deleteBtn(e){
    e.parentNode.remove();
}

function edtBtn(e){
    if(e.parentNode.firstChild.nodeValue != "" && e.parentNode.firstChild.nodeValue != 'undefined' && e.parentNode.firstChild.nodeValue != null){
    var prom = prompt('Edit Task',e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = prom;
    }
}

// console.log(window.location.reload())
// history.back()
// history.forward()
// console.log(window.referrer)
// var test = window.open();
// var texts = "<h1><a href='https://www.google.com'>GOOGLE</a></h1>";
// test.document.write(texts);
window.open("./addcart.html","","width=400,height=400");