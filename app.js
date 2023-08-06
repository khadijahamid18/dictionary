// const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// const result = document.getElementById('res');
// const sound = new Audio(); // Create a new Audio object
// const btn = document.getElementById('btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     let input = document.getElementById('myInput').value;

//     fetch(`${url}${input}`)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             result.innerHTML = `
//             <div class="word">
//                 <h3>${input}</h3>
//                 <button onclick="playSound('${data[0].phonetics[1].audio}' )">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                         class="bi bi-volume-up" viewBox="0 0 16 16" id="volume">
//                         <path
//                             d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
//                         <path
//                             d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
//                         <path
//                             d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
//                     </svg>
//                 </button>
//             </div>
//             <div class="details">
//                 <p>${data[0].meanings[0].partOfSpeech}</p>
//                 <p>${data[0].phonetics[0].text}</p>
//             </div>
//             <p class="word-meaning">
//                 ${data[0].meanings[0].definitions[0].definition}
//             </p>
//             <p class="word-example">
//                 ${data[0].meanings[0].definitions[0].example || ""}
//             </p>`;
//             sound.src = `https:${data[0].phonetics[0].audio}`;
//         })
//         .catch(() => {
//             result.innerHTML = '<h3 class="error">Sorry, Couldn\'t find the word</h3>';
//         });
// });

// function playSound(audioUrl) {
//     sound.src = audioUrl;
//     sound.play();
// }



const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById('res');
const sound = new Audio();
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById('myInput').value;

    fetch(`${url}${input}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${input}</h3>
                <button onclick="playSound('${data[0].phonetics[0].audio}' || '${data[0].phonetics[1].audio}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-volume-up" viewBox="0 0 16 16" id="volume">
                        <path
                            d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                        <path
                            d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                        <path
                            d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
                    </svg>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[0].text}</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;
            sound.src = `https:${data[0].phonetics[0].audio}`;
        })
        .catch(() => {
            result.innerHTML = '<h3 class="error">Sorry, Couldn\'t find the word</h3>';
        });
});

function playSound(audioUrl) {
    sound.src = audioUrl;
    sound.play();
}



