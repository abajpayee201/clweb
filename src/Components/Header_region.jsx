import { Link } from "react-router-dom";



function Header_region() {
    return (
        < >
            <div class="header-region change">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            <img src="/assets/img/lst_logo.webp" class="img-fluid"/>
                        </a>
                        <div class="searh-mobile">
                            <a class="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fa-solid fa-magnifying-glass"></i></a>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    <form class="d-flex flex-wrap">
                                        <input id="sourcem" class="form-control" type="search" placeholder="Search..." aria-label="Search"/>
                                            <div id="ddm" class="searchresult">
                                                <ul id="myULm" class="dropdown"></ul>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">All Programs</a>
                                    <ul class="dropdown-menu multi-level" aria-labelledby="navbarDropdown">
                                        <li><Link class="dropdown-item" to="/classroom-coaching/">Classroom Coaching</Link></li>
                                        <li><Link class="dropdown-item" to="/online-coaching/">Online Coaching</Link></li>
                                        <li><a class="dropdown-item" href="/study-material/">Books &amp; Materials</a></li>
                                        <li><a class="dropdown-item" href="/test-series/">Test Series</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Exams</a>
                                    <ul class="dropdown-menu multi-level" aria-labelledby="navbarDropdown">
                                        <li><Link class="dropdown-item" to="/clat/">CLAT</Link></li>
                                        <li><Link class="dropdown-item" to="/ailet/">AILET</Link></li>
                                        <li><a class="dropdown-item" href="/nlat/">NMIMS</a></li>
                                        <li><a class="dropdown-item" href="/slat/">SLAT</a></li>
                                        <li><a class="dropdown-item" href="/mhcet/">MHCET</a></li>
                                        <li><a class="dropdown-item" href="/lsat-india/">LSAT-India<sup>™</sup></a></li>
                                        <li><a class="dropdown-item" href="/exams-colleges/">Other law entrance exams</a></li>
                                    </ul>

                                </li>
                                <li class="nav-item"><a class="nav-link" href="/success-stories.html">Results</a></li>
                                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                                    <ul class="dropdown-menu multi-level" aria-labelledby="navbarDropdown">


                                        <li><a class="dropdown-item" href="/freezone/">Free CLAT Mock</a></li>
                                        <li><a class="dropdown-item" href="/blogs/">Blogs</a></li>
                                        <li><a class="dropdown-item" href="/article/">Article</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item free"><span><i class="fa-solid fa-star"></i>FREE</span><a class="nav-link" href="/webinar/">Webinar</a></li>
                                <li class="nav-item d-lg-none d-block"><a class="nav-link" href="/contactus.jsp">Contact</a></li>
                                <li class="nav-item srch"><a class="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fa-solid fa-magnifying-glass"></i></a><div class="collapse" id="collapseExample"><div class="card card-body"><form class="d-flex flex-wrap"><input id="source" class="form-control" type="search" placeholder="Search..." aria-label="Search"/><div id="dd" class="searchresult"><ul id="myUL" class="dropdown"></ul></div></form></div></div></li><li class="nav-item two-btns"><a class="nav-link btnsamecont1" href="https://myzone.careerlauncher.com/login.jsp">Student Login</a></li><li class="nav-item two-btns"><a class="nav-link btnsamecont me-0" href="/courses.jsp">Enroll Online</a></li></ul></div></div></nav></div>

        </>
    );
}

export default Header_region;