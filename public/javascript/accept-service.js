//function to show service accepted by Developer 
//on developer dashboard "button" and need to show/populate under
//"Your Projects" (on the dashboard)

async function acceptFormHandler(event) {
    event.preventDefault();
  
    const service_type = document.querySelector('input[name="service-type"]').value;
    const service_title = document.querySelector('input[name="service-title"]').value;
    const service_description = document.querySelector('input[name="service-description"]').value;
    const budget = document.querySelector('input[name="budget"]').value;
  
    const response = await fetch(`/api/service`, {
      method: "POST",
      body: JSON.stringify({
          service_type,
          service_title,
          service_description,
          budget
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/developer");
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector(".service-list")
    .addEventListener("submit", acceptFormHandler);