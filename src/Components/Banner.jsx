function Banner() {
    return (
        <>
            <div >
                <section className="banner">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <h1>Your Preparation Partner for Law Entrance Exams</h1>
                                <h2>Choose CL-LST to crack CLAT, AILET, and OLETs(Other law entrance tests)</h2>
                                <div className="pro-box">
                                    <p><a href="/classNameroom-coaching/">Classroom Coaching</a> | <a href="/online-coaching/">Online Coaching</a> | <a href="/test-series/">All-India Test Series</a> | <a href="/study-material/" className="clar">Books & Materials</a></p>
                                </div>

                                <form name="clForm" id="clForm" className="d-flex flex-wrap margin-top-10" method="post" onsubmit="return false;" >
                                    <input type="hidden" name="utm_source" value='Website' />
                                    <input type="hidden" name="utm_campaign" value='LST Home Page' />
                                    <input type="hidden" name="utm_term" value='https://www.lawentrance.com/' />
                                    <input type="hidden" name="utm_medium" value='SEO' />
                                    <input type="hidden" name="cl_target_list" value='LST Home Page' />
                                    <input type="hidden" name="cl_prod_category" id="cl_prod_category" value='LST' />
                                    <input type="hidden" name="cl_exam_category" value='CLAT' />
                                    <input type="hidden" name="cl_campaign" value='LST Home Page' />
                                    <input type="hidden" id="url" name="url" />
                                    <input type="hidden" name="listId" value="9982efe8-7537-11e8-8aa7-020e1b1539ba" />
                                    <input type="hidden" name="trigger" value="LST Home Page" />
                                    <input type="hidden" name="centerFlag" value="no" />
                                    <input type="hidden" name="leadsquared" value="yes" />
                                    <input type="hidden" name="eventId" value="123456" />
                                    <input type="hidden" name="webxSession" value="no" />
                                    <input type="hidden" name="redirectUrl" value="https://www.lawentrance.com/thankyou.jsp" />
                                    <input type="hidden" name="eOtp" id="eOtp" value="" />
                                    <input className="form-control me-2" type="tel" name="mobile" id="mobile" placeholder="Enter Mobile No." pattern="[6-9][0-9]{9}" title="Mobile number should start with 6, 7, 8, or 9 and contain at least 10 digits." required />

                                    <input className="btn cta" type="submit" value="Get FREE Counselling" onclick="sendOtp(1)" />

                                </form>

                            </div>
                            <div className="col-lg-6 m-hide">
                                <img src="assets/img/banner-home.svg" className="img-fluid" /
                                >
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Banner;
