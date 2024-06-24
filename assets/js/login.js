

function login(){
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(email == '' || password == ''){
        alert('Please fill all fields');
    }else if(email == 'jerbi' && password == '12345678'){
        window.location.href = './admins.html';

        
    }
    else{
        alert("veuillez verifier vos informations");
    }
}