// Javascript for getting lyrics through musixmatch will go in this file
$('#search-button').on("click", function() {

    var searchTerm = $('#search-field').val().trim();
//searching by track
    $.ajax({
        type: "GET",
        data: {
            apikey:"424fd241877633888bbe33c4d8ce3c72",
            q: searchTerm,
            format:"jsonp",
            callback:"jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/track.search?f_lyrics_language=en&f_has_lyrics&q_track=",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json'   
    }).then(function(data) {
            console.log(data);
            for(let i = 0; i<10; i++){

                let track = data.message.body.track_list[i].track.track_name;
                let artist = data.message.body.track_list[i].track.artist_name;

                let newDiv = $('<div>').text(artist + ' - ' + track);
                newDiv.attr('data-artist', artist);
                newDiv.attr('data-track', track);
                newDiv.addClass('option-button');
                $('#option-area-track').append(newDiv);
            }
    });
    // searching  by artist
    $.ajax({
        type: "GET",
        data: {
            apikey:"424fd241877633888bbe33c4d8ce3c72",
            q: searchTerm,
            format:"jsonp",
            callback:"jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/artist.search?q_artist=",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json'   
    }).then(function(data) {
            console.log(data);
            for(let i = 0; i<10; i++){

                let artist = data.message.body.artist_list[i].artist.artist_name;

                let newDiv = $('<div>').text(artist);
                newDiv.attr('data-artist', artist);
                newDiv.addClass('option-button');
                $('#option-area-artist').append(newDiv);
            }
    });
});

