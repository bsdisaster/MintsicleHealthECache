
addEventListener("load", (event) => {

    //call isLoggedIn

});

function login(event) {
    //send request to server to get a token
    //store token in local storage
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;
    debugger;
    if (!validatePassword(password)) {
        alert("Invalid password, please enter a valid password")
        return false;
    }
    else {
        alert("Success!")
        return true;
    }
    function validatePassword(password) {
        const passwordMinLength = 8
        let passwordLength = password.length
        if (passwordLength < passwordMinLength) {
            return false
        };
        let NumberisInteger = number.isInteger
        if (NumberisInteger(0, 9)) { return true };
        let spclCharacter = spcl.Character
        if (spclCharacter("!@#$%^&*()") { return true };
    }


    function validateEmail(email) {
        debugger;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
            return (true);
        }
        else {
            alert("You have entered an invalid email address!");
            return (false);
        }
    }

async function isLoggedIn() {
    let isLoggedIn = true
    //if true display search area and hide loginArea

}

async function sendAuthorizedRequestAsync(apiUrl, methodType, data) {
    const settings = {
        method: methodType,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.Access_Token}`,
        }
    }; if (data !== null) {
        settings['body'] = JSON.stringify(data)
    }
    try {
        const fetchResponse = await fetch("../api/" + apiUrl, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}
async function sendUnauthorizedRequestAsync(apiUrl, methodType, data) {
    const settings = {
        method: methodType,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };
    if (data !== null) {
        settings['body'] = JSON.stringify(data)
    }
    try {
        const fetchResponse = await fetch("../api/" + apiUrl, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}