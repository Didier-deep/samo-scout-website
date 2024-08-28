document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Récupérer les informations stockées
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Vérifier les informations
    if (email === storedEmail && password === storedPassword) {
        alert("Connexion réussie !");
        // Rediriger vers la page de sélection
        window.location.href = 'selection.html';
    } else {
        alert("Email ou mot de passe incorrect !");
    }
});
