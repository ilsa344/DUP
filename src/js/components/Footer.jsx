import React from 'react';

const Footer=(props)=>{
    return(
        <div>
            <footer class="bg-light py-5">
                <div class="container">
                <div class="small text-center text-muted">{props.footer[0].footer}</div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;