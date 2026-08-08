// // console.log("javascript");
// // let name = "taquan";
// // const school = "FPT Polytechnic";

// // let isAdmin = true;

// // console.log(name);
// // // alert("Xin chào JavaScript");

// // name = "quanta"
// // const age = 20;

// // // document.getElementById("title").innerHTML = "Xin chào JavaScript";

// // console.log(name);
// // console.log(age==20);

// const hoTen = "Tạ Quân";
// const tuoi = 20;

// console.log("Họ tên:", hoTen);
// console.log("Tuổi:", tuoi);

// document.getElementById("info").innerHTML =
//    `Họ tên: ${hoTen} <br> Tuổi: ${tuoi}`;

// const book = {
//   id: 1,
//   name: "Sach",
//   price: 200000,
// };

// document.getElementById("book").innerHTML = `
// <h2>${book.name}</h2>
// <p>Giá: ${book.price} </p>
// `;

// const student = {
//   name: "Ta Quan",
//   age: 20,
//   email: "taquan@gmail.com",
// };

// document.getElementById("student").innerHTML = `
// <tr>
//   <td>${student.name}</td>
//   <td>${student.age}</td>
//   <td>${student.email}</td>
// </tr>
// `;
// const numbers = [10, 20, 30];
// console.log(numbers[0]);
// console.log(numbers[1]);

// const students = [
//   {
//     id: 1,
//     name: "An",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Bi",
//     age: 21,
//   },
//   {
//     id: 3,
//     name: "Linh",
//     age: 22,
//   },
// ];

// const numbers = [1, 2, 3];

// numbers.map((item) => {
//   console.log(item);
// });

// axios.get('http://localhost:3000/students').then((res)=>{
//   const html = res.data.map((student)=>{
//     return `
//     <tr>
//     <td>${student.id}</td>
//     <td>${student.name}</td>
//     <td>${student.age}</td>
//     <td>${student.email}</td>
//     </tr>
//     `
//   }).join("");

//   document.getElementById("student-list").innerHTML = html
// })

function  loadStudent() {
  axios.get("http://localhost:3000/students").then((res)=>{
    const html = res.data.map((student)=>{
      return `
      <tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.email}</td>
      <td><button onclick="deleteStudent(${student.id})">Xóa</button></td>
      </tr>
      `
    }).join("");
    document.getElementById("student-list").innerHTML =html;
  })
}

function deleteStudent(id){
  const result = confirm("Bạn có chắc muốn xóa ko?");

  if(result){
    axios.delete(`http://localhost:3000/students/${id}`).then(()=>{
      loadStudent();
    });
  }
}

loadStudent();