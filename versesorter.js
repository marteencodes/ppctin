window.addEventListener('load', function() {
    const entriesContainer = document.querySelector('.mt-claimstable');
    const entries = Array.from(entriesContainer.querySelectorAll('.mt-entry'));

    // Sort entries by name (data-value="name")
    entries.sort((a, b) => {
        const nameA = a.querySelector('[data-value="name"]').textContent.toLowerCase();
        const nameB = b.querySelector('[data-value="name"]').textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Clear the container and append sorted entries
    entriesContainer.innerHTML = '';
    entries.forEach(entry => entriesContainer.appendChild(entry));
});
