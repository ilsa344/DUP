import React from 'react';

const Header =(props)=>{
    return(
        <div>
 <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-10 align-self-end">
          <h1 class="text-uppercase text-white font-weight-bold">{props.header[0].h1}</h1>
          <hr class="divider my-4" />
        </div>
        <div class="col-lg-8 align-self-baseline">
          <p class="text-white-75 font-weight-light mb-5">{props.header[0].parah}</p>
          <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">{props.header[0].btn}</a>
        </div>
      </div>
    </div>
  </header>
        </div>
    )
}
export default Header;