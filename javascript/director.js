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

readTextFile("./data/director.json", function(text){
    var res = "";
    var director = JSON.parse(text);
    res += 
    `<div class="card-body d-flex justify-content-center flex-wrap">
        <img src="./images/${director.image}" style="height: 300px; width: auto;" alt="director" class="img-thumbnail">    
        <div class="p-2">
            <h3 style="font-family: cursive;">${director.name}</h3>
            <p>${director.designation}, ${director.department}</p>
            <p>Email: ${director.email}</p>
            <p>Phone: ${director.phone}</p>
            <a href=${director.homepage} target="_blank"><button type="button" class="btn btn-dark ml-auto" style="background-color: #123456;">Home Page</button></a>
        </div>
    </div>`
    var el = document.getElementsByClassName("director");
    el[0].insertAdjacentHTML ('beforeend',

        `${res}`
        
    )
});
