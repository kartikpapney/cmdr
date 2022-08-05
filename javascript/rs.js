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

readTextFile("./data/rs.json", function(text){
    var res = "";
    var data = JSON.parse(text);
    for(var idx in data) {
        var ob = data[idx];
        res += 
        `<tr>
            <th scope="row">${idx}</th>
            <td>${ob.name}</td>
            <td>${ob.rollno}</td>
            <td>${ob.email}</td>
        </tr>`
    }
    var el = document.getElementsByClassName("rs");
    el[0].insertAdjacentHTML ('beforeend',
        res
    )
});
