async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // const btn = document.querySelector('#btn');        
  // const checkboxs = document.querySelectorAll('input[name="membership"]');
  // btn.addEventListener("click", () => {
  //     let account_type;
  //     for (const checkbox of checkboxs) {
  //         if (checkbox.checked) {
  //             account_type = checkbox.value;
  //             break;
  //         }
  //     }

  //     output.innerText = account_type ? `You selected ${account_type}` : `You haven't selected any Membership`;
  // });

  console.log(email, password)
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const userData = await response.json()
    console.log(userData)
    if (response.ok) {
      if (userData.user.account_type === 'member') {
        document.location.replace('/member');
      }else{
      document.location.replace('/developer');
      }

    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim()
  let account_type = "member"
  const radioBtn = document.querySelectorAll('.radioBtn')

  if (radioBtn[1].checked){
    account_type = 'developer'
  }
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
        account_type
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const userData = await response.json()
    console.log(userData)
    if (response.ok) {
      if (userData.account_type === 'member') {
        document.location.replace('/member');
      }else{
        document.location.replace('/developer');
      }

    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
