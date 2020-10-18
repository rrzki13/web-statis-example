const restoreBtn = getAll(".restoreTiket");
const hapusBtn = getAll(".hapusTiket");
const idCard = [];

restoreBtn.forEach((i) => {
  let id = i.getAttribute("id");
  idCard.push(id);
});

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

        let id = this.getAttribute("id");
        const index = idCard.indexOf(id);
        if (index > -1) {
          idCard.splice(index, 1);
        }

        checkArray();

        let card = this.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement;
        let cardParent = this.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement.parentElement;
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.position = "absolute";
          cardParent.style.position = "absolute";
          card.style.pointerEvent = "none";
        }, 500);
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

        let id = this.getAttribute("id");
        const index = idCard.indexOf(id);
        if (index > -1) {
          idCard.splice(index, 1);
        }

        checkArray();

        let card = this.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement;
        let cardParent = this.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement.parentElement;
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.position = "absolute";
          cardParent.style.position = "absolute";
          card.style.pointerEvent = "none";
        }, 500);
      }
    });
  });
}

const checkArray = () => {
  if (idCard.length == 0) {
    setTimeout(() => {
      const noRestore = getAll("#noRestore");
      noRestore.forEach((i) => {
        get("#restoreParent").style.display = "none";
        i.style.opacity = "1";
        i.style.position = "static";
        i.style.pointerEvent = "visible";
      });
    }, 500);
  }
};
