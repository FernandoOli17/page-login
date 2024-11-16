document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        document.getElementById('profileName').textContent = user.name;
        document.getElementById('profileEmail').textContent = user.email;
        document.getElementById('profilePhone').textContent = user.phone;
        document.getElementById('profileCPF').textContent = user.cpf;
    } else {
        alert('Nenhum usuário encontrado');
        window.location.href = 'index.html';
    }
});
