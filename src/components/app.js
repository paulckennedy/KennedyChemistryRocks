import React, { Component } from 'react';
//import css from '../style/style.css';

//import Header from './header';
//import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className="hg_body">     
        <div className="hg_header navbar">
          <img src = {require('../img/1_Primary_logo_on_transparent_422x59.png')} />
        </div>
        <div className='hg_navigation' >Navigation</div>
        <div className='hg_main' >
          Main
          {this.props.children}
        </div>
        <div className='hg_ads' >Ads</div>
        <div className="footer">
          <div className="contactus">
              <h3>Tracy Kennedy MS.</h3>
              <div clasclassNames="address">
                      <h1 className="bigOne"></h1>
                      <ul id="address">
                      <li><i className="fa fa-road"></i> Carthage High School</li>
                      <li>#1 Bulldog Drive</li>
                      <li>Carthage, Texas 75633</li>
                  </ul>        
              </div>
              <div className="content">
                  <pre id="object"></pre>
              </div>
              <div clclassNameass="contacttypes">
                  <ul id="contactinfo">
                      <li><i className="fa fa-envelope-o"></i> Email: tkennedy@carthageisd.org</li>
                      <li><i className="fa fa-phone"></i> Phone: 903-693-2552</li>
                      <li>Conference: 4th Period</li>
                      <li>Room: D5</li>
                  </ul>
              </div>   
          </div>
        </div>
      </div>
    );
  }
}
