import { Link } from "react-router-dom";
 


function Header_region() {
    return (
        < >
            <div className="header-region">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img  src="/assets/img/lst_logo.webp" className="img-fluid" />
                        </a>
                        <div className="searh-mobile">
                            <a className="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    <form className="d-flex flex-wrap">
                                        <input id="sourcem" className="form-control" type="search" placeholder="Search..." aria-label="Search" />
                                        <div id="ddm" className="searchresult">
                                            <ul id="myULm" className="dropdown">
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">All Programs</a>
                                    <ul className="dropdown-menu multi-level" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/classroom-coaching/">Classroom Coaching</Link></li>
                                        <li><a className="dropdown-item" href="/online-coaching/">Online Coaching</a></li>
                                        <li><a className="dropdown-item" href="/study-material/">Books &amp; Materials</a></li>
                                        <li><a className="dropdown-item" href="/test-series/">Test Series</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Exams</a>
                                    <ul className="dropdown-menu multi-level" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/clat/">CLAT</Link></li>
                                        <li><Link className="dropdown-item" to="/ailet/">AILET</Link></li>
                                        <li><a className="dropdown-item" href="/nlat/">NMIMS</a></li>
                                        <li><a className="dropdown-item" href="/slat/">SLAT</a></li>
                                        <li><a className="dropdown-item" href="/mhcet/">MHCET</a></li>
                                        <li><a className="dropdown-item" href="/lsat-india/">LSAT-India<sup>™</sup></a></li>
                                        <li><a className="dropdown-item" href="/exams-colleges/">Other law entrance exams</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/success-stories.html">Results</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                                    <ul className="dropdown-menu multi-level" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/blogs/">Blogs</a></li>
                                        <li><a className="dropdown-item" href="/article/">Article</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item free"><span><i className="fa-solid fa-star"></i>FREE</span><a className="nav-link" href="/webinar/">Webinar</a></li>
                                <li className="nav-item d-lg-none d-block"><a className="nav-link" href="/contactus.jsp">Contact</a></li>
                                <li className="nav-item srch"><a className="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-magnifying-glass"></i></a>
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body">
                                            <form className="d-flex flex-wrap">
                                                <input id="source" className="form-control" type="search" placeholder="Search..." aria-label="Search" />
                                                <div id="dd" className="searchresult"><ul id="myUL" className="dropdown"></ul></div>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item two-btns"><a className="nav-link btnsamecont1" href="https://myzone.careerlauncher.com/login.jsp">Student Login</a></li>
                                <li className="nav-item two-btns"><a className="nav-link btnsamecont me-0" href="/courses.jsp">Enroll Online</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Header_region;