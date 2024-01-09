const valueEl = document.getElementById("IP-El");
const messEl = document.getElementById("copyMess");
let ip = new XMLHttpRequest();

valueEl.addEventListener("click", function() {
    // Copy the inner text of the element to the clipboard
    var textToCopy = valueEl.textContent || valueEl.innerText;
    navigator.clipboard.writeText(textToCopy).then(function() {
        messEl.style.display = 'block';
        messEl.innerText = 'Text copied to clipboard !!';

        
    setTimeout(function() {
        messEl.style.opacity = '0';
        setTimeout(function() {
                messEl.style.display = 'none';
                messEl.style.opacity = '1'; 
            }, 3000); 
        }, 3000); 
    }).catch(function(err) {
        console.error('Unable to copy text to clipboard');
    });
});

let ipAddress = ip.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        valueEl.textContent = ip.responseText;
    }
};

ip.open("GET", "https://ipv4.icanhazip.com/");
ip.send();
