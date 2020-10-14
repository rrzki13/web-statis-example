const dataStation = [];
const kereta = [];
setStationData();
setKereta();

get("#card-main").addEventListener("click", function () {
  get(".blank").style.opacity = "1";
  get(".blank").style.pointerEvents = "auto";
});

get("#dari").addEventListener("focus", function () {
  get("#dariStasiunChoose").style.display = "block";
  get("#dariStasiunChoose").style.opacity = "1";
  closeallExcept("dariStasiunChoose");
});

get("#ke").addEventListener("focus", function () {
  get("#keStasiunChoose").style.display = "block";
  get("#keStasiunChoose").style.opacity = "1";
  closeallExcept("keStasiunChoose");
});

get("#jmlTiket").addEventListener("focus", function () {
  closeallExcept("jmlTiketCard");
  get("#jmlTiketCard").style.display = "block";
  get("#jmlTiketCard").style.opacity = "1";
});

get("#berangkat").addEventListener("focus", function () {
  closeall();
});

get("#pulang").addEventListener("focus", function () {
  closeall();
});

get("#check-pulang").addEventListener("change", function () {
  if (this.checked) {
    get("#pulang").removeAttribute("disabled");
    checkedValidate();
  } else {
    get("#pulang").setAttribute("disabled", "disabled");
    get("#pulang").value = "";
    get("#pulangValidate").innerHTML = "";
    checkedValidate();
  }
});

const stasion1 = getAll(".list-group-item1");
for (i = 0; i < stasion1.length; i++) {
  stasion1[i].addEventListener("click", function () {
    const id = this.getAttribute("id");
    get("#dari").value = id;
    get("#dari").focus();
  });
}

const stasion2 = getAll(".list-group-item2");
for (i = 0; i < stasion2.length; i++) {
  stasion2[i].addEventListener("click", function () {
    const id = this.getAttribute("id");
    get("#ke").value = id;
    get("#ke").focus();
  });
}

get(".blank").addEventListener("click", function () {
  get(".blank").style.pointerEvents = "none";
  get(".blank").style.opacity = "0";
  closeall();
});

get("#dari").addEventListener("keyup", function () {
  validate("dari");
  searchInList("dari", "1");
  checkedValidate();
});

get("#dari").addEventListener("click", function () {
  validate("dari");
  searchInList("dari", "1");
  checkedValidate();
});

get("#dari").addEventListener("focusout", function () {
  validate("dari");
  searchInList("dari", "1");
  checkedValidate();
});

get("#ke").addEventListener("keyup", function () {
  validate("ke");
  searchInList("ke", "2");
  checkedValidate();
});

get("#ke").addEventListener("click", function () {
  validate("ke");
  searchInList("ke", "2");
  checkedValidate();
});

get("#ke").addEventListener("focusout", function () {
  validate("ke");
  searchInList("ke", "1");
  checkedValidate();
});

get("#minusBtnAdult").addEventListener("click", function () {
  const hasil_awal = get("#jmlDewasa").innerHTML;
  const hasil_akhir = parseInt(hasil_awal) - 1;
  const innerInput = get("#jmlTiket").value;
  const test = innerInput.split(",");

  if (hasil_akhir < 0) {
    if (test.length > 1) {
      get("#jmlTiket").value = 0 + " dewasa," + test[1];
      get("#jmlDewasa").innerHTML = 0;
      get("#dewasaIpt").value = 0;
      checkJml("dewasa");
      checkedValidate();
    } else {
      get("#jmlTiket").value = 0 + " dewasa";
      get("#jmlDewasa").innerHTML = 0;
      get("#dewasaIpt").value = 0;
      checkJml("dewasa");
      checkedValidate();
    }
  } else {
    if (test.length > 1) {
      get("#jmlTiket").value = hasil_akhir + " dewasa," + test[1];
      get("#jmlDewasa").innerHTML = hasil_akhir;
      get("#dewasaIpt").value = hasil_akhir;
      checkJml("dewasa");
      checkedValidate();
    } else {
      get("#jmlTiket").value = hasil_akhir + " dewasa";
      get("#dewasaIpt").value = hasil_akhir;
      get("#jmlDewasa").innerHTML = hasil_akhir;
      checkJml("dewasa");
      checkedValidate();
    }
  }
});

get("#plusBtnAdult").addEventListener("click", function () {
  const hasil_awal = get("#jmlDewasa").innerHTML;
  const hasil_akhir = parseInt(hasil_awal) + 1;
  const innerInput = get("#jmlTiket").value;
  const test = innerInput.split(",");

  if (hasil_akhir > 4) {
    if (test.length > 1) {
      get("#jmlTiket").value = 4 + " dewasa," + test[1];
      get("#dewasaIpt").value = 4;
      get("#jmlDewasa").innerHTML = 4;
      checkJml("dewasa");
      checkedValidate();
    } else {
      get("#jmlTiket").value = 4 + " dewasa";
      get("#dewasaIpt").value = 4;
      get("#jmlDewasa").innerHTML = 4;
      checkedValidate();
      checkJml("dewasa");
    }
  } else {
    if (test.length > 1) {
      get("#jmlTiket").value = hasil_akhir + " dewasa," + test[1];
      get("#dewasaIpt").value = hasil_akhir;
      get("#jmlDewasa").innerHTML = hasil_akhir;
      checkedValidate();
      checkJml("dewasa");
    } else {
      get("#jmlTiket").value = hasil_akhir + " dewasa";
      get("#dewasaIpt").value = hasil_akhir;
      get("#jmlDewasa").innerHTML = hasil_akhir;
      checkedValidate();
      checkJml("dewasa");
    }
  }
});

get("#minusBtnInfant").addEventListener("click", function () {
  const hasil_awal = get("#jmlBayi").innerHTML;
  const hasil_akhir = parseInt(hasil_awal) - 1;
  const innerInput = get("#jmlTiket").value;
  const test = innerInput.split(",");

  if (hasil_akhir < 0) {
    get("#jmlTiket").value = test[0];
    get("#anakIpt").value = 0;
    get("#jmlBayi").innerHTML = 0;
  } else {
    if (hasil_akhir == 0) {
      get("#jmlTiket").value = test[0];
    } else {
      get("#jmlTiket").value = test[0] + ", " + hasil_akhir + " anak";
    }
    get("#anakIpt").value = hasil_akhir;
    get("#jmlBayi").innerHTML = hasil_akhir;
  }
});

get("#plusBtnInfant").addEventListener("click", function () {
  const hasil_awal = get("#jmlBayi").innerHTML;
  const hasil_akhir = parseInt(hasil_awal) + 1;
  const innerInput = get("#jmlTiket").value;
  const test = innerInput.split(",");

  if (hasil_akhir > 4) {
    get("#anakIpt").value = 4;
    get("#jmlTiket").value = test[0] + ", " + 4 + " anak";
    get("#jmlBayi").innerHTML = 4;
    checkJml("anak");
  } else {
    get("#anakIpt").value = hasil_akhir;
    get("#jmlTiket").value = test[0] + ", " + hasil_akhir + " bayi";
    get("#jmlBayi").innerHTML = hasil_akhir;
    checkJml("anak");
  }
});

get("#berangkat").addEventListener("change", function () {
  validateDate("berangkat");
  checkedValidate();
});

get("#pulang").addEventListener("change", function () {
  validateDate("pulang");
  checkedValidate();
});

get("#cariTiket").addEventListener("click", function (e) {
  e.preventDefault();
  if (checkedValidate()) {
    get("#theTiket").style.display = "none";
    get("#theLoading").style.opacity = "1";
    get("#theLoading").style.position = "static";
    closeall();
    const jml_tiket =
      parseInt(get("#dewasaIpt").value) + parseInt(get("#anakIpt").value);
    const total = jml_tiket * 100000;
    get("#ticketResult").style.display = "block";
    setTimeout(function () {
  get(".blank").style.pointerEvents = "none";
  get(".blank").style.opacity = "0";
    }, 300);
    setTimeout(function () {
      get("#theLoading").style.opacity = "0";
      get("#theLoading").style.position = "absolute";
      get("#theTiket").style.display = "block";
      get("#tiketPlace").innerHTML = "";
      if (get("#check-pulang").checked) {
        appendTiket2(jml_tiket, total);
      } else {
        appendTiket(jml_tiket, total);
      }
    }, 3000);
  } else {
    alert("false");
  }
});