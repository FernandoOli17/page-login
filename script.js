document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        cpf: document.getElementById('cpf').value,
        password: document.getElementById('password').value
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Seu cadastro foi realizado');
    document.getElementById('modal').style.display = 'none';
    window.location.href = 'profile.html';
});


$(document).ready(function(){
    $('#phone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
});
