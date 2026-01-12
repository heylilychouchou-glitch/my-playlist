const songs = [
    { title: "urs", artist: "NIKI", art: "urs.jpg", duration: "4:16" },
    { title: "I Like U", artist: "NIKI", art: "ilikeu.jpg", duration: "3:24" },
    { title: "fallingforyou", artist: "The 1975", art: "falling.jpg", duration: "3:18" },
    { title: "Everything Has Changed", artist: "Taylor Swift", art: "taylor.jpg", duration: "4:05" },
    { title: "Jupiter", artist: "Flower Face", art: "jupiter.jpg", duration: "4:16" },
    { title: "I Couldn't Be More in Love", artist: "The 1975", art: "inlove.jpg", duration: "3:51" }
];

let index = 0;

const art = document.getElementById('album-art');
const title = document.getElementById('song-title');
const artist = document.getElementById('artist-name');
const durationText = document.getElementById('duration');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open-playlist');
const checkboxes = document.querySelectorAll('.reyna-check');

// Logic for Checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const anyChecked = Array.from(checkboxes).some(c => c.checked);
        openBtn.disabled = !anyChecked;
    });
});

openBtn.onclick = () => {
    overlay.style.display = 'none';
};

function update() {
    art.src = songs[index].art;
    title.innerText = songs[index].title;
    artist.innerText = songs[index].artist;
    durationText.innerText = songs[index].duration;
}

nextBtn.onclick = () => {
    index = (index + 1) % songs.length;
    update();
};

prevBtn.onclick = () => {
    index = (index - 1 + songs.length) % songs.length;
    update();
};

update();
