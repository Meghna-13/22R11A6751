document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('urlForm');
    const urlInput = document.getElementById('urlInput');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const url = urlInput.value.trim();

        if (url) {
            fetch('/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: url })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.shortenedUrl) {
                        resultDiv.innerHTML = `<p>Shortened URL: <a href="${data.shortenedUrl}" target="_blank">${data.shortenedUrl}</a></p>`;
                    } else {
                        resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
                    }
                })
                .catch(error => {
                    resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
                });
        } else {
            resultDiv.innerHTML = '<p>Please enter a valid URL.</p>';
        }
    });
});
