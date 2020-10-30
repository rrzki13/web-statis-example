bsCustomFileInput.init();

$("#usernameProfile").keyup(function () {
  let val = $("#usernameProfile").val();
  if (val.length > 0) {
    $("#staffUsername").html(val);
  } else {
    $("#staffUsername").html("Staff");
  }

  justUsername(this);
});

$("#emailProfile").keyup(function () {
  let val = $("#emailProfile").val();
  if (val.length > 0) {
    $("#staffEmail").html(val);
  } else {
    $("#staffEmail").html("staff@gmail.com");
  }

  ValidateEmail(this);
});

$("#nameProfile").keyup(function () {
  justText(this);
});

$("#imgProfile").change(function () {
  const input = document.getElementById("imgProfile");
  const imgPreview = document.querySelector("#imgPreview");

  const file = new FileReader();
  file.readAsDataURL(input.files[0]);

  file.onload = function (e) {
    imgPreview.src = e.target.result;
  };
});

$("#btn-edit-profile").on("click", function () {
  if (this.innerHTML == "Cancel") {
    $(this).addClass("btn-primary");
    $(this).removeClass("btn-danger");
    this.innerHTML = `<b><i class="fa fa-user-edit mr-3"></i> Edit Profile</b>`;

    editMyProfile(false);
  } else {
    $(this).removeClass("btn-primary");
    $(this).addClass("btn-danger");
    this.innerHTML = "Cancel";

    editMyProfile();
  }
});

let editMyProfile = (edited = true) => {
  if (edited) {
    $("#usernameProfile").removeAttr("disabled");
    $("#emailProfile").removeAttr("disabled");
    $("#nameProfile").removeAttr("disabled");
    $("#imgProfile").removeAttr("disabled");
    $("#btn-edit-my-profile").removeAttr("disabled");
  } else {
    $("#usernameProfile").attr("disabled", "disabled");
    $("#emailProfile").attr("disabled", "disabled");
    $("#nameProfile").attr("disabled", "disabled");
    $("#btn-edit-my-profile").attr("disabled", "disabled");
    $("#imgProfile").attr("disabled", "disabled");
  }
};
