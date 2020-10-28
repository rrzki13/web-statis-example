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
    validateRegist();
  }
  validateRegist();
});

get("#email").addEventListener("keyup", function () {
  if (ValidateEmail(this)) {
    validateRegist();
  }
  validateRegist();
});

get("#password").addEventListener("keyup", function () {
  justPassword(this);
  validateRegist();
});

get("#sign-up").addEventListener("click", function() {
  document.location.href = "index.html"
})

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
