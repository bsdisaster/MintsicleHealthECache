
addEventListener("load", (event) => {
    showLoggedIn();
let emailTextBox = document.getElementById("textEmail")
    emailTextBox.addEventListener("change", (event) => {
        debugger
        alert("I ran!")

    });
});


function showLoggedIn() {
      if (isLoggedIn()) {
        showSearch()
    } else {
          showLoggedIn();
          document.getElementById("loginAlert").add("loginAlert");
    }
    
}
async function login(event) {

    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;
    debugger
    var loggedIn = isLoggedIn();
    if (!loggedIn) {
        let response = await getToken(email, password);
        if (response.jwtToken) {
            localStorage.setItem("token", response.jwtToken);
        } else {
            document.getElementById('loginAlert').classList.remove("visually-hidden");
        }

    } 
    showLoggedIn();
}

async function getToken(email, password) {
    let loginData = {
        "userName": email,
        "password": password,
    };

    let response = await sendUnauthorizedRequestAsync("identity/login", "POST", loginData)
    return response;
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
        //if (spclCharacter("!@#$%^&*()") { return true };
    }



function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true);
    }
    else {
        alert("You have entered an invalid email address!");
        return (false);
    }
}

function isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token) {
        return true;
    }
    else {
        return false;
        
    }
};

function showSearch() {
    document.getElementById('loginArea').classList.remove("visually-hidden-focusable");
    document.getElementById('searchArea').classList.add("visually-hidden-focusable");
}
function showLogin() {
    document.getElementById('loginArea').classList.add("visually-hidden-focusable");
    document.getElementById('searchArea').classList.remove("visually-hidden-focusable");
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
        const fetchResponse = await fetch("/api/" + apiUrl, settings);
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
        settings['body'] = JSON.stringify(data);
    }
    try {
        let url = "api/" + apiUrl;
        const fetchResponse = await fetch(url, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }
}