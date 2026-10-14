const toast = document.getElementById('toast');
const loginView = document.getElementById('login-view');
const signupView = document.getElementById('signup-view');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const passwordHelp = document.getElementById('password-help');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function switchToSignup() {
  loginView.classList.add('hidden');
  signupView.classList.remove('hidden');
}

function switchToLogin() {
  signupView.classList.add('hidden');
  loginView.classList.remove('hidden');
}

showSignup.addEventListener('click', switchToSignup);
showLogin.addEventListener('click', switchToLogin);
passwordHelp.addEventListener('click', () => {
  showToast('Demo password: any value works for this static example.');
});

document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!email || !password) {
    showToast('Please complete both fields first.');
    return;
  }

  showToast(`Welcome back, ${email}!`);
});

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (!name || !email || !password) {
    showToast('Please complete all fields to create your account.');
    return;
  }

  showToast(`Account created for ${name}.`);
  switchToLogin();
});
