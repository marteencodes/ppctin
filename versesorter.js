{
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
    }

        const headers = document.querySelectorAll('.mt-tabheader');
        const entries = Array.from(document.querySelectorAll('.mt-entry'));

        headers.forEach(header => {
            header.addEventListener('click', function() {
                const index = header.getAttribute('data-index');
                const currentOrder = header.getAttribute('data-order') || 'desc';
                const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';

                // Sort entries
                const sortedEntries = entries.sort((a, b) => {
                    const aValue = a.querySelector(`.mt-tablecell[data-value="${getDataKey(index)}"]`).textContent.toLowerCase();
                    const bValue = b.querySelector(`.mt-tablecell[data-value="${getDataKey(index)}"]`).textContent.toLowerCase();

                    return newOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
                });

                // Find the parent table and replace the entries
                const table = document.querySelector('.mt-claimstable');
                // Remove existing entries
                sortedEntries.forEach(entry => {
                    table.appendChild(entry); // Append sorted entries
                });

                // Update order attribute for next click
                headers.forEach(h => h.setAttribute('data-order', '')); // Reset order for all headers
                header.setAttribute('data-order', newOrder); // Set new order for the clicked header
            });
        });
function getDataKey(index) {
            switch (index) {
                case '0': return 'name';
                case '1': return 'face';
                case '2': return 'player';
                default: return '';
            }
        }
