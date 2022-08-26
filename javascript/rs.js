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

function getGuide(guides) {
    var res = "";
    for(var g of guides) {
        res += `
            <p style="white-space: nowrap;"><a href="${g.homepage||"#"}" target="_blank">${g.name}</a></p>
        `
    }
    return res;
}
readTextFile("./data/rs.json", function(text){
    var res = "";
    var data = JSON.parse(text);
    for(var idx in data) {
        var ob = data[idx];
        res += 
        `<tr>
            <td>
                <img style="height: 200px; width: auto;" src="././images/rs/${ob.rollno}.jpg" alt="${ob.rollno}">
            </td>
            <td class="card-body">
                <div>
                    <h5 class="card-title">${ob.name}</h5>
                    <p class="card-text">${ob.rollno}</p>
                    <p class="card-text">${ob.email}</p>
                    <a href="././documents/rs/${ob.cv}" target="_blank" class="btn btn-dark">Curriculum Vitae</a>
                </div>
            </td> 
            <td>
                ${ob.topic}
            </td>   
            <td>
                ${getGuide(ob.guide)}
            </td>
        </tr>`
    }
    var el = document.getElementsByClassName("rs");
    el[0].insertAdjacentHTML ('beforeend',
        res
    )
});
