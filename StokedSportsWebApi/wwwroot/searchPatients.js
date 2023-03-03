button.addEventListener('click', (event) => {
    search()
};

function searchPatients(event) {
    let firstName = getElementById("firstName").value;
    let lastName = getElementById("lastName").value;
    if ("firstName.value.length > 0") {
        return 
    let searchCriteria = {
        "firstName": firstName,
        "lastName": lastName,
        "DOB": DOB,
        "Visit#": VisitNum,
        "MedicalRecord": MedicalRecord,
        "AdmissionDate": AdmissionDate,
    }
    let isValidSearch = validSearch (searchCriteria)
    //validate successful search criteria
        //return true if criteria is met
        //return false if criteria is not met

}
function validSearch(searchcriteria) {
    
    if (searchCriteria.firstName.length < 1 || searchCriteria.lastName < 1) {
        return false
    }
    return true
    if (searchCriteria.DOB.length < 1 || searchCriteria.VisitNum < 1) {
        return false
    }
    return true
    if (searchCriteria.MedicalRecord < 1 || searchCriteria.AdmissionDate < 1) {
        return false 
    }
    return true
}
