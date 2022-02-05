//function for the DELETE button on edit-service.handlebars
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/service/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/member');
  } else {
    alert(response.statusText);
  }
}

document.getElementById('edit-delete').addEventListener('click', deleteFormHandler);