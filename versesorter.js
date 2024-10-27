window.addEventListener('load', function() {
    const entriesContainer = document.querySelector('.mt-claimstable');
    const entries = Array.from(entriesContainer.querySelectorAll('.mt-entry'));

    // Sort entries by name (data-value="name")
    entries.sort((a, b) => {
        const nameA = a.querySelector('[data-value="name"]').textContent.toLowerCase();
        const nameB = b.querySelector('[data-value="name"]').textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Use a DocumentFragment to hold the sorted entries
    const fragment = document.createDocumentFragment();
    entries.forEach(entry => fragment.appendChild(entry));

    // Append the sorted entries to the container
    // This will preserve any existing content (like headers)
    entriesContainer.appendChild(fragment);
});
