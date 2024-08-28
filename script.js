// Gestion de l'inscription
document.getElementById('registration-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(email)) {
        alert("Un utilisateur avec cet email est déjà inscrit.");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert("Inscription réussie !");
    window.location.href = 'selection.html';
});

// Gestion de la connexion
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert("Connexion réussie !");
        window.location.href = 'selection.html';
    } else {
        alert("Email ou mot de passe incorrect.");
    }
});

// Gestion de la sélection
document.getElementById('selection-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedUnit = document.querySelector('input[name="unit"]:checked');
    if (selectedUnit) {
        alert(`Vous avez sélectionné : ${selectedUnit.value}`);
        // Redirection ou affichage de la page correspondant à l'unité sélectionnée
    } else {
        alert("Veuillez sélectionner une unité.");
    }
});
