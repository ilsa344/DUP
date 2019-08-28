import React from 'react';

const Services =(props)=>{
    let columns=props.services[0].row.map((v,i)=>{
        return(
            <div class="col-lg-3 col-md-6 text-center" key={i}>
                <div class="mt-5">
                    <i class={v.icon}></i>
                    <h3 class="h4 mb-2">{v.h3}</h3>
                    <p class="text-muted mb-0">{v.des}</p>
                </div>
            </div>
        )
    })
    return(
        <div>
            <section class="page-section" id="services">
                <div class="container">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider my-4"/>
                <div class="row">
                    {columns}
                </div>
                </div>
            </section>
        </div>
    )
}
export default Services;