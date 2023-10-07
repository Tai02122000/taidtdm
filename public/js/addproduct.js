const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const urlencoded = new URLSearchParams(fd).toString();

  fetch("http://localhost:3001/api/product", {
    method: "POST",
    body: fd,
  });
});
