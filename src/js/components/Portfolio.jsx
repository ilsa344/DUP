import React from 'react';

const Portfolio=(props)=>{
    let gallery=props.portfolio[0].imgs.map((v,i)=>{
        return(
            <div class="col-lg-4 col-sm-6" key={i}>
          <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
            <img class="img-fluid" src={v.img} alt=""/>
            <div class="portfolio-box-caption">
              <div class="project-category text-white-50">
                {v.cat}
              </div>
              <div class="project-name">
                {v.project}
              </div>
            </div>
          </a>
        </div>
        )
    })
    return(
        <div>
<section id="portfolio">
    <div class="container-fluid p-0">
      <div class="row no-gutters">
        {gallery}
      </div>
    </div>
  </section>
        </div>
    )
}
export default Portfolio;