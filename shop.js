function toggleMenu() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('active');
        }

        function closeMenu() {
            const menu = document.getElementById('menu');
            menu.classList.remove('active');
        }

        function handleOrder(event) {
            event.preventDefault();
            const nom = document.getElementById('nom').value;
            const produit = document.getElementById('produit').value;
            alert(`Merci ${nom} ! Votre commande de ${produit} a été reçue. Nous vous contacterons très bientôt pour confirmer les détails.`);
            event.target.reset();
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Fermer le menu si on clique en dehors
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('nav');
            const menu = document.getElementById('menu');
            const toggle = document.querySelector('.menu-toggle');
            
            if (!nav.contains(event.target) && menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });