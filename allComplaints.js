let dataArr = [];
const changeComplains = (data) => {
  const value = document.getElementById("ioselect").value;
  console.log(dataArr);
  let newData = dataArr.filter((el) => {
    console.log(value);
    if(value ===""){
      return el
    }else{
      return el.Markto === value;
    }
  });
  console.log(newData);
  append(newData)
};

const getComp = async () => {
  const url = `https://haryanacms.onrender.com/complain/allcomplain`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  append(data);
  dataArr = data;
  return dataArr;
};
let get = (id) => {
  return document.getElementById(id);
};
let container = document.querySelector(".tableBody");
let convertDate = (id) => {
  let myDate = new Date(id);
  return myDate.toLocaleDateString();
};
const getIO = async () => {
  let res = await fetch(`https://haryanacms.onrender.com/user/allio`);
  res = await res.json();
  // console.log(res);
  appendIo(res);
};
const appendIo = (data) => {
  let container = document.getElementById("ioselect");
  let updateCont = document.getElementById("");

  data.map((el) => {
    let option = document.createElement("option");
    option.innerText = `${el.fname} ${el.lname}`;
    option.value = el.email;
    // console.log(option)
    container.append(option);
    // updateCont.append(option)
  });
};

const append = (data) => {
  container.innerHTML = null;
  let i = 0;
  data.forEach((el) => {
    // console.log(el);
    i++;
    let tr = document.createElement("tr");
    tr.setAttribute("class", "tableRow");
    let td1 = document.createElement("td");
    td1.setAttribute("class", "tablecol");
    td1.setAttribute("class", "tablecol1");
    td1.innerText = i;
    let td2 = document.createElement("td");
    td2.setAttribute("class", "tablecol");
    td2.setAttribute("class", "tablecol2");
    td2.innerText = el.category;
    let td3 = document.createElement("td");
    td3.setAttribute("class", "tablecol");
    td3.setAttribute("class", "tablecol3");
    td3.innerText = el.ComplainantName;
    let td4 = document.createElement("td");
    td4.setAttribute("class", "tablecol");
    td4.setAttribute("class", "tablecol4");
    td4.innerText = convertDate(el.createdAt);
    let td5 = document.createElement("td");
    td5.setAttribute("class", "tablecol");
    td5.setAttribute("class", "tablecol5");
    td5.innerText = el.deadline;
    let td6 = document.createElement("td");
    td6.setAttribute("class", "tablecol");
    td6.setAttribute("class", "tablecol6");
    // td6.style.border = "1px solid red";
    td6.style.padding = "10px";
    let divarea = document.createElement("div");
    let p6 = document.createElement("p");
    p6.innerText = el.City;
    p6.style.margin = "10px 0px 10px 0px";
    // p6.style.border="1px solid cyan"
    divarea.style.borderRadius = "2%";
    divarea.append(p6);
    td6.append(divarea);
    let td7 = document.createElement("td");
    td7.setAttribute("class", "tablecol");
    td7.setAttribute("class", "tablecol7");
    td7.style.padding = "10px";
    let divStatus = document.createElement("div");
    let p7 = document.createElement("p");
    p7.innerText = el.status;
    p7.style.margin = "";
    divStatus.append(p7);
    td7.append(divStatus);

    let td9 = document.createElement("td");
    td9.style.padding = "10px";
    divtd9 = document.createElement("div");
    // divtd9.style.border="1px solid cyan"
    divtd9.style.height = "40px";
    let p9 = document.createElement("p");
    p9.innerText = el.ComplaintCategory;
    p9.style.margin = "10px 0px 10px 0px";
    divtd9.append(p9);

    td9.append(divtd9);
    let td10 = document.createElement("td");
    td10.innerText = el.Status;

    if (el.complaintType === "CAW") {
      divtd9.style.border = "1px solid navy";
      divtd9.style.backgroundColor = "navy";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      divtd9.style.height = "40px";
      divtd9.style.color = "white";
    } else if (el.complaintType === "Officers") {
      divtd9.style.border = "1px solid brown";
      divtd9.style.backgroundColor = "brown";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
      divtd9.style.height = "40px";
      divtd9.style.color = "white";
    }

    if (el.priority === "high") {
      divarea.style.border = "1px solid green";
      divarea.style.backgroundColor = "green";
      divarea.style.boxSizing = "border-box";
      divarea.style.alignSelf = "center";
      divarea.style.height = "40px";
      divarea.style.color = "white";
    }

    if (el.status === "progress") {
      divStatus.style.border = "1px solid lime";
      divStatus.style.backgroundColor = "lime";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.Status === "PENDING") {
      divStatus.style.border = "1px solid red";
      divStatus.style.backgroundColor = "red";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.status === "closed") {
      divStatus.style.border = "1px solid blue";
      divStatus.style.backgroundColor = "blue";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.status === "overdue") {
      divStatus.style.border = "1px solid darkviolet";
      divStatus.style.backgroundColor = "darkviolet";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    } else if (el.status === "rejected") {
      divStatus.style.border = "1px solid gray";
      divStatus.style.backgroundColor = "gray";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
      divStatus.style.height = "40px";
      divStatus.style.color = "white";
    }

    let td8 = document.createElement("td");
    let divtd8 = document.createElement("div");
    divtd8.style.display = "inline";
    // divtd8.style.gap="5px"
    let updateIcon = document.createElement("button");

    let viewIcon = document.createElement("button");
    let commentsIcon = document.createElement("button");
    updateIcon.setAttribute("class", "buttonsAction");
    updateIcon.setAttribute("id", "updateComp");
    viewIcon.setAttribute("class", "buttonsAction");
    commentsIcon.setAttribute("class", "buttonsAction");
    updateIcon.innerText = "Update";
    updateIcon.addEventListener("click", () => {
      updateData(el);
    });
    updateIcon.style.width = "30%";

    viewIcon.innerText = "View";
    viewIcon.style.margin = "5px";
    viewIcon.style.width = "20%";

    commentsIcon.innerText = "Comment";
    commentsIcon.style.width = "40%";
    // commentsIcon.style.margin="5px"

    // td8.innerText = "hi";
    // updateIcon.innerHTML('<i class="fa-light fa-pen"></i>')

    divtd8.append(updateIcon, viewIcon, commentsIcon);
    td8.append(divtd8);
    tr.append(td1, td3, td9, td4, td5, td6, td10, td8);
    // console.log(tr);
    container.append(tr);
  });
};
const searchData = () => {
  let initial = document.getElementById("initialDate").value;
  let final = document.getElementById("finalDate").value;

  // console.log(typeof initial)
  let obj = {
    ini: initial,
    fin: final,
  };
  let newData = Data.filter((el, index) => {
    // console.log(el.IssuedDate, "  ",initial)
    if (el.IssuedDate >= initial && el.IssuedDate <= final) {
      // console.log(el)

      return el;
    }
  });
  console.log(newData);
  append(newData);
  // console.log(obj);
};
const updateData = async (el) => {
  let displayUpdateComp = document.querySelector(".displayUpdateComp");
  displayUpdateComp.classList.toggle("activeUpdateComp");

  console.log(el);
  get("complainantNameUpdate").value = el.ComplainantName;
  get("fatherNameUpdate").value = el.FatherName;
  get("complainantEmailUpdate").value = el.Email;
  get("addressUpdate").value = el.Address;
  get("mobileNoUpdate").value = el.ComplainantPhoneNumber;
  get("addressLine1Update").value = el.AddressLine1;
  get("alternateNumberUpdate").value = el.alternateNumber;
  get("cityInputUpdate").value = el.City;
  get("rangeInputUpdate").value = el.policerange;
  get("SPNameUpdate").value = el.SPName;
  get("complainStatusUpdate").value = el.Status;
  get("shortDescriptionUpdate").value = el.ComplaintShortDescription;
  get("complainCategoryUpdate").value = el.ComplaintCategory;
  // get("sectionsUpdate").value=el.
  // get("highPriorityUpdate").value=el.
};
let updateComp = document.querySelector(".closeIconUpdate");
updateComp.onclick = function () {
  let compUpdate = document.querySelector(".displayUpdateComp");
  compUpdate.classList.toggle("activeUpdateComp");
};
const updateComplain = async () => {
  alert("Update");
  let compUpdate = document.querySelector(".displayUpdateComp");
  compUpdate.classList.toggle("activeUpdateComp");
};
getComp();
getIO();
