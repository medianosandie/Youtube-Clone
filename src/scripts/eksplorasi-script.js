
const firstElement = document.querySelector('#first-section');

const firstElementContents = [
    {
        nama : 'trending' 
    },
    {
        nama : 'musik' 
    },
    {
        nama : 'film' 
    },
    {
        nama : 'game' 
    },
    {
        nama : 'berita' 
    },
    {
        nama : 'olahraga' 
    }
];

for (let i = 0; i < firstElementContents.length; i++) {
    firstElement.innerHTML += `
        <div class="first-element-contents">
            <div></div>
            <h4>${firstElementContents[i].nama}</h4>
        </div>
    `;
}