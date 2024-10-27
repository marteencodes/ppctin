    $(document).ready(function() {
        const $table = $('.mt-claimstable');
        let rows = $('.mt-entry').map(function() {
            return $(this).find('.mt-tablecell').map(function() {
                return $(this).text();
            }).get();
        }).get();

        const sortRows = (index) => {
            rows.sort((a, b) => {
                return a[index].localeCompare(b[index]);
            });
            renderTable();
        };

        const renderTable = () => {
            $table.empty();
            $table.append(`
                <div class="mt-tabheader" data-index="0">character</div>
                <div class="mt-tabheader" data-index="1">face claim</div>
                <div class="mt-tabheader" data-index="2">played by</div>
            `);
            rows.forEach(row => {
                const $entry = $('<div class="mt-entry"></div>');
                row.forEach((value, i) => {
                    const dataValue = ['name', 'face', 'player'][i];
                    $entry.append(`<div class="mt-tablecell" data-value="${dataValue}">${value}</div>`);
                });
                $table.append($entry);
            });
            attachHeaderEvents();
        };

        const attachHeaderEvents = () => {
            $('.mt-tabheader').off('click').on('click', function() {
                const index = parseInt($(this).data('index'), 10);
                sortRows(index);
            });
        };

        // Initial load, sort by Name
        rows.sort((a, b) => a[0].localeCompare(b[0]));
        renderTable();
    });
