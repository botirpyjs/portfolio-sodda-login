document.querySelector('#text').addEventListener('focusout', mytext);
document.querySelector('#pass').addEventListener('focusout', mypass);
document.querySelector('#btn').addEventListener('click', function() {
    mytext()
    mypass()
});
function mytext() {
    let message, text;
    let errElement = document.getElementById('text');
        message = document.getElementById('err'); 
        text = document.getElementById('text').value;
        try {
            if (text == "") {
                errElement.classList.remove('valid');
                errElement.classList.add('err');
                throw 'bo\'sh'                
            }
            if (text.length > 0) {
                errElement.classList.remove('err');
                errElement.classList.add('valid');
                message.innerHTML = '';
            }
        } catch (e) {
            message.innerHTML = 'Qiymat' + e;            
        }
}
function mypass() {
    let message, pass;
    let errElement = document.getElementById('pass');
        message = document.getElementById('err2'); 
        pass = document.getElementById('pass').value;
        try {
            if (pass == "") {
                errElement.classList.remove('valid');
                errElement.classList.add('err2');
                throw 'bo\'sh'                
            }
            if (pass.length > 0) {
                errElement.classList.remove('err2');
                errElement.classList.add('valid');
                message.innerHTML = '';
            }
        } catch (e) {
            message.innerHTML = 'Qiymat' + e;            
        }
}