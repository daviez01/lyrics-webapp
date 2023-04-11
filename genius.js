class Genius {
    constructor () {
        this.apikey = 'px2whx7Qvl67HnjaGl6N1zlmXvcIOImWhL1-10xbyJXiseQOrABvZqSSHb2vNDDn';
        // this.artiste = artiste;
    }


    async getSongs(songs) {
        const searchResponse = await fetch(`https://api.genius.com/search?q=${songs}&access_token=${this.apikey}`/*,{
            headers: {
                'Authorization': `Bearer ${this.apikey}`,
            }
    }*/);

    // const ArtistsResponse = await fetch(`https://api.genius.com/artist/${songs}&access_token=${this.apikey}`);

        const responseData = await searchResponse.json();

        return responseData 
    }
}