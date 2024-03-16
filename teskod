// Dekode teks
function decodeText(encodedInput) {
    var encodedData = {
        "ABCD1234": "https://www.example.com",
        "EFGH5678": "https://www.anotherexample.com"
    };

    if (encodedData[encodedInput]) {
        return encodedData[encodedInput];
    } else {
        return null;
    }
}

// Fungsi untuk memanggil fungsi decodeText
function generateLink() {
    try {
        var encodedInput = document.getElementById("encodedInput").value;
        var decodedOutput = document.getElementById("decodedOutput");

        var decodedLink = decodeText(encodedInput);
        if (decodedLink) {
            decodedOutput.href = decodedLink;
            decodedOutput.textContent = decodedLink;
        } else {
            decodedOutput.href = "#";
            decodedOutput.textContent = "Teks tidak dapat didekode.";
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Terjadi kesalahan. Silakan cek konsol browser untuk informasi lebih lanjut.");
    }
}
