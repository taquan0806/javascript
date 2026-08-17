document.getElementById("form-register").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log (email)
  axios
    .post("http://localhost:3000/register", {
      email,
      password,
    })
    .then(() => {
      alert("Đăng ký thành công");

      window.location.href = "login.html";
    })
    .catch(() => {
      alert("Đăng ký thất bại");
    });
});