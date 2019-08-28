import React from 'react'

const Dark =(props)=>{
    return(
        <div>
<section class="page-section bg-dark text-white">
    <div class="container text-center">
      <h2 class="mb-4">{props.dark[0].h2}</h2>
      <a class="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">{props.dark[0].btn}</a>
    </div>
  </section>
        </div>
    )
}
export default Dark;