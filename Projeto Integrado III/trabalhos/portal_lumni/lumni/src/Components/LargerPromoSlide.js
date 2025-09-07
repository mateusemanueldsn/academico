import React, { Component } from 'react';
import ImgPromo1 from "../Graphic/promocoes/banneranuncio0.jpg";
import ImgPromo2 from "../Graphic/promocoes/banneranuncio2.jpg";
import ImgPromo3 from "../Graphic/promocoes/banneranuncio3.jpg";
class LargerPromoSlider extends Component {
    state = {  }
    render() { 
        return ( 
            <section class="promo-slider">
            <div id="slider" class="view-mob">
                <figure>
                    <a href="#"><img src={ImgPromo1} alt=""/></a>
                    <a href="#"><img src={ImgPromo2} alt=""/></a>
                    <a href="#"><img src={ImgPromo3} alt=""/></a>
                </figure>
            </div>
            </section>
         );
    }
}
 
export default LargerPromoSlider;