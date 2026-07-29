const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const button = document.getElementById('showPassword');
const password = document.getElementById('password');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

function showHidePassword() {
  if (password.type == 'password') {
    password.setAttribute('type', 'text');
    button.classList.add('fa-eye-slash');
  } else {
    button.classList.remove('fa-eye-slash');
    password.setAttribute('type', 'password');
  }
}

button.addEventListener('click', showHidePassword);
