const restoreBtn = getAll(".restoreTiket");
const hapusBtn = getAll(".hapusTiket");

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
});

for (let i = 0; i < restoreBtn.length; i++) {
  restoreBtn[i].addEventListener("click", function () {
    Swal.fire({
      title: "Apakah kamu ingin merestore tiket ini?",
      showCancelButton: true,
      confirmButtonText: `Ya`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "Tiket sukses direstore",
        });
      }
    });
  });
}

for (let i = 0; i < hapusBtn.length; i++) {
  hapusBtn[i].addEventListener("click", function () {
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "Kamu akan menghapus tiket ini secara permanen",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          icon: "success",
          title: "Tiket sukses dihapus",
        });
      }
    });
  });
}
