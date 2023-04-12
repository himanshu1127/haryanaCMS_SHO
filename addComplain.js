let userId = JSON.parse(localStorage.getItem("userID"));
const url = `https://hrycms.onrender.com`;
let currUser = {};

const get = (id) => {
  return document.getElementById(id);
};

const getComp = async () => {
  let res = await fetch(`${url}/complain/allcomplain`);
  let data = await res.json();
  // console.log(data);
  document.getElementById("complainantNumber").value = data.length + 1;
};
let setTargetDate = (date) => {
  // console.log(date)
  let currentDate = new Date(date);
  // console.log(currentDate);
  let targetDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);
  targetDate = targetDate.toISOString().substring(0, 10);
  return targetDate;
};

const addComplain = async () => {
  let fileInput = document.getElementById("inputFiles");
  let compDate = document.getElementById("dateOfSub").value;
  let obj = {
    ComplainantName: get("complainantName").value,
    Email: get("complainantEmail").value,
    author_id: userId,
    policerange: get("rangeInput").value,
    rangeDistrictName: get("districtInput").value,
    policestation: currUser.policestation,
    phoneNumber: 0,
    ComplainantPhoneNumber: get("mobileNo").value,
    alternateNumber: get("alternateNumber").value,
    FatherName: get("fatherName").value,
    Address: get("address").value,
    AddressLine1: get("addressLine1").value,
    State: get("stateInput").value,
    City: get("cityInput").value,
    ComplaintCategory: get("complainCategory").value,
    ComplaintShortDescription: get("shortDescription").value,
    SectionsofComplaint: "",
    Range: get("rangeInput").value,
    // SPName: get("IOName").value,
    Status: get("complainStatus").value,
    Markto: get("IOName").value,
    trackingId: document.getElementById("complainantNumber").value,
    complainDate: compDate,
    targetDate: setTargetDate(compDate),
    highPriority: document.getElementById("highPriority").checked,
  };
  console.log(obj);
  obj = JSON.stringify(obj);

  let form = new FormData();
  form.append(
    "ComplainantName",
    document.getElementById("complainantName").value
  );
  form.append("Email", document.getElementById("complainantEmail").value);
  form.append("author_id", userId);
  form.append("policerange", document.getElementById("rangeInput").value);
  form.append(
    "rangeDistrictName",
    document.getElementById("districtInput").value
  );
  form.append("policestation", currUser.policestation);
  form.append("phoneNumber", "");
  form.append(
    "ComplainantPhoneNumber",
    document.getElementById("mobileNo").value
  );
  form.append(
    "alternateNumber",
    document.getElementById("alternateNumber").value
  );
  form.append("FatherName", document.getElementById("fatherName").value);
  form.append("Address", document.getElementById("address").value);
  form.append("AddressLine1", document.getElementById("addressLine1").value);
  form.append("State", document.getElementById("stateInput").value);
  form.append("City", document.getElementById("cityInput").value);
  form.append(
    "ComplaintCategory",
    document.getElementById("complainCategory").value
  );
  form.append(
    "ComplaintShortDescription",
    document.getElementById("shortDescription").value
  );
  form.append("SectionsofComplaint", "");
  form.append("Range", document.getElementById("rangeInput").value);
  // form.append("SPName", document.getElementById("SPName").value);
  form.append("Status", document.getElementById("complainStatus").value);
  form.append("Markto", document.getElementById("IOName").value);
  form.append("trackingId", document.getElementById("complainantNumber").value);
  form.append("complainDate", compDate);
  form.append("targetDate", setTargetDate(compDate));
  form.append("highPriority", document.getElementById("highPriority").checked);
  form.append("uploadpdfcomplaint", fileInput.files[0]);
  try {
    let res = await fetch(`${url}/complain/create`, {
      method: "POST",
      body: obj,
      headers: {
        "Content-type": "application/json",
      },
    });
    res = await res.json();
    console.log(res);
    alert("Complain Added Successfuly!");
  } catch (err) {
    console.log(err);
  }
};

getComp();
