let response = await sendUnauthorizedRequestAsync("../api/Identity/Users", "POST", {})
});
function login(event) {
    //store the username
    //store password
    //validate username and password
    //send request to server to get a token
    //take user to secure page

    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;
}
function validatePassword(password) {
    var password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!validatePassword(password)) {
        alert("false, try again")
        return invalid;
    }
    else {
        alert("Success!")
        return Valid;
    }
}
debugger;



function validateEmail(email) {

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