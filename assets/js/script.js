// Having the API key included is a requirement of the project.  We are aware this is extremely bad practice.
var happiKey = "6cee08jelZimDlZuhamu4dj8z6Hes2R3BUAfCerTzePrK80h8QcSAhSg";
var lastFmKey = "8443bdf1c4cc5890510c1a04982da6d7";
var songHistory = {};

$("#search").click( async function () {
    var title = $("#title").text();
    var artist = $("#artist").text();
    if (title && artist) {
        title = toTitleCase(title);
        artist = toTitleCase(artist);

    } else {
        console.log("blank");
        // lacking title or artist or both
        // popup modal needs doing TODO
    }
})
/**
 * Displays lyrics & metadata
 */
function display(song) {
    
}
/**
 * populates the history div if there is any history to populate it with
 */
function displayHistory() {
    $(".history").empty();
    for (var Key in songHistory) {
        var btn = $("<button></button>").text(Key);
        btn.attr("class","historyBtn");
        btn.attr("type", "button");
        $(".history").append(btn);
        $(".historyBtn").click(function () {
            
            // Needs new function
            display($(this).text());
        })
    }
}
/**
 * saves the key value pair (artist+title --> lyrics)
 * @param {string} song -format is ("Blonde Redhead+Harmony") where the artist is Blonde Redhead & the title is Harmony
 * @param {string} lyrics - string containing lyrics
 * @param {Object} Object containing metadata
 */
// TODO save metadata
function saveHistory(song, lyrics, metadata){
    songHistory[song] = {"lyrics": lyrics,"metadata": metadata};
    localStorage.setItem('songHistory', JSON.stringify(songHistory));
    
}
/**
 * Loads history if present from localstorage
 * localStorage songHistory -> to var songHistory 
 */
 function loadHistory () {
    var json_string = localStorage.getItem('songHistory');
    if (json_string) {
        songHistory = JSON.parse(json_string);
    }
}

// Helper functions

/**
 * Simple function for fetching json
 * @param {string} url - api url to fetch from
 */
async function get(url) {
    try {
        let response = await fetch(url);
        let json = await response.json();
        
        return json;

    } catch (error) {
        console.log("an error occured trying to get json");
        return 2
    }
}
/**
 * takes a string and returns title case of that string
 * @param {string} str - string that may or may not currently be in title case
 * @returns {string} - the str in titlecase
 */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
