// function happening on the member-dashboard 
//async function newFormHandler(event) for this form:  OK AC
//<form class="new-service-form"> ok AC

async function newFormHandler(event) {
    event.preventDefault();
  
    const service_type ="website"// document.querySelector('input[name"service-type"]').value;
    const service_title = document.querySelector('input[name="service-title"]').value;
    const service_description = document.querySelector('input[name="service-description"]').value;
    const budget = document.querySelector('input[name="budget"]').value;
    alert(service_type+ service_title+ service_description+ budget)
    const response = await fetch(`/api/services`, {
      method: 'POST',
      body: JSON.stringify({
        service_type,
        service_title,
        service_description,
        budget
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
    //  document.location.replace('/member');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-service-form').addEventListener('submit', newFormHandler);