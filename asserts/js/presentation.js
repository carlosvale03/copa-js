const asHist = [0]
const outerHist = [0]

function showConfete(jogo) {
    party.confetti(jogo)
}

// audios
function golAS(name) {
    // const audio = new Audio("/DIO - eventos/DIO - evento da copa 2022/copa-js/asserts/audio/gol.mp3")
    // audio.muted = true;
    // audio.play()
    // const audio = new Audio();
    // audio.src = 'asserts/audio/gol.mp3';
    // audio.playbackRate = 1.5
    // // when the sound has been loaded, execute your code
    // audio.oncanplaythrough = (event) => {
    //     var playedPromise = audio.play();
    //     if (playedPromise) {
    //         playedPromise.catch((e) => {
    //             console.log(e)
    //             if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
    //                 console.log(e.name);
    //             }
    //         }).then(() => {
    //             console.log("playing sound !!!");
    //         });
    //     }
    // }


    const effect = new Audio('asserts/audio/gol.mp3')
    effect.playbackRate = 1.5
    effect.play()
}


function golAdversario() {
    // const audio = new Audio("/DIO - eventos/DIO - evento da copa 2022/copa-js/asserts/audio/gol.mp3")
    // audio.muted = true;
    // audio.play()
    const audio = new Audio();
    audio.src = 'asserts/audio/adão ta puto.ogg';
    audio.playbackRate = 1.5
    // when the sound has been loaded, execute your code
    audio.oncanplaythrough = (event) => {
        var playedPromise = audio.play();
        if (playedPromise) {
            playedPromise.catch((e) => {
                console.log(e)
                if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
                    console.log(e.name);
                }
            }).then(() => {
                console.log("playing sound !!!");
            });
        }
    }
}


// emojis
function emojiGol(){
    const emoji = document.getElementById("emoji-gol")
    emoji.classList.add("show")

    setTimeout(() => {
        emoji.classList.remove("show")
    }, 6000)
}



export function updateScore(idJogo, as, outer) {
    const element = document.getElementById(idJogo)
    element.innerText = `${as} x ${outer}`
    asHist.unshift(as)
    outerHist.unshift(outer)

    if (asHist[0] > asHist[1]) {
        console.log('Gollllll')
        showConfete(element)
        golAS("gol.mp3")
        setTimeout(() => {
            emojiGol()
        }, 500)
    } else if (outerHist[0] > outerHist[1]) {
        console.log('Adão ta putoooo')
        golAdversario()
    }
}