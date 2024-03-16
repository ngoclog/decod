 (function() {
        var currentDomain = window.location.hostname;
        var allowedDomains = [&quot;ikode.shop&quot;, &quot;www.ikode.shop&quot;]; // Domain yang diperbolehkan
        var allowedDomainRegex = new RegExp(&quot;^https?://(www\\.)?ikode\\.shop.*$&quot;);
        if (!allowedDomainRegex.test(window.location.href)) {
            console.error(&quot;Unauthorized access. Redirecting...&quot;);
            
            window.location.href = &quot;https://www.ikode.shop&quot;;
        }
    })();

    
    function getParameterByName(name) {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    
    function decodeText() {
        var encodedInput = document.getElementById(&quot;encodedInput&quot;).value;
        var decodedOutput = document.getElementById(&quot;decodedOutput&quot;);
        var thankYouMessage = document.getElementById(&quot;thankYouMessage&quot;);

        
        if (encodedData[encodedInput]) {
            var originalText = encodedData[encodedInput];
            decodedOutput.href = originalText;
            decodedOutput.textContent = originalText;
            thankYouMessage.style.display = &quot;block&quot;; 
            
            
            setTimeout(function() {
                window.open(originalText, &#39;_blank&#39;);
            }, 3000);
        } else {
            decodedOutput.href = &quot;#&quot;;
            decodedOutput.textContent = &quot;Teks tidak dapat didekode.&quot;;
        }
    }

    // Objek encodedData yang berisi data enkripsi
    var encodedData = {
        &quot;STARS-248&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/str1.html&quot;,
      &quot;stars-248&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/str1.html&quot;,
        &quot;mimk-146&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/min1.html&quot;,
      &quot;MIMK-146&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/min1.html&quot;,
      &quot;MEYD-568&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/meg1.html&quot;,
      &quot;meyd-568&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/meg1.html&quot;,
      &quot;mide-730&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/SHO1.html&quot;,
      &quot;MIDE-730&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/SHO1.html&quot;,
      &quot;MIDV-614&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post.html&quot;,
      &quot;midv-614&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post.html&quot;,
      &quot;ipx-678&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/ipx-678.html&quot;,
      &quot;IPX-678&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/ipx-678.html&quot;,
      &quot;SONE-053&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/RIN1.html&quot;,
      &quot;sone-053&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/RIN1.html&quot;,
      &quot;ebwh-046&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/NAN.html&quot;,
      &quot;EBWH-046&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/NAN.html&quot;,
      &quot;IPZZ-185&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_08.html&quot;,
      &quot;ipzz-185&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_08.html&quot;,
      &quot;juq-579&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_276.html&quot;,
      &quot;JUQ-579&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_276.html&quot;,
      &quot;ROE-202&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_598.html&quot;,
      &quot;roe-202&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_598.html&quot;,
      &quot;stars-967&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_35.html&quot;,
      &quot;STARS-967&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_35.html&quot;,
      &quot;JUX-901&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_241.html&quot;,
      &quot;jux-901&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_241.html&quot;,
       &quot;dasd-875&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_804.html&quot;,
      &quot;DASD-875&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_804.html&quot;,
      &quot;WAAA-327&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/Kan1.html&quot;,
      &quot;waaa-327&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/Kan1.html&quot;,
      &quot;rbd-704&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/RIN1_01989340365.html&quot;,
      &quot;RBD-704&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/RIN1_01989340365.html&quot;,
      &quot;HMN-144&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/jul1.html&quot;,
      &quot;hmn-144&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/jul1.html&quot;,
       &quot;stars-895&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_09.html&quot;,
      &quot;STARS-895&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_09.html&quot;,
      &quot;SSIS-360&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_326.html&quot;,
      &quot;ssis-360&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_326.html&quot;,
      &quot;mmik-056&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_521.html&quot;,
      &quot;MMIK-056&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_521.html&quot;,
      &quot;FMDL-008&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/MEI1.html&quot;,
      &quot;fmdl-008&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/MEI1.html&quot;,
       &quot;miaa-625&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_12.html&quot;,
      &quot;MIAA-625&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_12.html&quot;,
      &quot;PPPE-096&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_720.html&quot;,
      &quot;pppe-096&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_720.html&quot;,
      &quot;juq-623&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_440.html&quot;,
      &quot;JUQ-623&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_440.html&quot;,
      &quot;BBAN-462&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_14.html&quot;,
      &quot;bban-462&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_14.html&quot;,
       &quot;waaa-351&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_119.html&quot;,
      &quot;WAAA-351&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_119.html&quot;,
      &quot;CAWD-507&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_634.html&quot;,
      &quot;cawd-507&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_634.html&quot;,
      &quot;vec-530&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_518.html&quot;,
      &quot;VEC-530&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_518.html&quot;,
        &quot;DASS-258&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_15.html&quot;,
      &quot;dass-258&quot;: &quot;https://basejs1flexbox.blogspot.com/2024/03/blog-post_15.html&quot;,
      
    };
