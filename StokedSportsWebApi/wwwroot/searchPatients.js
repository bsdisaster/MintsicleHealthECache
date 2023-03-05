
function searchPatients(event) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DOB = document.getElementById("DOB").value;
    let visitNum = document.getElementById("Visit#").value;
    let medRec = document.getElementById("MedicalRecord").value;
    let adminDate = document.getElementById("AdmissionDate").value;
        let searchCriteria = {
            "firstName": firstName,
            "lastName": lastName,
            "DOB": DOB,
            "Visit#": visitNum,
            "MedicalRecord": medRec,
            "AdmissionDate": adminDate,
        };   
}

function validSearch(searchCriteria) { 
    if (searchCriteria.firstName.length > 0 || searchCriteria.lastName > 0) {
        return true
    }
    if (searchCriteria.DOB.length > 0 || searchCriteria.VisitNum > 0) {
        return true
    }
    if (searchCriteria.MedicalRecord > 0 || searchCriteria.AdmissionDate > 0) {
        return true 
    }
    return false
}

let isValidSearch = validSearch(searchCriteria)
if (searchCriteria ==> true) {
    return 
}


