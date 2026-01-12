const songs = [
    { title: "urs", artist: "NIKI", art: "urs.jpg" },
    { title: "I Like U", artist: "NIKI", art: "ilikeu.jpg" },
    { title: "fallingforyou", artist: "The 1975", art: "falling.jpg" },
    { title: "Everything Has Changed", artist: "Taylor Swift", art: "taylor.jpg" },
    { title: "Jupiter", artist: "Flower Face", art: "jupiter.jpg" },
    { title: "I Couldn't Be More in Love", artist: "The 1975", art: "inlove.jpg" }
];

let index = 0;

const art = document.getElementById('album-art');
const title = document.getElementById('song-title');
const artist = document.getElementById('artist-name');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open-playlist');

openBtn.onclick = () => overlay.style.display = 'none';

function update() {
    art.src = songs[index].art;
    title.innerText = songs[index].title;
    artist.innerText = songs[index].artist;
}

nextBtn.onclick = () => {
    index = (index + 1) % songs.length;
    update();
};

prevBtn.onclick = () => {
    index = (index - 1 + songs.length) % songs.length;
    update();
};
