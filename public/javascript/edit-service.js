

//  put it inside a promise. use a then statement and fix the routes.
let serviceTypeData = ''

const serviceTypeForm = document.getElementById('service-type');
serviceTypeForm.addEventListener('change', (event) => {
  const { value } = event.target
  serviceTypeData = value
  console.log(serviceTypeData)
});

async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const service_type = serviceTypeData;
  const service_title = document.querySelector('input[name="service-title"]').value;
  const service_description = document.querySelector('input[name="service-description"]').value;
  const budget = document.querySelector('input[name="budget"]').value;

  const response = await fetch(`/api/service/${id}`, {
    method: "PUT",
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
    document.location.replace("/member");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".edit-service-form").addEventListener('submit', editFormHandler);