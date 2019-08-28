import React from 'react';

const About =(props)=>{
    return(
        <div>
<section class="page-section bg-primary" id="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="text-white mt-0">{props.about[0].h2}</h2>
          <hr class="divider light my-4"/>
          <p class="text-white-50 mb-4">{props.about[0].parah}</p>
          <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">{props.about[0].btn}</a>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}
export default About;