document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu");
    const nav = document.querySelector("nav");

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("open");
            nav.classList.toggle("open");
        });
    }

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            size: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            size: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            size: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            size: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            size: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            size: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            size: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            size: 253015,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8456.jpg"
        },
        {
            templeName: "São Paulo Brazil",
            location: "São Paulo, Brazil", 
            dedicated: "1978, October, 30", 
            size: 59645,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-9671.jpg"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            size: 52800,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-57277.jpg"
        }
    ];

    function displayTemples(filteredTemples) {
        const templeContainer = document.querySelector(".temples");
        templeContainer.innerHTML = "";

        filteredTemples.forEach(temple => {
            let figure = document.createElement("figure");

            let caption = document.createElement("figcaption");
            caption.innerHTML = `
                <h3 class="temple-title">${temple.templeName}</h3>
                <p class="temple-detail"><span class="blue-text">Location:</span> ${temple.location}</p>
                <p class="temple-detail"><span class="blue-text">Dedicated:</span> ${temple.dedicated}</p>
                <p class="temple-detail"><span class="blue-text">Size:</span> ${temple.size.toLocaleString()} sq ft</p>
            `;

            let img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";

            figure.appendChild(caption);
            figure.appendChild(img);
            templeContainer.appendChild(figure);
        });
    }

    function filterTemples(filter) {
        let filteredTemples;

        switch (filter) {
            case "old":
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
                break;
            case "new":
                filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
                break;
            case "large":
                filteredTemples = temples.filter(t => t.size > 90000);
                break;
            case "small":
                filteredTemples = temples.filter(t => t.size < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    }

    document.querySelectorAll(".navigation a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const activeLink = document.querySelector(".navigation .active");
            if (activeLink) {
                activeLink.classList.remove("active");
            }

            event.target.classList.add("active");

            let filter = event.target.dataset.filter;
            filterTemples(filter);
        });
    });

    // Footer
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentyear').textContent = `${currentYear} | Pablo Acuna | Temples`;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

    displayTemples(temples);
});
