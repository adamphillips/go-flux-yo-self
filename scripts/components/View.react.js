'use strict';

import React from 'react';
// var React = require('react');

export default class View extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    debugger
    return (
      <div>
        <p>-- #{this.props}</p>
        <p>#{this.state}</p>
      </div>
    )
  }
}
