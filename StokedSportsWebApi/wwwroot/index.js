window.addEventListener("load", async function (event) {
    //research selecting DOM elements with javascript (get element by ID)
    //research event listeners with js
    let response = await sendUnauthorizedRequestAsync("../api/Identity/Users", "POST", {});
});

function login(event) {
    //store the username
    //store password
    //validate username and password
    //send request to server to get a token
    //take user to secure page
    debugger;
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;
    console.log(email);
    console.log(password);
}

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