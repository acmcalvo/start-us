<<<<<<< HEAD
async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    
    const btn = document.querySelector('#btn');        
    const radioButtons = document.querySelectorAll('input[name="membership"]');
    btn.addEventListener("click", () => {
        let account_type;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                account_type = radioButton.value;
                break;
            }
        }
       
        output.innerText = account_type ? `You selected ${account_type}` : `You haven't selected any size`;
    });

  
    if (email && password && account) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/user/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
=======

>>>>>>> 07715256f1f98f89f606a1dd054c3e053a28b168
