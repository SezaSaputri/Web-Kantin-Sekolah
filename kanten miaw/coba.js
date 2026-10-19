
function hitungtotal() {
    let menu = document.getElementById("menu").value.toLowerCase();
    let jumlah = document.getElementById("jumlah").value;

    let harga = {
        "happy meal": 55000,
        "oreomilkshake": 25000,
        "ice cream": 20000,
        "hamburger": 45000,
        "cheeseburger": 45000,
        "egg mcmuffin": 30000
    };

    let total = harga[menu] * jumlah;

    document.getElementById("hasil").innerHTML = "Rp" + total;
}