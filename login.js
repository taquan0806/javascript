document.getElementById("form-login").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios
    .post("http://localhost:3000/login", {
      email,
      password,
    })
    .then((res) => {
      const token = res.data.accessToken;

      localStorage.setItem("token", token);

      alert("Đăng nhập thành công");

      window.location.href = "index.html";
    })
    .catch(() => {
      alert("Email hoặc mật khẩu không đúng");
    });
});