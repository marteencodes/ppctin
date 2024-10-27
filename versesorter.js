document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.mt-claimstable');
    const rows = Array.from(table.querySelectorAll('.mt-entry')).map(entry => {
        const cells = entry.querySelectorAll('.mt-tablecell');
        return Array.from(cells).map(cell => cell.textContent);
    });

    const sortRows = (index) => {
        rows.sort((a, b) => {
            if (a[index] < b[index]) return -1;
            if (a[index] > b[index]) return 1;
            return 0;
        });
        renderTable();
    };

    const renderTable = () => {
        table.innerHTML = '';
        table.innerHTML += `
            <div class="mt-tabheader" data-index="0">character</div>
            <div class="mt-tabheader" data-index="1">face claim</div>
            <div class="mt-tabheader" data-index="2">played by</div>
        `;
        rows.forEach(row => {
            const entry = document.createElement('div');
            entry.className = 'mt-entry';
            row.forEach((value, i) => {
                const dataValue = ['name', 'face', 'player'][i];
                entry.innerHTML += `<div class="mt-cell" data-value="${dataValue}">${value}</div>`;
            });
            table.appendChild(entry);
        });
        attachHeaderEvents();
    };

    const attachHeaderEvents = () => {
        const headers = table.querySelectorAll('.mt-tabheader');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const index = parseInt(header.getAttribute('data-index'), 10);
                sortRows(index);
            });
        });
    };

    // Initial load, sort by Name
    rows.sort((a, b) => a[0].localeCompare(b[0]));
    renderTable();
});
