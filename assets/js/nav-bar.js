const heroSection = `
  <section class="hero">
    <div class="row no-gutters">
        <a class="col-md-4 logo" id="photo" href="/"></a>
        <div class="col-md-8">
            <div class="row no-gutters bg-color-name-title">
                <div class="col heading">
                    <h1 class="name">Aaron Storey</h1>
                    <h2 class="title"> Full Stack Developer</h2>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col col-12">
                    <ul id="nav" class="list-inline menucontainer">
                        <li class="col-3 col-sm-2 col-md col-md-4 list-inline-item ui-menu-color-home menuitem">
                            <a href="index.html" class="hvr-sweep-to-bottom"><i class="fa fa-home"
                                    aria-hidden="true"></i><span class="nav-title">Home</span></a>
                        </li>
                        <li class="col-3 col-sm-2 col-md col-md-4 list-inline-item ui-menu-color-resume menuitem">
                            <a href="resume.html" class="hvr-sweep-to-bottom"><i class="fa fa-graduation-cap"
                                    aria-hidden="true"></i><span class="nav-title">Resume</span></a>
                        </li>
                        <li class="col-3 col-sm-2 col-md col-md-4 list-inline-item ui-menu-color-contact menuitem">
                            <a href="contact.html" class="hvr-sweep-to-bottom"><i class="fa fa-comment-o"
                                    aria-hidden="true"></i><span class="nav-title">Contact</span></a>
                        </li>
                        <li class="col-3 col-sm-2 col-md col-md-4 ui-menu-color-interests menuitem">
                            <a href="interests.html" class="hvr-sweep-to-bottom"><i class="fa fa-users"
                                    aria-hidden="true"></i><span class="nav-title">Interests</span></a>
                        </li>
                        <li class="col-3 col-sm-2 col-md col-md-4 ui-menu-color-github menuitem">
                            <a href="github.html" class="hvr-sweep-to-bottom"><i class="fa fa-github"
                                    aria-hidden="true"></i><span class="nav-title">GitHub</span></a>
                        </li>
                        <li class="col-3 col-sm-2 col-md col-md-4 list-inline-item ui-menu-color-download menuitem">
                            <a href="#" class="hvr-sweep-to-bottom"><i class="fa fa-download"
                                    aria-hidden="true"></i><span class="nav-title">Download CV</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </section>
`;

document.querySelector("#nav-bar").innerHTML = heroSection;
