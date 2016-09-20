$(document).ready(function() {
    var searchTerm;
    var type;
    var encodedSearch;
    var spotify_url;
    var nextList;

    $('#searchButton').first().on("click", function(){
        $("#message").empty();
        $("#results").empty();
        $('#moreResults').remove();

        searchTerm = $('#searchTerm').val();
        type = $('#select').val();
        console.log(searchTerm);
        console.log(type);
        encodedSearch = encodeURIComponent(searchTerm);
        spotify_url = 'https://api.spotify.com/v1/search?q='+encodedSearch+'&offset=0&type='+type;
        $("#message").html('Results for the ' + type + ' named "' + searchTerm + '"');

        $.ajax({
            url: spotify_url,
            method: 'GET',
            success: function load(data) {
                $.each(data, function(key, value){
                    console.log(data);
                    console.log(spotify_url);
                    $.each(this.items, function(id, val){
                        var li = $("<li>").attr('id', 'resultItem').appendTo('#results');
                        if (val.images[0] == undefined) {
                            $("<img>").attr('id', 'picture').attr('src', 'record.jpg').appendTo(li);
                        } else {
                            $("<img>").attr('id', 'picture').attr('src', val.images[0].url).appendTo(li);
                        }
                        $("<div>").html(val.name).attr('id', 'name').appendTo(li);
                        $(li).on("click", function(){
                            window.location = val.external_urls.spotify;
                        });
                    });
                    nextList = value.next;
                    console.log(nextList);
                    if (nextList != null) {
                        $("<button>").html("More Results").attr("id", "moreResults").appendTo('#resultsContainer').on("click", function(){
                            $('#moreResults').remove();
                            console.log(nextList);
                            $.ajax({
                                url: nextList,
                                method: 'GET',
                                success: load,
                                error: function() {
                                    console.log(spotify_url + " could not be found");}
                            });
                        });
                    }
                });
            },
            error: function() {
                console.log(spotify_url + " could not be found");
            }
        });
    });
});
