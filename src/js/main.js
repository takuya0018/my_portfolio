(() => {
    
    let aniTags = document.querySelectorAll('.ani');
    
    window.addEventListener('scroll', () => {
        showBox();
    })

    const showBox = () => {
        let scroll = window.scrollY;
        let winH = window.innerHeight;

        for(let aniTag of aniTags) {
            let pos = aniTag.getBoundingClientRect().top + scroll;
            if(scroll > pos - winH) {
                aniTag.classList.add('anima-left');
            } else {
                aniTag.classList.remove('anima-left')
            }
        }
    }
})();