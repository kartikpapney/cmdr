function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return '<a target="_blank" href="' + url + '">' + url + '</a>';
  })
}

readTextFile("./data/research.json", function(text){
    var res = "<ol>";
    var data = JSON.parse(text);
    for(var research of data) {
        res += 
        `
        <li>${urlify(research)}</li>
        `
    }
    res+="</ol>"
    var el = document.getElementsByClassName("container");
    el[0].insertAdjacentHTML ('beforeend',
        res
    )
});
