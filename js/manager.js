$(function () {
  $("#dataMobil").DataTable({
    responsive: true,
    autoWidth: false,
  });

  bsCustomFileInput.init();

  $("#usernameStaff").keyup(function () {
    let val = $("#usernameStaff").val();
    if (val.length > 0) {
      $("#staffUsername").html(val);
    } else {
      $("#staffUsername").html("Staff");
    }

    justUsername(this);
  });

  $("#emailStaff").keyup(function () {
    let val = $("#emailStaff").val();
    if (val.length > 0) {
      $("#staffEmail").html(val);
    } else {
      $("#staffEmail").html("staff@gmail.com");
    }

    ValidateEmail(this);
  });

  $("#firstNameStaff").keyup(function () {
    justText(this);
  });

  $("#lastNameStaff").keyup(function () {
    justText(this);
  });

  $("#staffPass").keyup(function () {
    justPassword(this);
  });

  $("#staffProfile").change(function () {
    const input = document.getElementById("staffProfile");
    const imgPreview = document.querySelector("#imgPreview");

    const file = new FileReader();
    file.readAsDataURL(input.files[0]);

    file.onload = function (e) {
      imgPreview.src = e.target.result;
    };
  });

  // auto type
  // const words = ["Rizki Ramadhan"];
  // let i = 0;
  // let timer;
  // let check = function () {
  //   if ($("#usernameStaff").val() == "") {
  //     typingEffect();
  //   }
  // };

  // $("#usernameStaff").focus(function () {
  //   $("#usernameStaff").val("Staff");
  //   setTimeout(() => {
  //     check();
  //   }, 500);
  // });

  // function typingEffect() {
  //   let word = words[i].split("");
  //   var loopTyping = function () {
  //     if (word.length > 0) {
  //       document.getElementById("usernameStaff").value += word.shift();
  //     } else {
  //       setTimeout(() => {
  //         deletingEffect();
  //       }, 1500);
  //       return false;
  //     }
  //     timer = setTimeout(loopTyping, 80);
  //   };

  //   loopTyping();

  //   function deletingEffect() {
  //     let word = words[i].split("");
  //     var loopDeleting = function () {
  //       if (word.length > 0) {
  //         word.pop();
  //         document.getElementById("usernameStaff").value = word.join("");
  //         timer = setTimeout(loopDeleting, 80);
  //       } else {
  //         setTimeout(() => {
  //           typingEffect();
  //         }, 1500);
  //       }
  //     };
  //     loopDeleting();
  //   }
  // }
});
