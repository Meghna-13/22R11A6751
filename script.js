document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const resultDiv = document.querySelector('.result');
    const errorDiv = document.querySelector('.error');
    const successDiv = document.querySelector('.success');
    const loadingDiv = document.querySelector('.loading');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Example: get input values
            const input = form.querySelector('input');
            if (!input.value.trim()) {
                errorDiv.textContent = 'Please enter a value.';
                errorDiv.classList.remove('hidden');
                successDiv.classList.add('hidden');
                resultDiv.classList.add('hidden');
                return;
            }
            errorDiv.classList.add('hidden');
            loadingDiv.textContent = 'Processing...';
            loadingDiv.classList.remove('hidden');
            setTimeout(() => {
                loadingDiv.classList.add('hidden');
                successDiv.textContent = 'Form submitted successfully!';
                successDiv.classList.remove('hidden');
                resultDiv.textContent = `You entered: ${input.value}`;
                resultDiv.classList.remove('hidden');
            }, 1000);
        });
    }
});
