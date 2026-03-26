// Fungsi sederhana buat menghitung matematika
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

    // Buat ngubah yang tadinya string jadi number
    let x = Number(inputX);
    let y = Number(inputY);

    // Buat nyimpen angka kedua dalam array
    let arrayAngka = [x, y];

    // Buat ngeluarin isi array menjadi parameter (a,b)
    let res = hitung(op, ...arrayAngka);

    // Buat nampilin hasil di console
    console.log("Hasil perhitungan: " + res);
    alert("Hasil: " + res); // pakai alert biar langsung muncul pop-up
}