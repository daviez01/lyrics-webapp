const genius = new Genius;

const ui = new Ui;

const searchSongs = document.getElementById('search-songs');
const display = document.getElementById('display');

searchSongs.addEventListener('keyup', (e) => {

    const userText = e.target.value;

    if(userText !== ''){
        display.classList.add('active')
        genius.getSongs(userText)
        .then(data => {
            ui.displayResponse(data.response.hits);
        })
    } else {
        // clear profile
        display.classList.remove('active')
        ui.clearProfile(); 
    }
})