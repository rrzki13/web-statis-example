const invalidUsername = []
const invalidEmail = []
getSuccessUsername()

get("#namaDepan").addEventListener("keyup", function() {
    justText(this)
    validateRegist()
})

get("#namaBelakang").addEventListener("keyup", function() {
    justText(this)
    validateRegist()
})

get("#username").addEventListener("keyup", function() {
    if(justUsername(this)){
        if (invalidUsername.indexOf(this.value.toLowerCase()) != -1) {
           get("#usernameUsernameValidate").innerHTML = "Username tidak tersedia"
        }
        validateRegist()
    }
    validateRegist()
})

get("#email").addEventListener('keyup', function() {
    if(ValidateEmail(this)) {
        if (invalidEmail.indexOf(this.value) != -1) {
            get("#emailEmailValidate").innerHTML = "Email tidak tersedia"
        }
        validateRegist()
    }
    validateRegist()
})

get("#password").addEventListener('keyup', function() {
    justPassword(this)
    validateRegist()
})

function validateRegist() {
    if(justText(get("#namaDepan"), false) && justText(get("#namaBelakang"), false) && justUsername(get("#username"), false) && ValidateEmail(get("#email"), false) && justPassword(get("#password"), false)) {
        if(invalidUsername.indexOf(get("#username").value.toLowerCase()) == -1 && invalidEmail.indexOf(get("#email").value) == -1) {
            get("#sign-up").removeAttribute("disabled")
        }else {
            get("#sign-up").setAttribute("disabled", "disabled")
        }
    }else {
        get("#sign-up").setAttribute("disabled", "disabled")
    }
}

function getSuccessUsername () {
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost/ktrains-rest/api/User", true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var data = JSON.parse(this.response);
            if (data.status) {
                const dataValue = data.data;
                for (i=0;i<dataValue.length;i++) {
                    const username = dataValue[i].username
                    invalidUsername.push(username)
                }
                for (i=0;i<dataValue.length;i++) {
                    const email = dataValue[i].email
                    invalidEmail.push(email)
                }
            }
            
        } else {
            // We reached our target server, but it returned an error
            return false
        }
    };

    request.onerror = function () {
    // There was a connection error of some sort
    return false
    };

    request.send();
}