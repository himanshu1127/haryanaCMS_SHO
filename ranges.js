const url1 = `https://hrycms.onrender.com`;

// Get data

// const getRange = async () => {
//   let res = await fetch(`${url1}/range/getRange`);
//   res = await res.json();
//   //   console.log(res);
//   appendRange(res);
// };

// district
// const getDistrict = async () => {
//   let res = await fetch(`${url1}/district/getDistrict`);
//   res = await res.json();
//   //   console.log(res);
//   appendDistrict(res);
// };
// const getIO = async () => {
//   let res = await fetch(`${url1}/user/allio`);
//   res = await res.json();
//   // console.log(res);
//   appendIo(res);
// };
// append data

const appendRange = (data, a) => {
  let container = document.getElementById("rangeInput");
  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeName;
    option.value = el.rangeName;
    // console.log(option)
    container.append(option);
    // UpdateCont.append(option)
  });
  container.value = a;
};

const appendDistrict = (data, a) => {
  let container = document.getElementById("districtInput");
  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = el.rangeDistrictName;
    option.value = el.rangeDistrictName;
    // console.log(option)
    container.append(option);
    // updateCont.append(option)
  });
  container.value = a;
};
const appendIo = (data) => {
  let container = document.getElementById("IOName");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = `${el.fname} ${el.lname}`;
    option.value = el.email;
    // console.log(option)
    container.append(option);
    // updateCont.append(option)
  });
};

// function calls

// getRange();
// getDistrict();
// getIO();
