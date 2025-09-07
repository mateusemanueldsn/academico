import React, { Component } from 'react';
import "./Container.css";
import "./NavMenu.css";
import "./Postagens.css";
import "./Card.css";
import NavMenu from "./NavMenu";
import Postagens from "./Postagens";


class Container extends Component { 
    render() { 
        return ( 
        <div className="container">
            <NavMenu/>
            <Postagens/>
        </div> 
        );
    }
}
 
export default Container;  