// function for the edit-service.handlebars
// <form class="edit-service-form">


async function editFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="service-text"]').value;
  
    const response = await fetch(`/api/service/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        post_text,
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
  
  document
    .querySelector(".edit-service-form")
    .addEventListener("submit", editFormHandler);