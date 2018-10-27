// Javascript for getting lyrics through musixmatch will go in this file

$('#search-button').on("click", function(event) {
    event.preventDefault();
    $('#search-returns').removeClass('hide');
    var searchTerm = $('#search-field').val().trim();
    console.log(searchTerm);
    // empties the table so build your next search
    $('#option-area-artist').empty();
    $('#option-area-track').empty();
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

            let newTag = $('<a>');
            newTag.addClass('option-button waves-effect waves-red btn-flat');
            newTag.attr('data-artist', artist);
            newTag.attr('data-track', track);
            newTag.text(artist +' - '+ track);
            $('#option-area-artist').append(newTag);
        }
    });
});

