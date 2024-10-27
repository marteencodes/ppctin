 document.addEventListener("DOMContentLoaded", function() {
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
  });
