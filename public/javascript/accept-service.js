//function to show service accepted by Developer 
//on developer dashboard "button" and need to show/populate under
//"Your Projects" (on the dashboard)

async function acceptFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="accept-project"]').value;
    const post_text = document.querySelector('textarea[name="accept-project"]').value;
  
    const response = await fetch(`/api/service`, {
      method: "POST",
      body: JSON.stringify({
        title,
        post_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector(".new-accept-project")
    .addEventListener("submit", newFormHandler);