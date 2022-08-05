document.write(
`
    <div style='background-image: url("./images/header-image.jpg");' class='d-flex justify-content-around align-items-center text-center'>
        
            <div class="justify-content-center align-items-center">
            <div class="m-2 d-flex justify-content-around">
                <img src="./images/tu.png" style="background-color: #123456; padding: 5px;"href="https://www.tezu.ernet.in" target="_blank" alt="" width="60" height="60">
            </div>

                <h1 style="font-family: 'Calistoga', cursive; color: white; background-color: #123456; padding-left: 30px; padding-right: 30px;">Center for Multidisciplinary Research</h1>
            </div>
        </div>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark" style="background-color: #123456;">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
        
            <a class="nav-item nav-link" href="index.html">Home</a>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                People
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="director.html">Director</a>
                <a class="dropdown-item" href="supervisors.html">Supervisors</a>
                <a class="dropdown-item" href="researchscholars.html">Research Scholars</a>
                </div>
            </li>
            <a class="nav-item nav-link" href="publications.html">Publications</a>
            <a class="nav-item nav-link" href="research.html">Research Project</a>
            <a class="nav-item nav-link" href="contact.html">Contact</a>
            </div>
        </div>

    </nav>
`
)