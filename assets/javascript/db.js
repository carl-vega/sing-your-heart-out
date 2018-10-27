var config = {
    apiKey: "AIzaSyDiH2pvG4VEthb6CCovkPCrTKFADidHpt8",
    authDomain: "project1-ac9b6.firebaseapp.com",
    databaseURL: "https://project1-ac9b6.firebaseio.com",
    projectId: "project1-ac9b6",
    storageBucket: "project1-ac9b6.appspot.com",
    messagingSenderId: "1036633980762"
};
firebase.initializeApp(config);

let database = firebase.database();


$('#favorite-button').on('click', function(){
    database.ref().push({
        artist: artist,
        track: track,
    });
});

database.ref().on('child_added', function(childSnapshot){
    console.log(childSnapshot.val());
    let favArtist = childSpapshot.val().artist;
    let favTrack = childSpapshot.val().track;
    let key = childSpapshot.key;

    let favTag = $('<a>');
    favTag.addClass('favorites-button waves-effect waves-red btn-flat');
    favTag.attr('data-artist', favArtist);
    favTag.attr('data-track', favTrack);
    favTag.attr('data-key', key);
    favTag.text(favArtist +' - '+ favTrack);

    $('#favorites-area').prepend(favTag);
});

$(document).on('click', '.favorites-button', function (event) {
    artist = $(this).attr('data-artist');
    track = $(this).attr('data-track');
    $('#top-3').removeClass('hide');
    $('#favorites-bar').addClass('hide');
    $('#search-field').val("");
    submitFunction(event);
    counter = 0;
});