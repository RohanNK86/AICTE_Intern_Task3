const tours = [
    {
        id: 1,
        title: "Paris, France",
        images: [
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDA%3D?auto=format&fit=crop&w=400&q=80",
            "https://embracesomeplace.com/wp-content/uploads/2023/06/Seine-at-Night-3851.jpg"
        ],
        lat: 48.8566,
        lon: 2.3522
    },
    {
        id: 2,
        title: "Tokyo, Japan",
        images: [
            "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80"
        ],
        lat: 35.6762,
        lon: 139.6503
    },
    {
        id: 3,
        title: "New York, USA",
        images: [
            "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?auto=format&fit=crop&w=400&q=80"
        ],
        lat: 40.7128,
        lon: -74.0060
    },
    {
        id: 4,
        title: "New Delhi",
        images: [
            "https://www.thelalit.com/wp-content/uploads/2017/01/City-Attraction1-New-Delhi-e1493635162496-760-320.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/1f/31/qutab-minar.jpg?w=500&h=400&s=1",
            "https://www.agoda.com/wp-content/uploads/2024/07/red-fort-new-delhi-featured.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUOb3S7CDl4vgoaSMCWGZgQd7847XHLm5mA&s"
        ],
        lat: 28.6139,
        lon: 77.2090
    },
    {
        id: 5,
        title: "Karnataka",
        images: [
            "https://www.holidify.com/images/cmsuploads/compressed/800px-Anekere_lake_20200618195943.jpg",
            "https://www.holidify.com/images/bgImages/KARKALA.jpg",
            "https://www.stayvista.com/blog/wp-content/uploads/2024/06/image-53-1024x614.png",
            "https://media3.thrillophilia.com/filestore/4570cvtq7aikugebbf157gknshtg_1592663718_shutterstock_1211385658.jpg?w=753&h=450&dpr=2.0"
        ],
        lat: 12.9141,
        lon: 74.8560
    },
    {
        id: 6,
        title: "GOA",
        images: [
            "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/04/15151604/palm-beach-1-1600x900.jpeg",
            "https://assets.cntraveller.in/photos/67f6324c24bc54d15bbde012/1:1/w_3613,h_3613,c_limit/GettyImages-1263341271.jpg",
            "https://www.clubmahindra.com/blog/media/section_images/shuttersto-6d71496a31ac52b.jpg"
        ],
        lat: 15.4909,
        lon: 73.8278
    },
    {
        id: 7,
        title: "Australia",
        images: [
            "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?auto=format&fit=crop&w=400&q=80"
        ],
        lat: -33.8688,
        lon: 151.2093
    },
    {
        id: 8,
        title: "Andaman & Nicobar",
        images: [
            "https://miro.medium.com/v2/resize:fit:1400/1*71GCdeCXyEA9bxjdfigJAw.jpeg",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80"
        ],
        lat: 11.7401,
        lon: 92.6586
    },
    {
        id: 9,
        title: "Malaysia",
        images: [
            "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=400&q=80"
        ],
        lat: 3.1390,
        lon: 101.6869
    },
    {
        id: 10,
        title: "Switzerland",
        images: [
            "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=400&q=80"
        ],
        lat: 46.9481,
        lon: 7.4474
    },
    {
        id: 11,
        title: "Maldives",
        images: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=400&q=80",
            "https://images.scottdunn.com/maldives/accommodation/four-seasons-resort-maldives-at-landaa-giraavaru/8751532082025.jpg"
        ],
        lat: 3.2028,
        lon: 73.2207
    },
    {
        id: 12,
        title: "Italy",
        images: [
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=400&q=80"
        ],
        lat: 41.9028,
        lon: 12.4964
    }
];


// Track auto-play timers per tour id
const autoPlayTimers = {};

function init() {
    const container = document.getElementById('tours-container');

    tours.forEach(tour => {
        const card = document.createElement('div');
        card.className = 'tour-card';

        const carouselId = `carousel-${tour.id}`;
        const imagesHtml = tour.images
            .map(img => `<img src="${img}" alt="${tour.title}" loading="lazy">`)
            .join('');

        // Build dot indicators
        const dotsHtml = tour.images
            .map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}" onclick="goToSlide(${tour.id}, ${i})"></span>`)
            .join('');

        card.innerHTML = `
            <div class="carousel-container" id="${carouselId}">
                <div class="carousel-slide" id="slide-${tour.id}">
                    ${imagesHtml}
                </div>
                <button class="carousel-btn prev-btn" onclick="moveCarousel(${tour.id}, -1)" aria-label="Previous">&#10094;</button>
                <button class="carousel-btn next-btn" onclick="moveCarousel(${tour.id},  1)" aria-label="Next">&#10095;</button>
                <div class="carousel-dots" id="dots-${tour.id}">${dotsHtml}</div>
            </div>
            <div class="tour-info">
                <h3 class="tour-title">${tour.title}</h3>
                <div class="weather-widget" id="weather-${tour.id}">
                    <span>Loading weather...</span>
                </div>
            </div>
        `;

        container.appendChild(card);

        // State
        card.dataset.slideIndex = 0;

        // Touch / swipe support
        enableSwipe(tour.id);

        // Auto-play (pause on hover)
        startAutoPlay(tour.id);
        const carouselEl = card.querySelector('.carousel-container');
        carouselEl.addEventListener('mouseenter', () => stopAutoPlay(tour.id));
        carouselEl.addEventListener('mouseleave', () => startAutoPlay(tour.id));

        // Fetch weather
        getWeather(tour.lat, tour.lon, `weather-${tour.id}`);
    });
}

/* ---- Carousel Navigation ---- */
function goToSlide(tourId, index) {
    const slide = document.getElementById(`slide-${tourId}`);
    const card = slide.closest('.tour-card');
    const total = slide.children.length;
    const idx = (index + total) % total;

    card.dataset.slideIndex = idx;
    slide.style.transform = `translateX(-${idx * 100}%)`;
    updateDots(tourId, idx);
}

function moveCarousel(tourId, direction) {
    const slide = document.getElementById(`slide-${tourId}`);
    const card = slide.closest('.tour-card');
    const total = slide.children.length;
    const current = parseInt(card.dataset.slideIndex || 0);
    goToSlide(tourId, current + direction);
}

function updateDots(tourId, activeIndex) {
    const dotsContainer = document.getElementById(`dots-${tourId}`);
    if (!dotsContainer) return;
    Array.from(dotsContainer.children).forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
    });
}

/* ---- Auto-play ---- */
function startAutoPlay(tourId) {
    stopAutoPlay(tourId);
    autoPlayTimers[tourId] = setInterval(() => moveCarousel(tourId, 1), 3000);
}

function stopAutoPlay(tourId) {
    clearInterval(autoPlayTimers[tourId]);
}

/* ---- Touch / Swipe ---- */
function enableSwipe(tourId) {
    const container = document.getElementById(`carousel-${tourId}`);
    let startX = 0;

    container.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) moveCarousel(tourId, diff > 0 ? 1 : -1);
    }, { passive: true });
}

async function getWeather(lat, lon, elementId) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        const weather = data.current_weather;

        const el = document.getElementById(elementId);
        el.innerHTML = `
            <div class="weather-info">
                <span style="font-size: 1.2rem; font-weight: bold;">${weather.temperature}°C</span>
                <span>Wind: ${weather.windspeed} km/h</span>
            </div>`;
    } catch (error) {
        console.error("Weather fetch failed", error);
        document.getElementById(elementId).innerHTML = "Weather unavailable";
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
