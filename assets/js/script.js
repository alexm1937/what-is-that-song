// Having the API key included is a requirement of the project.  We are aware this is extremely bad practice.
var happiKey = "6cee08jelZimDlZuhamu4dj8z6Hes2R3BUAfCerTzePrK80h8QcSAhSg";
var lastFmKey = "8443bdf1c4cc5890510c1a04982da6d7";
var songHistory = {};



function display(song) {

}
// TODO create text key format standard for project, display as such
function displayHistory() {
    $(".history").empty();
    for (var Key in songHistory) {
        var btn = $("<button></button>").text(Key);
        btn.attr("class","historyBtn");
        btn.attr("type", "button");
        $(".history").append(btn);
        $(".historyBtn").click(function () {
            
            display($(this).text());
        })
    }
}
// Helper functions
async function get(url) {
    try {
        let response = await fetch(url);
        let json = await response.json();
        if (json.cod === '404') {
            return 1;
        }
        return json;

    } catch (error) {
        console.log("an error occured trying to get json");
        return 2
    }
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
