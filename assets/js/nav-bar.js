
const screen = window.innerWidth;

function togglelogo() {
    if (screen < 500) {
        classForLogo = "aaron-storey-logo-sm-screen";
    } else{
        classForLogo = "aaron-storey-logo-bg-screen";
    }
    return classForLogo;
}
togglelogo();


const heroSection = `
  <section class="hero">
  <div class="container-fluid">
    <div class="row no-gutters">
        <a class="col-md-4 logo" id="photo" href="/"></a>
        <div class="col-md-8">
            <div class="row no-gutters bg-color-name-title">
                <div class="col heading">
                    <h1 class="name">Aaron Storey</h1>
                    <img class="${classForLogo} image-fluid " src="assets/images/aaron-storey-logo.png" alt="Aaron Storey Logo">
                    <h2 class="title"> Software Developer / Ecommerce Specialist</h2>
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
                        <li class="col-3 col-sm-2 col-md col-md-4 list-inline-item ui-menu-color-download menuitem hvr-sweep-to-bottom">
                            <a class="hvr-sweep-to-bottom"><i class="fa fa-download work-showcase-nav"
                                    aria-hidden="true"></i><span class="work-showcase-nav nav-title">Work Showcase</span></a>
                                    <ul class="sub-menu">
                                    <li class="ecommerce-subtitle"><a href="ecommerce-and-marketing.html">
                                    <span class="nav-subtitle">Ecommerce & Marketing</span></a>
                                    </li>
                                    <br>
                                    <li class="showcase-subtitle "><a href="work-showcase.html">
                                    <span class="nav-subtitle">Work Showcase</span></a>
                                    </li>
                                    </ul>
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
                        <li class="col-3 col-sm-2 col-md col-md-4 ui-menu-color-ecommerce-marketing menuitem d-none">
                            <a href="ecommerce-and-marketing.html" class="hvr-sweep-to-bottom"><i class="fa fa-github"
                                    aria-hidden="true"></i><span class="nav-title">Ecommerce & Marketing</span></a>
                        </li>
                        <li class="col-3 col-sm-2 col-md col-md-4 list-inline-item ui-menu-color-download menuitem">
                            <a href="cv-page.html" class="hvr-sweep-to-bottom"><i class="fa fa-download"
                                    aria-hidden="true"></i><span class="nav-title">Download CV</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  </section>
`;

document.querySelector("#nav-bar").innerHTML = heroSection;
console.log(screen);
