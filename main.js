onload = () => {
    document.body.classList.remove("container");

    const audio = document.getElementById("bg-music");
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.classList.add('pulsing'); 

        } else {
            audio.pause();
            playButton.classList.remove('pulsing'); 

        }
    });

    function hideFlowersAndShowNote() {
        audio.play();
        const flowers = document.querySelector('.flowers');
        if (flowers) {
            flowers.style.display = 'none';

            const Note = document.createElement('div');
            Note.innerText = "Happy Valentine's Day  Sarah";
            Note.style.fontSize = '65px';
            Note.style.fontFamily = 'Tangerine';
            Note.style.color = 'white';
            Note.style.textAlign = 'center';
            Note.style.marginTop = '20px';
            Note.style.position = 'fixed';
            Note.style.top = '20%';
            Note.style.left = '50%';
            Note.style.transform = 'translate(-50%, -50%)';
            Note.style.zIndex = '1000';

            const Note2 = document.createElement('div');
            Note2.innerText = "this you can also take as a reminder of wether we talk less or more \n you're never less important to me, i always think of you.";
            Note2.style.fontSize = '45px';
            Note2.style.fontFamily = 'Tangerine';
            Note2.style.color = 'white';
            Note2.style.textAlign = 'center';
            Note2.style.marginTop = '20px';
            Note2.style.position = 'fixed';
            Note2.style.top = '50%';
            Note2.style.left = '50%';
            Note2.style.transform = 'translate(-50%, -50%)';
            Note2.style.zIndex = '1000';

            const Note3 = document.createElement('div');
            Note3.innerText = "Click on the heart -------->>";
            Note3.style.fontSize = '35px';
            Note3.style.fontFamily = 'Tangerine';
            Note3.style.color = 'white';
            Note3.style.textAlign = 'center';
            Note3.style.marginTop = '20px';
            Note3.style.position = 'fixed';
            Note3.style.top = '80%';
            Note3.style.left = '50%';
            Note3.style.transform = 'translate(-50%, -50%)';
            Note3.style.zIndex = '1000';

            document.body.appendChild(Note);
            document.body.appendChild(Note2);
            document.body.appendChild(Note3);
        }
    }

    setTimeout(hideFlowersAndShowNote, 8000);
};


//Note.innerText = "One might argue that we don't talk that much, but You are the closest I will ever come to magic.";