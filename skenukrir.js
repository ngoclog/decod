(function() {
    var currentDomain = window.location.hostname;
    var allowedDomains = ["ikode.shop", "www.ikode.shop"]; // Domain yang diperbolehkan
    var allowedDomainRegex = new RegExp("^https?://(www\\.)?ikode\\.shop.*$");
    if (!allowedDomainRegex.test(window.location.href)) {
        console.error("Unauthorized access. Redirecting...");
        window.location.href = "https://www.ikode.shop";
    }
})();

function getParameterByName(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function decodeText() {
    var encodedInput = document.getElementById("encodedInput").value;
    var decodedOutput = document.getElementById("decodedOutput");
    var thankYouMessage = document.getElementById("thankYouMessage");

    // Objek encodedData yang berisi data enkripsi
    var encodedData = {
    "STARS-248": "https://basejs1flexbox.blogspot.com/2024/03/str1.html",
    "stars-248": "https://basejs1flexbox.blogspot.com/2024/03/str1.html",
    "mimk-146": "https://basejs1flexbox.blogspot.com/2024/03/min1.html",
    "MIMK-146": "https://basejs1flexbox.blogspot.com/2024/03/min1.html",
    "MEYD-568": "https://basejs1flexbox.blogspot.com/2024/03/meg1.html",
    "meyd-568": "https://basejs1flexbox.blogspot.com/2024/03/meg1.html",
    "mide-730": "https://basejs1flexbox.blogspot.com/2024/03/SHO1.html",
    "MIDE-730": "https://basejs1flexbox.blogspot.com/2024/03/SHO1.html",
    "MIDV-614": "https://basejs1flexbox.blogspot.com/2024/03/blog-post.html",
    "midv-614": "https://basejs1flexbox.blogspot.com/2024/03/blog-post.html",
    "ipx-678": "https://basejs1flexbox.blogspot.com/2024/03/ipx-678.html",
    "IPX-678": "https://basejs1flexbox.blogspot.com/2024/03/ipx-678.html",
    "SONE-053": "https://basejs1flexbox.blogspot.com/2024/03/RIN1.html",
    "sone-053": "https://basejs1flexbox.blogspot.com/2024/03/RIN1.html",
    "ebwh-046": "https://basejs1flexbox.blogspot.com/2024/03/NAN.html",
    "EBWH-046": "https://basejs1flexbox.blogspot.com/2024/03/NAN.html",
    "IPZZ-185": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_08.html",
    "ipzz-185": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_08.html",
    "juq-579": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_276.html",
    "JUQ-579": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_276.html",
    "ROE-202": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_598.html",
    "roe-202": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_598.html",
    "stars-967": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_35.html",
    "STARS-967": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_35.html",
    "JUX-901": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_241.html",
    "jux-901": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_241.html",
    "dasd-875": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_804.html",
    "DASD-875": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_804.html",
    "WAAA-327": "https://basejs1flexbox.blogspot.com/2024/03/Kan1.html",
    "waaa-327": "https://basejs1flexbox.blogspot.com/2024/03/Kan1.html",
    "rbd-704": "https://basejs1flexbox.blogspot.com/2024/03/RIN1_01989340365.html",
    "RBD-704": "https://basejs1flexbox.blogspot.com/2024/03/RIN1_01989340365.html",
    "HMN-144": "https://basejs1flexbox.blogspot.com/2024/03/jul1.html",
    "hmn-144": "https://basejs1flexbox.blogspot.com/2024/03/jul1.html",
    "stars-895": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_09.html",
    "STARS-895": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_09.html",
    "SSIS-360": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_326.html",
    "ssis-360": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_326.html",
    "mmik-056": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_521.html",
    "MMIK-056": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_521.html",
    "FMDL-008": "https://basejs1flexbox.blogspot.com/2024/03/MEI1.html",
    "fmdl-008": "https://basejs1flexbox.blogspot.com/2024/03/MEI1.html",
    "miaa-625": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_12.html",
    "MIAA-625": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_12.html",
    "PPPE-096": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_720.html",
    "pppe-096": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_720.html",
    "juq-623": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_440.html",
    "JUQ-623": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_440.html",
    "BBAN-462": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_14.html",
    "bban-462": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_14.html",
    "waaa-351": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_119.html",
    "WAAA-351": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_119.html",
    "CAWD-507": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_634.html",
    "cawd-507": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_634.html",
    "vec-530": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_518.html",
    "VEC-530": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_518.html",
    "DASS-258": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_15.html",
    "dass-258": "https://basejs1flexbox.blogspot.com/2024/03/blog-post_15.html"
    "XVSR-728": "https://basejs1flexbox.blogspot.com/2024/03/AM1.html",
      "xvsr-728": "https://basejs1flexbox.blogspot.com/2024/03/AM1.htm",
}
