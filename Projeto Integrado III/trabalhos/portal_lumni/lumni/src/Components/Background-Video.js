import React, { Component } from 'react';
import video from "../Graphic/midia/presentation.mp4";
class BackgroundVideo extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="container-apresentacao">
                <div className="background-video">
                <video autoPlay loop muted><source src={video} type="video/mp4"/></video>
                </div>
                <div className="info-presentation">
                    <h2>BEM-VINDO AO</h2>
                    <h1>PORTAL LUMNI</h1>
                    <h3>A plataforma ufológica de Quixadá</h3>
                </div>
            </section>
         );
    }
}
 
export default BackgroundVideo;