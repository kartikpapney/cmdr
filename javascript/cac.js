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

readTextFile("./data/cac.json", function(text){
    var res = "";
    var data = JSON.parse(text);
    for(var ob of data) {
        res += 
        `<div style="width: 20rem;" class="card m-1">
            <div class="image">
                <img class="card-img-top" src="././images/cac/${ob.image}" alt="${ob.name}">
            </div>
            <div class="card-body d-flex row text-center">
                <h5 class="card-title" style="font-family: cursive;">${ob.name}</h5>
                <p><mark style="background-color: #ebf5ff;">${ob.designation}, ${ob.department}</mark></p>
                <a href=${ob.homepage} target="_blank"><button type="button" class="btn btn-dark ml-auto" style="background-color: #123456;">Home Page</button></a>
            </div>
        </div>`
    }
    var el = document.getElementsByClassName("cac");
    el[0].insertAdjacentHTML ('beforeend',

        `<div class="container" style="display: flex; justify-content: space-around; flex-wrap: wrap;">
            ${res}
        </div>`
        
    )
});
