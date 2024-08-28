document.getElementById('selection-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    let redirectUrl;

    switch (selectedUnit) {
        case 'meute':
            redirectUrl = 'home_meute.html';
            break;
        case 'troupe':
            redirectUrl = 'home_troupe.html';
            break;
        case 'grappe':
            redirectUrl = 'home_grappe.html';
            break;
        case 'route':
            redirectUrl = 'home_route.html';
            break;
    }

    window.location.href = redirectUrl;
});
