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

readTextFile("./data/notifications.json", function(text){
    var res = "";
    var data = JSON.parse(text);
    for(var notification of data) {
        res += 
        `
        <a href="./documents/notifications/${notification.pdf}" target="_blank"><p>${notification.name}</p></a>
        `
    }
    var el = document.getElementsByClassName("notifications");
    el[0].insertAdjacentHTML ('beforeend',
        res
    )
});
