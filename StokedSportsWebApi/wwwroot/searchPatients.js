
async function searchPatients(event) {
    debugger;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("DOB").value;
    let visitNum = document.getElementById("visitNum").value;
    let medicalRecord = document.getElementById("medRec").value;
    let admissionDate = document.getElementById("admitDate").value;
        let searchCriteria = {
            "firstName": firstName,
            "lastName": lastName,
 //           "dob": dob,
//            "visitNum": visitNum,
  //          "medicalRecord": medicalRecord,
  //          "admissionDate": admissionDate,
    };
    let isSearchValid = validSearch(searchCriteria);
    if (isSearchValid) {
        let responce = await getPatients(searchCriteria);
    }
    else {
        alert ("Minimum search criteria not met.")
    }
}

async function getPatients(searchCriteria) {
    let response = await sendUnauthorizedRequestAsync("identity/patients", "POST", null)
    return response;
}

function validSearch(searchCriteria) { 
    if (searchCriteria.firstName.length > 0 && searchCriteria.lastName.length > 0) {
        return true
    }
    if (searchCriteria.dob.length > 0 || searchCriteria.visitNum.length > 0) {
        return true
    }
    if (searchCriteria.medicalRecord.length > 0 || searchCriteria.admissionDate.length > 0) {
        return true 
    }
    return false
}
