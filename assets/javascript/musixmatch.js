// Javascript for getting lyrics through musixmatch will go in this file
$('#search-button').on("click", function() {

    // Don't know what this is going to be until html is finished. Using my own search for now.        
    var searchTerm = $('#search-field').val().trim();
    

    // ---------------------- //
    // Clear Lyrics div here //
    // -------------------- //

    // Test for getting track ID
    $.ajax({
        type: "GET",
        data: {
            apikey:"424fd241877633888bbe33c4d8ce3c72",
            q: searchTerm,
            format:"jsonp",
            callback:"jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/track.search?f_lyrics_language=en&f_has_lyrics&q=",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json'   
    })
        .then(function(data) {
            console.log(data);
            for(let i = 0; i<10; i++){
                console.log(data.message.body.track_list[i].track.track_name);
                console.log(data.message.body.track_list[i].track.artist_name)
            }
        });

});
