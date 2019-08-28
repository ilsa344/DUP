import React from 'react';

const Contact=(props)=>{
    return(
        <div>
 <section class="page-section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="mt-0">{props.contact[0].touch}</h2>
          <hr class="divider my-4"/>
          <p class="text-muted mb-5">{props.contact[0].p}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
          <div>{props.contact[0].no}</div>
        </div>
        <div class="col-lg-4 mr-auto text-center">
          <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
          <a class="d-block" href="mailto:contact@yourwebsite.com">{props.contact[0].no1}</a>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}
export default Contact;