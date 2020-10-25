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
