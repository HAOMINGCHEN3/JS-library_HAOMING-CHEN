console.log("Check initializing Granim js library...");

var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'left-right', 
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                // pink to cyan
                ['#ffdee9', '#b5fffc'], 

                 // green gradients
                ['#d4fc79', '#96e6a1'],

                // blue transition
                ['#a1c4fd', '#c2e9fb']  
            ],
            transitionSpeed: 5000 
        }
    }
});
console.log("Granim js library initialized successfully.");

// chart initialization
document.addEventListener("DOMContentLoaded", function () {
    console.log("Initializing Chart.js...");

    var ctx = document.getElementById("myChart");
    if (!ctx) {
        console.error("Error: Chart element not found.");
        return;
    }

    var myChart = new Chart(ctx.getContext("2d"), {
        type: "bar",
        data: {
            labels: ["Wrangler", "Jeep", "Discovery", "Chevrolet", "Cadillac", "F1"],
            datasets: [{
                label: "Customer Reviews",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    console.log("Chart initialized successfully.");

    // reload the chart when window inspect resizes
    function reloadChart() {
        console.log("Window resized and reloading chart...");
        // refresh
        window.location.reload();
    }

    // listen for window resize event
    window.addEventListener("resize", function() {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(reloadChart, 100); 
    });
});

// masonry grid layout
document.addEventListener("DOMContentLoaded", function () {
    console.log("Initializing masonry js library...");

    var grid = document.querySelector('.grid');
    if (!grid) {
        console.error("Error: Grid element not found.");
        return;
    }

    imagesLoaded(grid, function () {
        var msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            gutter: 10
        });

        // Force masonry img re-layout after img loaded
        msnry.layout();
        console.log("Masonry js library layout applied successfully.");
    });
});

// map initialization
document.addEventListener("DOMContentLoaded", function () {
    console.log("Initializing Leaflet js map...");

    var mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error("Error: Map element not found.");
        return;
    }

    var map = L.map('map').setView([43.5890, -79.6441], 12); // Mississauga

    // add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // add a local marker file
    var customIcon = L.icon({
        iconUrl: 'assets/images/marker-icon.png', // icon path
        iconSize: [25, 41], // marker size
        iconAnchor: [12, 41], 
        popupAnchor: [1, -34], 
        shadowUrl: 'assets/images/marker-shadow.png', 
        shadowSize: [41, 41] 
    });

    var marker = L.marker([43.5890, -79.6441], { icon: customIcon }).addTo(map)
        .bindPopup("<b>We are in Mississauga!</b><br>Find us here!")
        .openPopup();

    console.log("map initialized successfully.");
});
