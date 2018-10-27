$(document).ready(function() {
  function lyricLoad(event) {
    $("#lyrics").empty();

    var queryUrl =
      "https://orion.apiseeds.com/api/music/lyric/" +
      artist +
      "/" +
      track +
      "?apikey=7AiSJDaUyPamt6czxDSRgOxetPH9uW52xd2YKIzg1mJW8w2YLGpXp0Oeen4vQVbK";
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      var str = response.result.track.text;
      var result = str.replace("\n", "<br>");
      var lyDiv = $("<pre>");
      lyDiv.append(result);
      $("#lyrics").append(lyDiv);
      console.log(result);
    });
  }
  $(document).on("click", ".option-button", function(event) {
    artist = $(this).attr("data-artist");
    track = $(this).attr("data-track");
    lyricLoad(event);
    console.log(artist);
    console.log(track);
  });
});
