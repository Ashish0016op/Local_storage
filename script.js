
let form=document.getElementById('my-form');
form.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let name_serialized=JSON.stringify(name);
    localStorage.setItem(name_serialized,name_serialized);
    let email_serialized=JSON.stringify(email);
    localStorage.setItem(email_serialized,email_serialized);
}