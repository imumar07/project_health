let table = document.getElementById("hospitalTable");
let entry = document.getElementById("hospitalEntry");
let proceedBtn = document.getElementById("proceedBtn");
let hospitals = [{
        "Name": "KIMS",
        "Doctor_Name": "DR. RAMESH",
        "Location": "VIZAG",
        "Availability": "YES",
    },
    {
        "Name": "AIMS",
        "Doctor_Name": "DR. SURESH",
        "Location": "VIZAG",
        "Availability": "NO",
    },
    {
        "Name": "VIMS",
        "Doctor_Name": "DR. RAJU",
        "Location": "VIZAG",
        "Availability": "YES",
    },
    {
        "Name": "AMC",
        "Doctor_Name": "DR. RAJESH",
        "Location": "VIZAG",
        "Availability": "YES"
    }
];

function show() {
    table.textContent = "";
    if (entry.value === "vizag") {
        for (let item of hospitals) {
            let row_element = document.createElement("tr");
            let name = document.createElement("td");
            name.textContent = item.Name;
            let doctor = document.createElement("td");
            doctor.textContent = item.Doctor_Name;
            let locality = document.createElement("td");
            locality.textContent = item.Location;
            let available = document.createElement("td");
            available.textContent = item.Availability;
            row_element.appendChild(name);
            row_element.appendChild(doctor);
            row_element.appendChild(locality);
            row_element.appendChild(available);
            table.appendChild(row_element);
        }
    }
}

proceedBtn.onclick = function() {
    show();
}