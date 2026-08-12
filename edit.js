const params = new URLSearchParams(window.location.search);

const id = params.get("id")

console.log(id);
axios
  .get(`http://localhost:3000/students/${id}`)
  .then((res) => {
    const student = res.data;

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("email").value = student.email;
  });
document.getElementById("form-edit").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  axios
    .put(`http://localhost:3000/students/${id}`, {
      name,
      age,
      email,
    })
    .then(() => {
      alert("Sửa sinh viên thành công");

      window.location.href = "index.html";
    });
});