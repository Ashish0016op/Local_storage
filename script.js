
let form=document.getElementById('my-form');
form.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    localStorage.setItem(name,name);
    localStorage.setItem(email,email);
}