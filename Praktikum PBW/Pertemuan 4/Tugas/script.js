// Fungsi arrow untuk menghitung
const hitung = (op, a, b) => {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return a / b;
    if (op === '%') return a % b;
};

// Fungsi utama yang dipanggil tombol
function jalankanKalkulator() {
    let inputX = prompt("Masukkan angka pertama:");
    let op = prompt("Masukkan operator (+, -, *, /, %):");
    let inputY = prompt("Masukkan angka kedua:");

    // Ubah jadi number
    let x = Number(inputX);
    let y = Number(inputY);

    // Siapkan array
    let arrayAngka = [x, y];

    // Panggil hitung dengan spread operator (...)
    let res = hitung(op, ...arrayAngka);

    // Tampilkan hasil
    console.log("Hasil perhitungan: " + res);
    alert("Hasil: " + res); // pakai alert supaya langsung muncul pop-up
}