function renderAnimations(contatinerId, animAsset, isLoop) {
    return bodymovin.loadAnimation(
        {
            container: document.getElementById(contatinerId),
            path: animAsset,
            renderer: 'svg',
            loop: isLoop,
            autoplay: isLoop,
        }
    );
}

function init(){
    renderAnimations('chat-anim-div','../assets/animations/chat_anim.json',true);
}

init();