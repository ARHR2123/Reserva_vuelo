// Ver la contraeña de registrar

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('inicio-password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});

// Ver la contraseña de Inicio de Sesión

document.getElementById('togglePassword2').addEventListener('click', function () {
    const passwordField2 = document.getElementById('login-password');
    const type = passwordField2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField2.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});
