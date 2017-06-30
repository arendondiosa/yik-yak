import React, { Component } from 'react';
import Zone from './Zone.js';

class Zones extends Component {
  render () {
    return (
      <div>
        <ol>
          <li>
            <Zone />
          </li>
        </ol>
      </div>
    )
  }
}

export default Zones