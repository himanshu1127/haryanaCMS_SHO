const Data = [
    {
      id: 1,
      trackingId: "#98765490",
      category: "DG Office",
      complainant: "Vikash",
      complaintType: "CAW",
      IssuedDate: "1-1-2023",
      deadline: "10-1-2023",
      area: "Dharuhera",

      priority: "high",
      status: "pending",
    },
    {
      id: 2,
      trackingId: "#98765490",
      category: "Home Minister",
      complainant: "Manju Sharma",
      complaintType: "Officers",
      IssuedDate: "1-1-2023",
      deadline: "10-1-2023",
      area: "Rewari",

      priority: "low",
      status: "closed",
    },
    {
      id: 3,
      trackingId: "#98765490",
      category: "General",
      complainant: "Vikash",
      complaintType: "Officers",
      IssuedDate: "1-1-2023",
      deadline: "10-1-2023",
      area: "Gurugram",

      priority: "high",
      status: "overdue",
    },
    {
      id: 4,
      trackingId: "#98765490",
      category: "General",
      complainant: "Vickey",
      complaintType: "CAW",
      IssuedDate: "1-1-2023",
      deadline: "10-1-2023",
      area: "Kernal",

      priority: "medium",
      status: "rejected",
    },
    {
      id: 5,
      trackingId: "#98765490",
      category: "NHRC",
      complainant: "Vijay",
      complaintType: "CAW",
      IssuedDate: "1-1-2023",
      deadline: "10-1-2023",
      area: "Jhajjar",

      priority: "medium",
      status: "progress",
    },
  ];
  let container = document.querySelector(".tableBody");

  Data.forEach((el) => {
    // console.log(el);
    let tr = document.createElement("tr");
    tr.setAttribute("class", "tableRow");
    let td1 = document.createElement("td");
    td1.setAttribute("class", "tablecol");
    td1.setAttribute("class", "tablecol1");
    td1.innerText = el.trackingId;
    let td2 = document.createElement("td");
    td2.setAttribute("class", "tablecol");
    td2.setAttribute("class", "tablecol2");
    td2.innerText = el.category;
    let td3 = document.createElement("td");
    td3.setAttribute("class", "tablecol");
    td3.setAttribute("class", "tablecol3");
    td3.innerText = el.complainant;
    let td4 = document.createElement("td");
    td4.setAttribute("class", "tablecol");
    td4.setAttribute("class", "tablecol4");
    td4.innerText = el.IssuedDate;
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
    p6.innerText = el.area;
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
    p7.style.margin = "10px 0px 10px 0px";
    divStatus.append(p7);
    td7.append(divStatus);

    let td9 = document.createElement("td");
    td9.style.padding = "10px";
    divtd9 = document.createElement("div");
    // divtd9.style.border="1px solid cyan"
    // divtd9.style.height = "40px";
    let p9 = document.createElement("p");
    p9.innerText = el.complaintType;
    p9.style.margin = "10px 0px 10px 0px";
    divtd9.append(p9);

    td9.append(divtd9);

    if (el.complaintType === "CAW") {
    //   divtd9.style.border = "1px solid navy";
    //   divtd9.style.backgroundColor = "navy";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
    //   divtd9.style.height = "40px";
    //   divtd9.style.color = "white";
    } else if (el.complaintType === "Officers") {
    //   divtd9.style.border = "1px solid brown";
    //   divtd9.style.backgroundColor = "brown";
      divtd9.style.boxSizing = "border-box";
      divtd9.style.alignSelf = "center";
    //   divtd9.style.height = "40px";
    //   divtd9.style.color = "white";
    }

    if (el.priority === "high") {
    //   divarea.style.border = "1px solid green";
    //   divarea.style.backgroundColor = "green";
      divarea.style.boxSizing = "border-box";
      divarea.style.alignSelf = "center";
    //   divarea.style.height = "40px";
    //   divarea.style.color = "white";
    }

    if (el.status === "progress") {
    //   divStatus.style.border = "1px solid lime";
    //   divStatus.style.backgroundColor = "lime";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
    //   divStatus.style.height = "40px";
    //   divStatus.style.color = "white";
    } else if (el.status === "pending") {
    //   divStatus.style.border = "1px solid red";
    //   divStatus.style.backgroundColor = "red";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
    //   divStatus.style.height = "40px";
    //   divStatus.style.color = "white";
    } else if (el.status === "closed") {
    //   divStatus.style.border = "1px solid blue";
    //   divStatus.style.backgroundColor = "blue";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
    //   divStatus.style.height = "40px";
    //   divStatus.style.color = "white";
    } else if (el.status === "overdue") {
    //   divStatus.style.border = "1px solid darkviolet";
    //   divStatus.style.backgroundColor = "darkviolet";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
    //   divStatus.style.height = "40px";
    //   divStatus.style.color = "white";
    } else if (el.status === "rejected") {
    //   divStatus.style.border = "1px solid gray";
    //   divStatus.style.backgroundColor = "gray";
      divStatus.style.boxSizing = "border-box";
      divStatus.style.alignSelf = "center";
    //   divStatus.style.height = "40px";
    //   divStatus.style.color = "white";
    }

    let td8 = document.createElement("td");
    let divtd8 = document.createElement("div");
    divtd8.style.display = "inline";
    // divtd8.style.gap="5px"
    let updateIcon = document.createElement("button");

    let viewIcon = document.createElement("button");
    let commentsIcon = document.createElement("button");
    updateIcon.setAttribute("class", "buttonsAction");
    viewIcon.setAttribute("class", "buttonsAction");
    commentsIcon.setAttribute("class", "buttonsAction");
    updateIcon.innerText = "Update";
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
    tr.append(td1, td2, td3, td9, td4, td5, td6, td8);
    // console.log(tr);
    container.append(tr);
  });


  const toaddComplaints =()=>{
    window.location.href="./addComplaints.html"
  }
  