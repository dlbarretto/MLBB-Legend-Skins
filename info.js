var skins = [
    {
        "name": "Saber – Codename: Storm",
        "picture": "Assets/img/mlskn13.jpg"
    },
    {
        "name": "Miya – Modena Butterfly",
        "picture": "Assets/img/mlskn9.jpg"
    },
    {
        "name": "Gord – Conqueror",
        "picture": "Assets/img/mlskn11.jpg"
    },
    {
        "name": "Alucard – Obsidian Blade",
        "picture": "Assets/img/mlskn6.jpg"
    },
    {
        "name": "Gusion – Cosmic Gleam",
        "picture": "Assets/img/mlskn7.jpg"
    },
    {
        "name": "Valir – Infernal Blaze",
        "picture": "Assets/img/mlskn2.jpg"
    },
    {
        "name": "Franco – King of Hell",
        "picture": "Assets/img/mlskn5.jpg"
    },
    {
        "name": "Lunox – Divine Goddess",
        "picture": "Assets/img/mlskn8.jpg"
    },
    {
        "name": "Freya – Galactic Vanquisher",
        "picture": "Assets/img/mlskn4.jpg"
    },
    {
        "name": "Johnson – Sovereign of the Realms",
        "picture": "Assets/img/mlskn10.jpg"
    },
    {
        "name": "Lesley – Angelic Agent",
        "picture": "Assets/img/mlskn3.jpg"
    },
    {
        "name": "Granger – Starfall Knight",
        "picture": "Assets/img/mlskn15.jpg"
    },
    {
        "name": "Guinevere – Psion of Tomorrow",
        "picture": "Assets/img/mlskn1.jpg"
    },
    {
        "name": "Alpha – Revenant of Roses",
        "picture": "Assets/img/mlskn14.jpg"
    },
    {
        "name": "Layla – The Beacon",
        "picture": "Assets/img/mlskn12.jpg"
    }
];

var skinsRow = document.getElementById("skinsRow");
for (var i = 0; i < skins.length; i++) {
    skinsRow.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3 col-xl-custom-5 mb-4" data-aos="fade-up">
            <div class="card shadow-sm h-100 d-flex flex-column">
                <img src="${skins[i].picture}" class="card-img-top flex-grow-1" alt="${skins[i].name}">
                <div class="card-body-fixed">
                    <h6 class="card-title text-center mb-0">${skins[i].name}</h6>
                </div>
            </div>
        </div>`;
}

AOS.init({
    duration: 800,
    easing: 'ease-out-quart',
    offset: 120,
    once: true,
    mirror: false
});
