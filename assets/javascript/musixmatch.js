// Javascript for getting lyrics through musixmatch will go in this file
$('#search-button').on("click", function(event) {
    event.preventDefault();

    var searchTerm = $('#search-field').val().trim();
    console.log(searchTerm);
//searching by track
    $.ajax({
        type: "GET",
        data: {
            apikey:"424fd241877633888bbe33c4d8ce3c72",
            q: searchTerm,
            format:"jsonp",
            callback:"jsonp_callback"
        },
        url: "https://api.musixmatch.com/ws/1.1/track.search?f_lyrics_language=en&f_has_lyrics&page_size=20&q_track=",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json'   
    }).then(function(data) {
        console.log(data);
        for(let i = 0; i<10; i++){
            let track = data.message.body.track_list[i].track.track_name;
            let artist = data.message.body.track_list[i].track.artist_name;

            let newRow = $('<tr>');
            newRow.append('<th>').text(artist);
            newRow.append('<td>').text(track);
            newRow.addClass('option-button');
            $('#option-area-artist').append(newRow);
        }
        for(let i=10; i<20;i++){
            let track = data.message.body.track_list[i].track.track_name;
            let artist = data.message.body.track_list[i].track.artist_name;

            let newRow = $('<tr>');
            newRow.append('<td>').text(artist);
            newRow.append('<th>').text(track);
            newRow.addClass('option-button');
            $('#option-area-track').append(newRow);
        }
    });
});

