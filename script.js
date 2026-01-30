// Restaurant data - streamlined format focused on dishes
const restaurants = [
    // Connecticut
    {
        name: "Morning Glory Caffe",
        location: "Hartford, Connecticut",
        coordinates: [41.7658, -72.6734],
        dish: "One dish off menu",
        rating: 4,
        notes: ""
    },
    {
        name: "Taco Tabuca",
        location: "Hartford, Connecticut",
        coordinates: [41.7658, -72.6734],
        dish: "Chicken Taco",
        rating: 4,
        notes: ""
    },
    
    // Rochester, Minnesota
    {
        name: "Thai Pop",
        location: "Rochester, Minnesota",
        coordinates: [44.0121, -92.4802],
        dish: "Khao Soi",
        rating: 5,
        notes: ""
    },
    {
        name: "Lumi",
        location: "Rochester, Minnesota",
        coordinates: [44.0234, -92.4643],
        dish: "Lumi Special Kabab",
        rating: 5,
        notes: ""
    },
    {
        name: "Pasquale's Pizza",
        location: "Rochester, Minnesota",
        coordinates: [44.0234, -92.4601],
        dish: "Student Deal - $5",
        rating: 4,
        notes: ""
    },
    {
        name: "Otori Sushi",
        location: "Rochester, Minnesota",
        coordinates: [44.0221, -92.4699],
        dish: "Dragon Roll & Spicy Korean Chicken",
        rating: 5,
        notes: ""
    },
    {
        name: "Ichi Tokyo",
        location: "Rochester, Minnesota",
        coordinates: [44.0198, -92.4788],
        dish: "Spicy Shrimp Roll",
        rating: 4,
        notes: ""
    },
    {
        name: "Chick-fil-A",
        location: "Rochester, Minnesota",
        coordinates: [44.0156, -92.4712],
        dish: "Spicy Chicken Deluxe (no pickles)",
        rating: 4,
        notes: ""
    },
    {
        name: "Chester's",
        location: "Rochester, Minnesota",
        coordinates: [44.0245, -92.4623],
        dish: "Lobster Mac n Cheese",
        rating: 5,
        notes: ""
    },
    {
        name: "Our Paladar",
        location: "Rochester, Minnesota",
        coordinates: [44.0178, -92.4655],
        dish: "Steak & Yuca Fries",
        rating: 5,
        notes: ""
    },
    {
        name: "Five West",
        location: "Rochester, Minnesota",
        coordinates: [44.0212, -92.4689],
        dish: "Shrimp Tacos",
        rating: 4,
        notes: ""
    },
    {
        name: "Terza",
        location: "Rochester, Minnesota",
        coordinates: [44.0223, -92.4677],
        dish: "Chocolate Torte",
        rating: 5,
        notes: ""
    },
    {
        name: "Old Brick House",
        location: "Rochester, Minnesota",
        coordinates: [44.0189, -92.4701],
        dish: "Mac n Cheese",
        rating: 4,
        notes: ""
    },
    {
        name: "Forager",
        location: "Rochester, Minnesota",
        coordinates: [44.0267, -92.4711],
        dish: "Fuego Burger",
        rating: 5,
        notes: ""
    },
    {
        name: "Crave",
        location: "Rochester, Minnesota",
        coordinates: [44.0145, -92.4688],
        dish: "Godzilla Roll",
        rating: 4,
        notes: ""
    },
    {
        name: "Benedict's",
        location: "Rochester, Minnesota",
        coordinates: [44.0256, -92.4634],
        dish: "Turkey Lettuce Tomato Sandwich & Hashbrowns",
        rating: 4,
        notes: ""
    },
    {
        name: "Bebap Korean Eats",
        location: "Rochester, Minnesota",
        coordinates: [44.0201, -92.4722],
        dish: "Kimchi Fried Rice",
        rating: 5,
        notes: ""
    },
    {
        name: "Sorrelina's",
        location: "Rochester, Minnesota",
        coordinates: [44.0233, -92.4655],
        dish: "Chicken Alfredo",
        rating: 4,
        notes: ""
    },
    {
        name: "Pittsburgh Blue",
        location: "Rochester, Minnesota",
        coordinates: [44.0211, -92.4744],
        dish: "Cowboy Steak",
        rating: 5,
        notes: ""
    },
    {
        name: "Eddie's Rey de la Birria",
        location: "Rochester, Minnesota",
        coordinates: [44.0167, -92.4801],
        dish: "Birria Tacos",
        rating: 5,
        notes: ""
    },
    {
        name: "Opa Opa",
        location: "Rochester, Minnesota",
        coordinates: [44.0243, -92.4691],
        dish: "Gyro Pita",
        rating: 4,
        notes: ""
    },
    {
        name: "Los Arcos",
        location: "Rochester, Minnesota",
        coordinates: [44.0134, -92.4766],
        dish: "Quesadilla Pollo",
        rating: 4,
        notes: ""
    },
    {
        name: "Napa",
        location: "Rochester, Minnesota",
        coordinates: [44.0278, -92.4633],
        dish: "Chicken Pita",
        rating: 4,
        notes: ""
    },
    {
        name: "Biagio's Bistro",
        location: "Rochester, Minnesota",
        coordinates: [44.0245, -92.4688],
        dish: "Pesto Pasta",
        rating: 4,
        notes: ""
    },
    
    // Ohio
    {
        name: "Skyline Chili",
        location: "Cincinnati, Ohio",
        coordinates: [39.1031, -84.5120],
        dish: "Chili Cheese Coney Sandwich",
        rating: 4,
        notes: ""
    },
    {
        name: "Graeter's Ice Cream",
        location: "Cincinnati, Ohio",
        coordinates: [39.1031, -84.5120],
        dish: "Black Raspberry Chip",
        rating: 5,
        notes: ""
    },
    
    // Madison, Wisconsin
    {
        name: "The Harvey House",
        location: "Madison, Wisconsin",
        coordinates: [43.0731, -89.4012],
        dish: "Ribeye",
        rating: 4,
        notes: ""
    },
    {
        name: "Eno Vino",
        location: "Madison, Wisconsin",
        coordinates: [43.0758, -89.3838],
        dish: "Annatto Pork Tacos",
        rating: 4,
        notes: ""
    },
    {
        name: "Heritage Tavern",
        location: "Madison, Wisconsin",
        coordinates: [43.0789, -89.3801],
        dish: "Lobster Scramble",
        rating: 4,
        notes: ""
    },
    {
        name: "Naples 15",
        location: "Madison, Wisconsin",
        coordinates: [43.0722, -89.3995],
        dish: "Margherita Pizza",
        rating: 5,
        notes: ""
    },
    {
        name: "Lucille",
        location: "Madison, Wisconsin",
        coordinates: [43.0745, -89.3912],
        dish: "Hot Honey Pepperoni Pizza",
        rating: 4,
        notes: ""
    },
    {
        name: "Bassett Street Brunch Club",
        location: "Madison, Wisconsin",
        coordinates: [43.0710, -89.3988],
        dish: "Blueberry Pancakes & Bacon",
        rating: 4,
        notes: ""
    },
    
    // Chicago
    {
        name: "Sabri Nihari",
        location: "Chicago, Illinois",
        coordinates: [41.8781, -87.6298],
        dish: "Karahi Chicken",
        rating: 4,
        notes: ""
    },
    {
        name: "Frontera Grill",
        location: "Chicago, Illinois",
        coordinates: [41.8905, -87.6282],
        dish: "Taco Arabes",
        rating: 4,
        notes: ""
    },
    
    // Florida
    {
        name: "The Edge Seafood",
        location: "Destin, Florida",
        coordinates: [30.3935, -86.4958],
        dish: "Classic Fish Sandwich",
        rating: 4,
        notes: ""
    },
    {
        name: "The Harbor Tavern",
        location: "Destin, Florida",
        coordinates: [30.3935, -86.4958],
        dish: "Fish and Chips",
        rating: 4,
        notes: ""
    },
    {
        name: "Kabooki Sushi",
        location: "Orlando, Florida",
        coordinates: [28.5383, -81.3792],
        dish: "Blue Fin Nigiri",
        rating: 4,
        notes: ""
    },
    
    // Mexico
    {
        name: "Ilios Greek Restaurant",
        location: "Cancun, Mexico",
        coordinates: [21.1619, -86.8515],
        dish: "Kebab Short Rib Y Cerdo",
        rating: 4,
        notes: ""
    },
    
    // Tennessee
    {
        name: "Cherokee Grill and Steakhouse",
        location: "Smoky Mountains, Tennessee",
        coordinates: [35.7143, -83.5102],
        dish: "Blue Cheese Sirloin",
        rating: 4,
        notes: ""
    },
    
    // Australia
    {
        name: "Mr. Wong",
        location: "Sydney, Australia",
        coordinates: [-33.8688, 151.2093],
        dish: "King Crab Fried Rice",
        rating: 5,
        notes: "",
        special: true
    },
    
    // London
    {
        name: "The Black Lamb",
        location: "London, United Kingdom",
        coordinates: [51.5074, -0.1278],
        dish: "Pork Tenderloin",
        rating: 4,
        notes: ""
    },
    
    // San Francisco
    {
        name: "Kokkari Estiatorio",
        location: "San Francisco, California",
        coordinates: [37.7946, -122.4014],
        dish: "Prime Rib",
        rating: 4,
        notes: ""
    },
    {
        name: "Pabu Izakaya",
        location: "San Francisco, California",
        coordinates: [37.7908, -122.3998],
        dish: "Bluefin Tuna",
        rating: 4,
        notes: ""
    },
    {
        name: "Rue",
        location: "San Francisco, California",
        coordinates: [37.7749, -122.4194],
        dish: "Butter Chicken",
        rating: 4,
        notes: ""
    },
    
    // Berkeley
    {
        name: "Artichoke's Pizza",
        location: "Berkeley, California",
        coordinates: [37.8715, -122.2730],
        dish: "Pepperoni Slice",
        rating: 4,
        notes: ""
    },
    {
        name: "Taco Sinaloa",
        location: "Berkeley, California",
        coordinates: [37.8688, -122.2585],
        dish: "Chicken Quesadilla",
        rating: 4,
        notes: ""
    },
    {
        name: "Asaka Sushi Bar",
        location: "Berkeley, California",
        coordinates: [37.8703, -122.2698],
        dish: "Superman Roll",
        rating: 4,
        notes: ""
    },
    
    // Los Angeles
    {
        name: "Catch LA",
        location: "Los Angeles, California",
        coordinates: [34.0522, -118.2437],
        dish: "Crispy Rice Wagyu Roll",
        rating: 5,
        notes: ""
    },
    {
        name: "Citrus",
        location: "Los Angeles, California",
        coordinates: [34.0689, -118.3742],
        dish: "A5 Wagyu Steak",
        rating: 5,
        notes: ""
    },
    
    // New York
    {
        name: "Jongro BBQ",
        location: "New York, New York",
        coordinates: [40.7589, -73.9851],
        dish: "Korean BBQ",
        rating: 5,
        notes: ""
    },
    
    // India
    {
        name: "Oh! Calcutta",
        location: "Kolkata, India",
        coordinates: [22.5726, 88.3639],
        dish: "Bengali cuisine",
        rating: 5,
        notes: ""
    },
    {
        name: "Kookie Jar",
        location: "Kolkata, India",
        coordinates: [22.5744, 88.3629],
        dish: "Pyramid Pastrie",
        rating: 4,
        notes: ""
    }
];

// Global variables
let map;
let markers = [];
let markerCluster;
let clusteringEnabled = true;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    initTabs();
    loadDescription();
    setupEventListeners();
});

// Map initialization
function initMap() {
    map = L.map('map', {
        zoomControl: true,
        scrollWheelZoom: true,
        minZoom: 2,
        maxZoom: 18
    });

    // Subtle map style
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    markerCluster = L.markerClusterGroup({
        maxClusterRadius: 60,
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false,
        zoomToBoundsOnClick: true
    });

    addRestaurantMarkers();
    fitMapToBounds();
    updateStats();
}

function addRestaurantMarkers() {
    restaurants.forEach((restaurant, index) => {
        // Special marker for Mr. Wong
        const markerHtml = restaurant.special 
            ? '<div class="marker-dot marker-special"></div>'
            : '<div class="marker-dot"></div>';
        
        const markerIcon = L.divIcon({
            className: 'custom-marker',
            html: markerHtml,
            iconSize: restaurant.special ? [16, 16] : [12, 12],
            iconAnchor: restaurant.special ? [8, 8] : [6, 6],
            popupAnchor: [0, restaurant.special ? -8 : -6]
        });

        const marker = L.marker(restaurant.coordinates, { 
            icon: markerIcon,
            riseOnHover: true
        });

        const popupContent = createPopupContent(restaurant);
        marker.bindPopup(popupContent, {
            maxWidth: 280,
            className: 'custom-popup'
        });

        marker.on('click', () => {
            openInfoPanel(restaurant);
        });

        markerCluster.addLayer(marker);
        markers.push({ marker, restaurant, index });
    });

    map.addLayer(markerCluster);
}

function createPopupContent(restaurant) {
    const stars = '★'.repeat(restaurant.rating) + '☆'.repeat(5 - restaurant.rating);
    
    return `
        <div class="popup-content">
            <div class="popup-name">${restaurant.name}</div>
            <div class="popup-location">${restaurant.location}</div>
            <div class="popup-dish">${restaurant.dish}</div>
            <div class="popup-rating">${stars}</div>
            <button class="popup-btn" onclick="openInfoPanel('${restaurant.name}')">
                View
            </button>
        </div>
    `;
}

function openInfoPanel(restaurantName) {
    const restaurant = typeof restaurantName === 'string' 
        ? restaurants.find(r => r.name === restaurantName)
        : restaurantName;
        
    if (!restaurant) return;
    
    const panel = document.getElementById('info-panel');
    const content = document.getElementById('info-content');
    
    const stars = '★'.repeat(restaurant.rating) + '☆'.repeat(5 - restaurant.rating);
    
    content.innerHTML = `
        <div class="info-header">
            <h2 class="info-name">${restaurant.name}</h2>
            <div class="info-location">${restaurant.location}</div>
        </div>
        <div class="info-meta">
            <div class="info-rating">${stars}</div>
        </div>
        <div class="info-dish">${restaurant.dish}</div>
        ${restaurant.notes ? `<div class="info-notes">${restaurant.notes}</div>` : ''}
    `;
    
    panel.classList.add('active');
    
    map.setView(restaurant.coordinates, 13, {
        animate: true,
        duration: 0.5
    });
}

function closeInfoPanel() {
    document.getElementById('info-panel').classList.remove('active');
}

function fitMapToBounds() {
    if (restaurants.length === 0) return;
    const bounds = L.latLngBounds(restaurants.map(r => r.coordinates));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
}

function toggleClustering() {
    if (clusteringEnabled) {
        markerCluster.clearLayers();
        markers.forEach(({ marker }) => marker.addTo(map));
        clusteringEnabled = false;
    } else {
        markers.forEach(({ marker }) => map.removeLayer(marker));
        markers.forEach(({ marker }) => markerCluster.addLayer(marker));
        clusteringEnabled = true;
    }
}

function updateStats() {
    // Calculate total miles traveled between all restaurants
    let totalMiles = 0;
    
    for (let i = 0; i < restaurants.length - 1; i++) {
        const distance = calculateDistance(
            restaurants[i].coordinates[0],
            restaurants[i].coordinates[1],
            restaurants[i + 1].coordinates[0],
            restaurants[i + 1].coordinates[1]
        );
        totalMiles += distance;
    }
    
    animateCounter('total-miles', Math.round(totalMiles));
}

// Haversine formula to calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth's radius in miles
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(degrees) {
    return degrees * (Math.PI / 180);
}

function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 1000;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
        step++;
        current = Math.min(Math.floor(increment * step), target);
        element.textContent = current;
        
        if (step >= steps) {
            clearInterval(timer);
            element.textContent = target;
        }
    }, duration / steps);
}

// Tab functionality
function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
            
            // Invalidate map size when switching to map tab
            if (targetTab === 'map') {
                setTimeout(() => map.invalidateSize(), 100);
            }
        });
    });
}

// Description saving
function loadDescription() {
    const saved = localStorage.getItem('foundational-foods-description');
    if (saved) {
        document.getElementById('about-description').innerHTML = saved;
    }
}

function saveDescription() {
    const content = document.getElementById('about-description').innerHTML;
    localStorage.setItem('foundational-foods-description', content);
    
    // Visual feedback
    const btn = document.getElementById('save-description');
    const originalText = btn.textContent;
    btn.textContent = 'Saved!';
    setTimeout(() => {
        btn.textContent = originalText;
    }, 1500);
}

// Event listeners
function setupEventListeners() {
    document.getElementById('fit-bounds-btn').addEventListener('click', fitMapToBounds);
    document.getElementById('cluster-toggle').addEventListener('click', toggleClustering);
    document.getElementById('close-panel').addEventListener('click', closeInfoPanel);
    document.getElementById('save-description').addEventListener('click', saveDescription);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeInfoPanel();
        if (e.key === 'f' || e.key === 'F') fitMapToBounds();
        if (e.key === 'c' || e.key === 'C') toggleClustering();
    });
}

// Make globally accessible
window.openInfoPanel = openInfoPanel;
