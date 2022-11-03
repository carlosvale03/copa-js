import app from './firebase.js'
import { updateScore } from './presentation.js';
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const db = getFirestore(app)

onSnapshot(doc(db, "matches", "jg-01"), (doc) => {
    const { as, outer } = doc.data()
    updateScore('jg-01', as, outer)
});