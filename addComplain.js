let userId = JSON.parse(localStorage.getItem("userID"));
const url = `https://hrycms.onrender.com`;

const get = (id) => {
  return document.getElementById(id);
};

const getComp = async () => {
  `complain/allcomplain`;
  let res = await fetch(`${url}/complain/allcomplain`);
  let data = await res.json();
  // console.log(data);
  document.getElementById("complainantNumber").value = data.length + 1;
};

const addComplain = async () => {
  let obj = {
    ComplainantName: get("complainantName").value,
    Email: get("complainantEmail").value,
    author_id: userId,
    policerange: get("rangeInput").value,
    rangeDistrictName: get("districtInput").value,
    policestation: "",
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
    SPName: get("IOName").value,
    Status: get("complainStatus").value,
    Markto: get("IOName").value,
    trackingId: document.getElementById("complainantNumber").value,
    complainDate: "",
    targetDate: "",
    highPriority: document.getElementById("highPriority").checked,
  };
  console.log(obj);
  obj = JSON.stringify(obj);

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
