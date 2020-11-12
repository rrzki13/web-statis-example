/* eslint-disable no-undef */
let separator;

// * FormatMoney Class
class FormatMoney {
  toRupiah(bilangan) {
    let number_string = bilangan.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
      return `Rp. ${rupiah}`;
    }
  }
}

const formatter = new FormatMoney();
const change = formatter.toRupiah(get("#total").textContent);
get("#total").innerHTML = change;

get("#beliTiket").addEventListener("click", function () {
  if (justText(get("#namaPemesan")) && justText(get("#namaPemesan"))) {
    get("#load").style.opacity = "1";
    get("#receiptTitle").style.pointerEvent = "none";
    get("#receiptTitle").style.position = "absolute";
    get("#receiptTitle").style.opacity = "0";
    get("#receiptCard").style.pointerEvent = "none";
    get("#receiptCard").style.position = "absolute";
    get("#receiptCard").style.opacity = "0";
    get("#tiketPlace").innerHTML = "";
    get("#beliTiket").style.display = "none";
    get("#lihatDetail").style.display = "block";

    setTimeout(() => {
      let string =
        `
<div class="card p-3 shadow" style="background-color: #fff">
<div class="row">
<div class="col-12 text-center">Receipt</div>
</div>
<div class="row mt-3">
<div class="col-5">No. Pesanan</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">00188989248</div>
</div>
<div class="row mt-1">
<div class="col-5">Nama Kereta</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">` +
        get("#namaKereta").value +
        `</div>
</div>
<div class="row mt-1">
<div class="col-5">Jumlah Tiket</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">` +
        get("#jumlahTiket").value +
        `</div>
</div>
<div class="row mt-1">
<div class="col-5">Tempat Duduk</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">${get("#seat").value}</div>
</div>
<div class="row mt-1">
<div class="col-5">Stasiun Awal</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">` +
        get("#stasiunAwal").value +
        `</div>
</div>
<div class="row mt-1">
<div class="col-5">Stasiun Akhir</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">` +
        get("#stasiunAkhir").value +
        `</div>
</div>
<div class="row mt-1">
<div class="col-5">Dewasa</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">` +
        get("#dewasa").value +
        `</div>
</div>
<div class="row mt-1">
<div class="col-5">Anak</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">` +
        get("#anak").value +
        `</div>
</div>
<div class="row mt-1">
<div class="col-5">Tanggal Berangkat</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">` +
        get("#tglBerangkat").value +
        `</div>
</div>
<div class="row mt-1">
<div class="col-5">Total</div>
<div class="col-2 text-center">:</div>
<div class="col-5 text-right">` +
        formatter.toRupiah(150000) +
        `</div>
</div>
<div class="row justify-content-center mt-3">
<div class="col-12 text-center">
  <svg id="barcodeTiket"></svg>
</div>
</div>
<div class="row justify-content-center mt-3">
<div class="col-12 text-center">
  <span class="text-muted"
    >Note: harap selesaikan pembayaran</span
  >
</div>
</div>
</div>
`;

      get("#load").style.opacity = "0";
      get("#load").style.pointerEvent = "none";
      get("#load").style.position = "absolute";
      get("#receiptTitle").style.pointerEvent = "visible";
      get("#receiptTitle").style.position = "static";
      get("#receiptTitle").style.opacity = "1";
      get("#receiptCard").style.pointerEvent = "visible";
      get("#receiptCard").style.position = "static";
      get("#receiptCard").style.opacity = "1";
      get("#tiketPlace").innerHTML = string;
      setTimeout(() => {
        JsBarcode("#barcodeTiket", "00188989248", {
          format: "codabar",
          lineColor: "#000",
          width: 1.7,
          height: 40,
          displayValue: true,
          background: "#fff",
          fontSize: "17",
        });
      }, 200);
    }, 3000);
  }
});

// * new one
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

const notAvailable = [
  "A01",
  "A02",
  "A03",
  "A13",
  "A11",
  "A25",
  "A27",
  "A40",
  "B40",
  "C01",
  "C02",
  "C03",
];
createTemplateChosseSeat("A", notAvailable);

const jml_gerbong = 11;
get("#gerbongSebelum").addEventListener("click", function () {
  this.style.opacity = 0.8;
  const checkThisOut = parseInt(get("#gerbongIni").textContent) - 1;
  if (checkThisOut > 0) {
    const ranger = [];
    // * get range a-z
    for (const x of Array(26).keys()) {
      let huruf = String.fromCharCode("A".charCodeAt(0) + x);
      ranger.push(huruf);
    }
    get("#gerbongIni").innerHTML = checkThisOut;
    get(".train").style.marginLeft = "-450px";
    get(".train").style.marginRight = "450px";
    get(".train").style.opacity = 0;
    setTimeout(() => {
      this.style.opacity = 1;
      createTemplateChosseSeat(
        ranger[checkThisOut - 1],
        notAvailable,
        false,
        true
      );
      setTimeout(() => {
        get(".train").style.marginLeft = "0px";
        get(".train").style.marginRight = "0px";
      }, 50);
    }, 500);
  }
});

get("#gerbongSelanjutnya").addEventListener("click", function () {
  this.style.opacity = 0.8;
  const checkThisOut = parseInt(get("#gerbongIni").textContent) + 1;
  if (checkThisOut <= jml_gerbong) {
    const ranger = [];
    // * get range a-z
    for (const x of Array(26).keys()) {
      let huruf = String.fromCharCode("A".charCodeAt(0) + x);
      ranger.push(huruf);
    }
    get("#gerbongIni").innerHTML = checkThisOut;
    get(".train").style.marginLeft = "450px";
    get(".train").style.marginRight = "-450px";
    get(".train").style.opacity = "0";
    setTimeout(() => {
      this.style.opacity = 1;
      createTemplateChosseSeat(
        ranger[checkThisOut - 1],
        notAvailable,
        true,
        false
      );
      setTimeout(() => {
        get(".train").style.marginLeft = "0px";
        get(".train").style.marginRight = "0px";
      }, 50);
    }, 500);
  }
});

const maxChosse = parseInt(get("#jumlahTiket").value);
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("seat")) {
    // * check max chosse
    // const maxin = getAll("[data-chossen]");
    const id = e.target.getAttribute("id");
    const available = e.target.dataset.available;
    if (available == "0") {
      const checkVal = get("#seat").value;
      const jml_check = checkVal.split(",");
      if (jml_check.length < maxChosse) {
        if (e.target.dataset.chossen) {
          e.target.removeAttribute("data-chossen");
          const valueInArray = checkVal.split(",");
          const filterThat = valueInArray.filter((v) => !v.includes(id));
          let theRealValue = "";
          filterThat.map((f) => {
            if (theRealValue.length > 0) {
              theRealValue += `,${f}`;
            } else {
              theRealValue += f;
            }
          });
          get("#seat").value = theRealValue;
          e.target.src = "img/seat4.png";
        } else {
          e.target.setAttribute("data-chossen", "1");
          if (checkVal.length > 0) {
            get("#seat").value = `${checkVal},${id}`;
          } else {
            get("#seat").value = id;
          }
          e.target.src = "img/seat5.png";
        }
      } else {
        if (e.target.dataset.chossen == "1") {
          e.target.removeAttribute("data-chossen", "0");
          const valueInArray = checkVal.split(",");
          const filterThat = valueInArray.filter((v) => !v.includes(id));
          let theRealValue = "";
          filterThat.map((f) => {
            if (theRealValue.length > 0) {
              theRealValue += `,${f}`;
            } else {
              theRealValue += f;
            }
          });
          get("#seat").value = theRealValue;
          e.target.src = "img/seat4.png";
        } else {
          Toast.fire({
            icon: "warning",
            title: `Maksimal ${maxChosse} kursi`,
          });
        }
      }
    } else {
      Toast.fire({
        icon: "warning",
        title: "Kursi sudah dipesan",
      });
    }
  }
});

function createTemplateChosseSeat(
  gerbongKe,
  notAvailable,
  start = false,
  end = false
) {
  const containt = get("#seat_select");
  const range = [];
  const seat = [];

  for (const x of Array(50).keys()) {
    range.push(x + 1);
  }

  range.forEach((r) => {
    let seatNum = "";
    if (r < 10) {
      seatNum = gerbongKe + "0" + r;
    } else {
      seatNum = gerbongKe + r;
    }
    seat.push(seatNum);
  });

  let a = "";
  let b = "";
  let c = "";
  let d = "";
  let string = /* html */ `
<div class="train p-2 ${start ? "start-from-zero" : ""}${
    end ? "end-from-zero" : ""
  }">
<div class="row justify-content-center">
  <div class="col-md-10 test1">
  ${seat.forEach((s, i) => {
    if (i < 10) {
      let seatId = s;
      let checking = "img/seat4.png";
      let dataset = "0";
      let notEmpty = notAvailable.filter((na) => na.includes(seatId));
      if (notEmpty.length > 0) {
        dataset = "1";
        checking = "img/seat3.png";
      }
      a += `<img src="${checking}" class="seat" id="${seatId}" data-available="${dataset}"/>`;
      setTimeout(() => {
        get(".test1").innerHTML = a;
      }, 100);
    }
  })}
  </div>
</div>
<div class="row justify-content-center">
  <div class="col-md-10 test2">
  ${seat.forEach((s, i) => {
    if (i >= 10 && i < 20) {
      let seatId = s;
      let checking = "img/seat4.png";
      let dataset = "0";
      let notEmpty = notAvailable.filter((na) => na.includes(seatId));
      if (notEmpty.length > 0) {
        dataset = "1";
        checking = "img/seat3.png";
      }
      b += `<img src="${checking}" class="seat" id="${seatId}" data-available="${dataset}"/>`;
      setTimeout(() => {
        get(".test2").innerHTML = b;
      }, 100);
    }
  })}
  </div>
</div>
<div class="row my-3"></div>
<div class="row justify-content-center">
  <div class="col-md-10 test3">
  ${seat.forEach((s, i) => {
    if (i >= 20 && i < 30) {
      let seatId = s;
      let checking = "img/seat4.png";
      let dataset = "0";
      let notEmpty = notAvailable.filter((na) => na.includes(seatId));
      if (notEmpty.length > 0) {
        dataset = "1";
        checking = "img/seat3.png";
      }
      c += `<img src="${checking}" class="seat" id="${seatId}" data-available="${dataset}"/>`;
      setTimeout(() => {
        get(".test3").innerHTML = c;
      }, 100);
    }
  })}
  </div>
</div>
<div class="row justify-content-center">
  <div class="col-md-10 test4">
  ${seat.forEach((s, i) => {
    if (i >= 30 && i < 40) {
      let seatId = s;
      let checking = "img/seat4.png";
      let dataset = "0";
      let notEmpty = notAvailable.filter((na) => na.includes(seatId));
      if (notEmpty.length > 0) {
        dataset = "1";
        checking = "img/seat3.png";
      }
      d += `<img src="${checking}" class="seat" id="${seatId}" data-available="${dataset}"/>`;
      setTimeout(() => {
        get(".test4").innerHTML = d;
      }, 100);
    }
  })}
  </div>
</div>
</div>
`;

  containt.innerHTML = string;
}
