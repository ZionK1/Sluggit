// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Get all route links
    const routeLinks = document.querySelectorAll('nav a');

    // Add click event listeners to each link
    routeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target route ID from the link's href
            const targetRouteId = this.getAttribute('href').substring(1);

            // Hide all routes
            hideAllRoutes();

            // Show the target route
            showRoute(targetRouteId);
        });
    });

    // Function to hide all routes
    function hideAllRoutes() {
        const routes = document.querySelectorAll('.route');
        routes.forEach(route => {
            route.style.display = 'none';
        });
    }

    // Function to show a specific route
    function showRoute(routeId) {
        const targetRoute = document.getElementById(routeId);
        if (targetRoute) {
            targetRoute.style.display = 'block';
        }
    }
});
