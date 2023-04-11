class Ui {
    constructor () {
        this.displaySongs = document.querySelector(".display-songs");
        this.displayArtists = document.querySelector(".display-artists");
    }

    displayResponse(search) {
        console.log(search);

        let displays = '';
        let artistDisplay = '';

        for (let i = 0; i < 3; i++) {
            displays += `
            <li>
            <div class="display-list">
            <img class="artist-Img" src=${search[i].result.header_image_thumbnail_url}> 
            <div>
            <p class="song-title">${search[i].result.title}</p>
            <p class="artist-name">${search[i].result.artist_names}</p>
            </div>
            </div>
            </li>
            `;
        };

        for (let index = 0; index < 1; index++) {
            artistDisplay += `            
            <li>
            <div class="display-list">
            <img class="artist-Img" src=${search[index].result.primary_artist.image_url}> 
            <div>
            <p class="song-title">${search[index].result.primary_artist.name}</p>
            </div>
            </div>
            </li>`;
            
        }

        this.displaySongs.innerHTML = displays;
        this.displayArtists.innerHTML = artistDisplay;
    }

    clearProfile() {
        
    }
}