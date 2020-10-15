const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
});

const deleteCard = getAll(".delete");
for (i = 0; i < deleteCard.length; i++) {
  deleteCard[i].addEventListener("click", function () {
    Swal.fire({
      title: "Apa kamu yakin ingin mengahapus tiket?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Ya, Hapus`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const card = this.parentElement.parentElement.parentElement
          .parentElement.parentElement;

        card.style.opacity = "0";
        setTimeout(function () {
          card.style.position = "absolute";
          card.style.pointerEvent = "none";
        }, 500);

        Toast.fire({
          icon: "success",
          title: "Tiket Sukses Dihapus",
        });
      }
    });
  });
}

let lihatTiket = getAll(".lihatTiket");
for (let i = 0; i < lihatTiket.length; i++) {
  lihatTiket[i].addEventListener("click", function () {
    get(".blank").style.opacity = 1;
    get(".blank").style.pointerEvents = "visible";
  });
}

get(".blank").addEventListener("click", function () {
  this.style.opacity = 0;
  this.style.pointerEvents = "none";
});

get("#restore").addEventListener("click", function () {
  let href = this.getAttribute("data-id");
  document.location.href = href;
});
