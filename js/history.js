// ajax request
// var request = new XMLHttpRequest();
// request.open("GET", "https://api.kawalcorona.com/indonesia/", true);

// request.onload = function () {
//   if (this.status >= 200 && this.status < 400) {
//     // Success!
//     var data = JSON.parse(this.response);
//     console.log(data[0]);
//   } else {
//     // We reached our target server, but it returned an error
//     alert(false);
//   }
// };

// request.onerror = function () {
//   // There was a connection error of some sort
//   alert(false);
// };

// request.send();

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
});

const deleteCard = getAll(".delete");
for (i = 0; i < deleteCard.length; i++) {
  deleteCard[i].addEventListener("click", function () {
    const card = this.parentElement.parentElement.parentElement.parentElement
      .parentElement;

    card.style.opacity = "0";
    setTimeout(function () {
      card.style.position = "absolute";
      card.style.pointerEvent = "none";
    }, 500);

    Toast.fire({
      icon: "success",
      title: "Data allready deleted",
    });
  });
}

get("#beliTiket").addEventListener("click", function (e) {
  e.preventDefault();
  var today = new Date().getTime();
  get("#receiptTitle").style.pointerEvent = "none";
  get("#receiptTitle").style.position = "absolute";
  get("#receiptTitle").style.opacity = "0";
  get("#receiptCard").style.pointerEvent = "none";
  get("#receiptCard").style.position = "absolute";
  get("#receiptCard").style.opacity = "0";
  get("#tiketPlace").innerHTML = "";
  const string =
    `
  <div class="card p-3 shadow" style="background-color: #fff">
  <div class="row">
    <div class="col-12 text-center">Receipt</div>
  </div>
  <div class="row mt-3">
    <div class="col-5">No. Pesanan</div>
    <div class="col-2 text-center">:</div>
    <div class="col-5 text-right">` +
    today +
    `</div>
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
    get("#total").textContent +
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
  get("#load").style.opacity = "1";
  setTimeout(function () {
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
    get("#beliTiket").style.display = "none";
    get("#lihatDetail").style.display = "block";
    setTimeout(function () {
      JsBarcode("#barcodeTiket", today, {
        format: "codabar",
        lineColor: "#000",
        width: 1.7,
        height: 40,
        displayValue: true,
        background: "#fff",
        fontSize: "17",
      });
    }, 300);
  }, 3000);
});
