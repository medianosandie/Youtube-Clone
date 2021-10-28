const videoContainers = document.querySelectorAll('.video-container');

function addContent(videoContainer) {
    for(let i = 0 ; i < 10 ; i++){
        videoContainer.innerHTML += `
            <li class="video">
                <div class="image">
                    <div class="action-group">
                        <div class="action"></div>
                        <div class="action"></div>
                    </div>
                    <div class="time">12.45</div>
                </div>
                <div class="description">
                    <div class="creator-avatar-container"></div>
                    <div class="detail">
                        <h4>video title</h4>
                        <h5>creator</h5>
                        <h5>1 mx views . 1 week ago</h5>
                    </div>
                    <div class="more-option-container icon-container">
                        <img src="./assets/DotsThreeVertical.svg" alt="">
                    </div>
                </div>
            </li>
        `;
    }
}

for (let i = 0; i < videoContainers.length; i++) {
    addContent(videoContainers[i]);
}