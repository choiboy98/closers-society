import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Plx from 'react-plx';

import '../index.css';
import ScrollAnimation from 'react-animate-on-scroll';

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
    ],
  },
];

export default class Logo extends Component {

  render() {
    return (
      <Plx
          className='MyAwesomeParallax'
          parallaxData={ parallaxData }
          style={styles.main_background}
        >
          <div className="initial-screen-in logo-1"></div>
        </Plx>
    );
  }
}

const styles = {
  main_background: {
    opacity: 1,
  },
  overlay_bg: {
    height: '100%',
    width: '100%',
    position: 'fixed',
  }
}