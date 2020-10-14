const detail_button = getAll(".btn-detail");
for (let i = 0; i < detail_button.length; i++) {
  const btn = detail_button[i];
  btn.addEventListener("click", function () {
    let id = this.getAttribute("id");
    get(".blank").style.opacity = "1";
    get(".blank").style.pointerEvents = "visible";
    get("#cardShowTiket").style.opacity = "1";
    get("#cardShowTiket").style.pointerEvents = "visible";
    get("#loadReceipt").style.opacity = 1;
    get("#loadReceipt").style.position = "static";
    get("#receipt").style.opacity = 0;
    get("#receipt").style.pointerEvents = "none";
    get("#receipt").innerHTML = "";

    setTimeout(() => {
      get("#loadReceipt").style.opacity = 0;
      get("#loadReceipt").style.position = "absolute";
      get("#receipt").style.opacity = 1;
      get("#receipt").style.pointerEvents = "visibled";
      let string = `
      <div class="col-12">
      <div class="row">
        <div class="col-5">No. Pesanan</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Nama Kereta</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Jumlah Tiket</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Stasiun Awal</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Stasiun Akhir</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Dewasa</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Bayi</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Tanggal Berangkat</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Tanggal Pulang</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row">
        <div class="col-5">Total</div>
        <div class="col-2 text-center">:</div>
        <div class="col-5 text-right">sasa</div>
      </div>
      <div class="row mt-3">
        <svg id="receiptCardBarcode"></svg>
      </div>
      <div class="row mt-2">
        <div class="col-12 text-center">
          <span class="text-muted">
            Note : Harap selesaikan pembayaran
          </span>
        </div>
      </div>
    </div>
        `;

      get("#receipt").innerHTML = string;
      setTimeout(() => {
        JsBarcode("#receiptCardBarcode", new Date().getTime(), {
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
  });
}

get(".blank").addEventListener("click", function () {
  get(".blank").style.opacity = "0";
  get(".blank").style.pointerEvents = "none";
  get("#cardShowTiket").style.opacity = "0";
  get("#cardShowTiket").style.pointerEvents = "none";
});
