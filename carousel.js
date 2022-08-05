document.write(
`
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" style="height: 500px; width: auto;">
        <div class="carousel-item active">
            <img class="d-block w-100" src="./images/Event Images/1.jpeg" alt="First slide" style="margin: auto">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./images/Event Images/2.jpeg" alt="First slide" style="margin: auto">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="./images/Event Images/3.jpeg" alt="First slide" style="margin: auto">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
`
)