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
      
      
    };