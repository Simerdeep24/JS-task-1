let head = document.getElementById('heading');
let sub = document.getElementById('sub-heading');
let btn = document.getElementById('btn');
let cnt = document.getElementById('container');
let card = document.getElementById('card');
let pli = document.getElementsByClassName('hero-powers');
let l1 = document.getElementById('li1');
let l2 = document.getElementById('li2');
let l3 = document.getElementById('li3');
let realName = document.getElementById('realName');
let affiliation = document.getElementById('affiliation');
let origin = document.getElementById('origin');

let heroes = [
    {
        name: "Iron Man",
        powers: ["Powered Armor Suit", "Genius-Level Intellect", "Missiles", "Energy Repulsors"],
        traits: ["Arrogant", "Charismatic", "Strategic"],
        realName: "Tony Stark",
        affiliation: "Avengers",
        origin: "Marvel",
        bg: "https://w0.peakpx.com/wallpaper/441/193/HD-wallpaper-iron-man-infinity-gauntlet-iron-man-superheroes-artwork-avengers-endgame.jpg",

    },
    {
        name: "Spider-Man",
        powers: ["Wall-Crawling", "Spider-Sense", "Super Agility", "Web-Shooting"],
        traits: ["Responsible", "Funny", "Determined"],
        realName: "Peter Parker",
        affiliation: "Avengers",
        origin: "Marvel",
        bg: "https://w0.peakpx.com/wallpaper/104/94/HD-wallpaper-spiderman-spiderman-movies.jpg",

    },
    {
        name: "Batman",
        powers: ["Peak Human Condition", "Master Detective", "Advanced Gadgets", "Martial Arts"],
        traits: ["Brooding", "Disciplined", "Strategic Thinker"],
        realName: "Bruce Wayne",
        affiliation: "Justice League",
        origin: "DC",
        bg: "https://w0.peakpx.com/wallpaper/581/659/HD-wallpaper-batman-is-sitting-on-throne-batman.jpg",

    },
    {
        name: "Superman",
        powers: ["Super Strength", "Flight", "Heat Vision", "X-Ray Vision", "Super Speed"],
        traits: ["Moral", "Noble", "Selfless"],
        realName: "Clark Kent",
        affiliation: "Justice League",
        origin: "DC",
        bg: "https://w0.peakpx.com/wallpaper/316/963/HD-wallpaper-superman-henry-superman-superheroes-artwork-deviantart.jpg",

    },
    {
        name: "Thor",
        powers: ["Godlike Strength", "Lightning Manipulation", "Flight (via Mjolnir)", "Immortality"],
        traits: ["Proud", "Honorable", "Brave"],
        realName: "Thor Odinson",
        affiliation: "Avengers",
        origin: "Marvel",
        bg: "https://w0.peakpx.com/wallpaper/297/939/HD-wallpaper-thor-ragnarok-digital-artwork-thor-thor-ragnarok-digital-art.jpg",

    },]



function renderList(listId, items) {
    const ul = document.getElementById(listId);
    ul.innerHTML = " ";

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}


btn.addEventListener('click', function () {
    let a = Math.floor(Math.random() * heroes.length);
    head.innerHTML = `You are ${heroes[a].name}`;
    realName.innerHTML = `Real Name: ${heroes[a].realName}`;
    affiliation.innerHTML = `Affiliation: ${heroes[a].affiliation}`;
    origin.innerHTML = `Origin: ${heroes[a].origin}`;
    sub.style = "display:none"
    cnt.style = 'display:block';
    cnt.style.backgroundImage = `url(${heroes[a].bg})`;
    console.log(`${heroes[a].bp}`);
    card.style = 'display:block';
    renderList("heroPowers", heroes[a].powers);
    renderList("heroTraits", heroes[a].traits);
});

