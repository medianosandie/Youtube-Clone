
const scrollableMenuButtonsContainer =  document.querySelector('#scrollable-menu ul');
const videoContainer = document.querySelector('.video-container');
const videos =  document.querySelectorAll('.video');
const sidebar =  document.querySelector('#sidebar');
const hamburgerButton = document.querySelector('#hamburger-button');
const sidebarButtonsContainer = document.querySelector('#sidebar ul');
const sidebarButtons = document.querySelectorAll('#sidebar ul  li');

const normalScrollableButton = '<li class="pil-shaped">tes</li>';
const activeScrollableButton = '<li class="pil-shaped active">xcvxvxcvxcvxcvsdf</li>';

for(let i = 0 ; i < 20 ; i++){
    scrollableMenuButtonsContainer.innerHTML += i !== 3 ? normalScrollableButton : activeScrollableButton;
}

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

hamburgerButton.addEventListener('click',()=>{
    sidebar.classList.toggle(sidebar.getAttribute.class);
    sidebar.classList.add('expanded-sidebar');
    
    sidebarButtonsContainer.classList.toggle('spread-menu');

    sidebarButtons.forEach( sidebarButton => {
        if(!sidebarButton.classList.contains('main-menu')){
            sidebarButton.classList.toggle('hide');
        }
        sidebarButton.classList.toggle('flex-row');
    });
});

window.addEventListener('load', ()=>{
    if(window.innerWidth <=793){
        sidebar.classList.add('hide');
    }
    
    else if(window.innerWidth <= 1315 ){
        sidebar.classList.add('small-sidebar');
    }
    
    else{
        sidebar.classList.add('expanded-sidebar');
    }
});

window.addEventListener('resize', ()=>{
    if(window.innerWidth <=793){
        sidebar.classList.add('hide');
    }
    
    else if(window.innerWidth <= 1315 ){
        sidebar.classList.add('small-sidebar');
        sidebar.classList.remove('hide');
        sidebar.classList.remove('expanded-sidebar');
    }
    
    else{
        sidebar.classList.remove('small-sidebar');
        sidebar.classList.remove('hide');
        sidebar.classList.add('expanded-sidebar');
    }
});





