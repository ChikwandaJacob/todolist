import React, { Component } from 'react';
import '../AppStyles/App.css';

class Footer extends Component{

    render(){
        return(
            <div className="container">
                <hr className="footer-line"/>
                <div className="row footer">
                    <div className="col-md text-center">
                        <div className="fab fa-whatsapp card-title" aria-hidden="true"></div>
                        <p className="card-text">+260 9633 60015</p>
                    </div>
                    <div className="col-md text-center">
                        <div className="fa fa-map-marker card-title" aria-hidden="true"></div>
                        <p className="card-text">Zambia</p>
                    </div>
                    <div className="col-md text-center">
                        <div className="fa fa-envelope card-title" aria-hidden="true"></div>
                        <p className="card-text">jaynjaycob@gmail.com</p>
                    </div>
                </div>
                <hr className="footer-line"/>
                <div className="text-center author">Jacob Chikwanda &copy; {new Date().getFullYear()}</div>
                <hr className="footer-line-author"/>
            </div>
        )
    }
}

export default Footer;