// console.log("javascript");
// let name = "taquan";
// const school = "FPT Polytechnic";

// let isAdmin = true;

// console.log(name);
// // alert("Xin chào JavaScript");

// name = "quanta"
// const age = 20;

// // document.getElementById("title").innerHTML = "Xin chào JavaScript";

// console.log(name);
// console.log(age==20);

const hoTen = "Tạ Quân";
const tuoi = 20;

console.log("Họ tên:", hoTen);
console.log("Tuổi:", tuoi);

document.getElementById("info").innerHTML =
   `Họ tên: ${hoTen} <br> Tuổi: ${tuoi}`;

const book = {
  id: 1,
  name: "Sach",
  price: 200000,
};

document.getElementById("book").innerHTML = `
<h2>${book.name}</h2>
<p>Giá: ${book.price} VNĐ</p>
`;