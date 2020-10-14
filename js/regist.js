get("#namaDepan").addEventListener("keyup", function () {
  justText(this);
  validateRegist();
});

get("#namaBelakang").addEventListener("keyup", function () {
  justText(this);
  validateRegist();
});

get("#username").addEventListener("keyup", function () {
  if (justUsername(this)) {
    if (invalidUsername.indexOf(this.value.toLowerCase()) != -1) {
      get("#usernameUsernameValidate").innerHTML = "Username tidak tersedia";
    }
    validateRegist();
  }
  validateRegist();
});

get("#email").addEventListener("keyup", function () {
  if (ValidateEmail(this)) {
    if (invalidEmail.indexOf(this.value) != -1) {
      get("#emailEmailValidate").innerHTML = "Email tidak tersedia";
    }
    validateRegist();
  }
  validateRegist();
});

get("#password").addEventListener("keyup", function () {
  justPassword(this);
  validateRegist();
});

function validateRegist() {
  if (
    justText(get("#namaDepan"), false) &&
    justText(get("#namaBelakang"), false) &&
    justUsername(get("#username"), false) &&
    ValidateEmail(get("#email"), false) &&
    justPassword(get("#password"), false)
  ) {
    get("#sign-up").removeAttribute("disabled");
  } else {
    get("#sign-up").setAttribute("disabled", "disabled");
  }
}

function justUsername(r, report = true) {
  const id = r.getAttribute("id");
  if (r.value == "") {
    if (report) {
      get("#" + id + "UsernameValidate").innerHTML = "Harus diisi";
    }
    return false;
  } else if (r.value.length < 5) {
    if (report) {
      get("#" + id + "UsernameValidate").innerHTML = "Minimal 5 karakter";
    }
    return false;
  } else if (r.value.length > 11) {
    if (report) {
      get("#" + id + "UsernameValidate").innerHTML = "Maksimal 10 karakter";
    }
    return false;
  } else if (/^[a-zA-Z0-9]*$/.test(r.value)) {
    if (report) {
      get("#" + id + "UsernameValidate").innerHTML = "";
    }
    return true;
  } else {
    if (report) {
      get("#" + id + "UsernameValidate").innerHTML =
        "Hanya boleh menggunakan huruf dan angka";
    }
    return false;
  }
}
