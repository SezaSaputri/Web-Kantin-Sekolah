
// function hitungtotal() {
//     const hargaMenu = {
//         "happy meal": 55000,
//         "oreomilkshake": 25000,
//         "ice cream": 20000,
//         "hamburger": 45000,
//         "cheeseburger": 45000,
//         "egg mcmuffin": 30000
//     };

//     const menuKids = document.getElementById("kiddo")
//         .value.trim().toLowerCase();
//     const jumlahKids = Number(document.getElementById("kids").value);

//     const menuRegular = document.getElementById("regular")
//         .value.trim().toLowerCase();
//     const jumlahRegular = Number(document.getElementById("jumlah").value);

//     let total = 0;
//     let adaPesanan = false;

//     if (menuKids !== "") {
//         if (!hargaMenu[menuKids]) {
//             alert("Menu Kiddos tidak ditemukan!");
//             return;
//         }

//         if (!Number.isInteger(jumlahKids) || jumlahKids < 1) {
//             alert("Masukkan jumlah Kiddos yang valid!");
//             return;
//         }

//         total += hargaMenu[menuKids] * jumlahKids;
//         adaPesanan = true;
//     }

//     if (menuRegular !== "") {
//         if (!hargaMenu[menuRegular]) {
//             alert("Menu Regular tidak ditemukan!");
//             return;
//         }

//         if (!Number.isInteger(jumlahRegular) || jumlahRegular < 1) {
//             alert("Masukkan jumlah Regular yang valid!");
//             return;
//         }

//         total += hargaMenu[menuRegular] * jumlahRegular;
//         adaPesanan = true;
//     }

//     if (!adaPesanan) {
//         alert("Masukkan minimal satu menu!");
//         return;
//     }

//     document.getElementById("hasil").textContent =
//         "Rp" + total.toLocaleString("id-ID");
// }
