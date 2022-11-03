import app from './firebase.js'

import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const db = getFirestore(app)
const asHist = [0]
const outerHist = [0]

function showConfete(idJogo) {
    const element = document.getElementById(idJogo)
    party.confetti(element)
}

function updateScore(idJogo, as, outer) {
    const element = document.getElementById(idJogo)
    element.innerText = `${as} x ${outer}`
    asHist.unshift(as)
    outerHist.unshift(outer)
}

function golAS() {
    // const audio = new Audio("/DIO - eventos/DIO - evento da copa 2022/copa-js/asserts/audio/gol.mp3")
    // audio.muted = true;
    // audio.play()
    const audio = new Audio();
    audio.src = 'asserts/audio/gol.mp3';
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


onSnapshot(doc(db, "matches", "jg-01"), (doc) => {
    const { as, outer } = doc.data()

    updateScore('jg-01', as, outer)

    if (asHist[0] > asHist[1]) {
        console.log('Entrou')
        showConfete('jg-01')
        golAS()
    }

    if (outerHist[0] > outerHist[1]) {
        console.log('Adão ta putoooo')
        golAdversario()
    }
});