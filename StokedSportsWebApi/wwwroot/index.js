
window.addEventListener("load", (event) => {
    const element = document.getElementById("btnLogin");
    element.addEventListener("click", login);
});


async function login() {
    var loginData = {
        "Email": document.querySelector("#txtEmail").value,
        "Password": document.querySelector("#txtPassword").value
    }
    debugger;
    var loginResponse = await sendUnauthorizedRequestAsync("../api/identity/Login", "POST",loginData)
}

async function sendAuthorizedRequestAsync(apiUrl, methodType, data) {

    const settings = {
        method: methodType,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.Access_Token}`,
        }
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