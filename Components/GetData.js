const url = `https://haryanacms.onrender.com`;

let dataArr = [];
const userID = JSON.parse(localStorage.getItem("userID"));
// let getUser = async () => {
//   let res = await fetch(`${url}/user/user/${userID}`);
//   res = await res.json();
//   console.log(res);
// };

// let getComplain = async (data) => {
//   let res = await fetch(`${url}/complain/allcomplain`);
//   res = await res.json();
//   console.log(res);
//   data = res;
//   changeComplains(res);
//   return res;
//   // return dataArr;
// };
// const changeComplains = (data,value) => {
// //   const value = document.getElementById("ioselect").value;
//   console.log(data);
//   console.log(value);
// //   let newData = data.filter((el) => {
// //     console.log(value);
// //     if (value === "") {
// //       return el;
// //     } else {
// //       return el.Markto === value;
// //     }
// //   });
// //   console.log(newData);
// //   append(newData);
// };
// export { getUser, getComplain ,changeComplains};
async function getUser() {
  const response = await fetch(`${url}/user/user/${userID}`);
  const data = await response.json();
  return data;
}

async function getComplain() {
  let res = await fetch(`${url}/complain/allcomplain`);
  res = await res.json();
  dataArr = res;
  return res;
}
async function getVisitor() {
  let res = await fetch(`${url}/visitor/getvisitor`);
  res = await res.json();
  return res;
}
async function getRange() {
  let res = await fetch(`${url}/range/getRange`);
  res = await res.json();
  return res;
}

async function getIO() {
  let res = await fetch(`${url}/user/allio`);
  res = await res.json();
  return res;
}
async function getCategory() {
  let res = await fetch(`${url}/category/getcategory`);
  res = res.json();
  return res;
}

async function loading() {
  return `
  <h1>Loading...</h1>
  `;
}

export {
  getUser,
  getComplain,
  getRange,
  getIO,
  loading,
  dataArr,
  getCategory,
  getVisitor,
};
