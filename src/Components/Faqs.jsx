import { useEffect } from "react";
import { useState } from "react";





function Faqs({ f }) {

  var [result, setResult] = useState("")



  useEffect(() => {
    fetch('/faqsData.jsp?page=' + f) // api for the get request
      .then(response => response.text())
      .then(data => setResult(data));

  }, [])

  return (
    < >
      <section class="faqs bg-grey">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h2 class="text-center">Frequently asked questions</h2>
              <div class="accordion" id="accordionExample" dangerouslySetInnerHTML={{ __html: result }}>







              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Faqs;
