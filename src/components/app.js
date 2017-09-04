import React, { Component } from 'react';
import css from '../style/style.css';

import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className="body">     
        <Header />
        <div className='hg_navigation' >Navigation</div>
        <div className='hg_main' >
          Main
          {this.props.children}
        </div>
        <div className='hg_ads' >Ads</div>
          
        <Footer />
      </div>
    );
  }
}
