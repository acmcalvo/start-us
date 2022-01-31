// function happening on the member-dashboard 
//async function newFormHandler(event) for this form:  OK AC
//<form class="new-service-form"> ok AC

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="addservice-title"]').value;
    const post_url = document.querySelector('input[name="addservice-url"]').value;
  
    const response = await fetch(`/api/service`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-service').addEventListener('submit', newFormHandler);