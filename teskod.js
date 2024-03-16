// Dekode teks
function decodeText() {
    try {
        var encodedInput = document.getElementById("encodedInput").value;
        var decodedOutput = document.getElementById("decodedOutput");
        var thankYouMessage = document.getElementById("thankYouMessage");

        var encodedData = {
            "BKR-123": "https://www.example.com",
            // Tambahkan pasangan kunci-nilai lain di sini sesuai kebutuhan Anda
        };

        if (encodedData[encodedInput]) {
            var originalText = encodedData[encodedInput];
            decodedOutput.href = originalText;
            decodedOutput.textContent = originalText;
            thankYouMessage.style.display = "block"; // Menampilkan pesan terima kasih
        } else {
            decodedOutput.href = "#";
            decodedOutput.textContent = "Teks tidak dapat didekode.";
            thankYouMessage.style.display = "none"; // Sembunyikan pesan terima kasih jika tidak ada hasil dekode
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Terjadi kesalahan. Silakan cek konsol browser untuk informasi lebih lanjut.");
    }
}
