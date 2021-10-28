
const comments = document.querySelector('.comments');

const comment = `
    <div class="comment">
        <div class="creator-avatar-container"></div>
        <div class="right-content">
            <h3>Rizkyka Mediano Sandie</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus totam aut temporibus adipisci fugiat labore sit cumque repellat. Quia est assumenda iusto laboriosam sunt, iure numquam! Soluta dolores est sunt!</p>
            <h5>
                732 likes | 92 dislikes
            </h5>
            <h5>
                lihat 42 balasan
            </h5>
        </div>
    </div>
`;

for (let i = 0; i < 5; i++) {
    comments.innerHTML += comment
}

const el2 = document.querySelector('.el2');

const rightVideo = `
    <div class="right-video">
        <div class="thumbnail"></div>
        <div class="video-description">
            <h3>judul video Lorem ipsum dolor sit amet.</h3>
            <h5>nama channel</h5>
            <h5>2,3 jt x ditonton</h5>
            <h5>2 minggu lalu</h5>
        </div>
    </div>
`;

for (let i = 0; i < 8; i++) {
    el2.innerHTML += rightVideo;
}

const header = document.querySelector('header');

const headerContent = `
    <nav>
        <section class="left-section">
            <div id="hamburger-button" class="hamburger-button icon-container">
                <img src="./assets/hamburger.svg" alt="">
            </div>
            <div class="logo icon-container">
                <h1>Youtube</h1>
                <img src="./assets/YoutubeLogo.svg" alt="">
            </div>
        </section>
        <section class="center-section">
            <input type="text">
            <div class="search-icon icon-container"></div>
            <div class="mic-icon icon-container">
                <img src="./assets/Microphone.svg" alt="">
            </div>
        </section>
        <section class="right-section">
            <div class="create-icon icon-container"></div>
            <div class="youtube-apps icon-container">
                <img src="./assets/DotsNine.svg" alt="">
            </div>
            <div class="notification-icon icon-container">
                <img src="./assets/Bell.svg" alt="">
            </div>
            <div class="avatar icon-container"></div>
        </section>
    </nav>
    <div id="sidebar">
        <ul>
            <li class="icon-container main-menu">
                <div class="icon">
                    <img src="./assets/House.svg" alt="">
                </div>
                <h3>beranda</h3>
            </li>
            <li class="icon-container main-menu">
                <div class="icon">
                    <img src="./assets/Compass.svg" alt="">
                </div>
                <h3>eksplorasi</h3>
            </li>
            <li class="icon-container main-menu">
                <div class="icon"></div>
                <h3>subscription</h3>
            </li>
            <li class="icon-container main-menu">
                <div class="icon"></div>
                <h3>koleksi</h3>
            </li>
            <li class="icon-container hide">
                <div class="icon"></div>
                <h3>koleksi</h3>
            </li>
            <li class="icon-container hide">
                <div class="icon"></div>
                <h3>koleksi</h3>
            </li>
            <li class="icon-container hide">
                <div class="icon"></div>
                <h3>koleksi</h3>
            </li>
            <li class="icon-container hide">
                <div class="icon"></div>
                <h3>koleksi</h3>
            </li>
        </ul>
    </div>
`;

header.innerHTML = headerContent;

