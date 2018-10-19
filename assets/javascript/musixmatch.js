// Javascript for getting lyrics through musixmatch will go in this file
$(document).on("click", function() {

    // Don't know what this is going to be until html is finished. Using my own search for now.        
    var searchTerm = "journey";
    
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
        url: "https://api.musixmatch.com/ws/1.1/track.search",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json'   
    })
        .then(function(data) {
            console.log(data);
        });
});
