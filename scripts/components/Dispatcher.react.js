'use strict';

import React from 'react';

export default class Dispatcher extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <div id={this.props.id} className="component__dispatcher">
        {this.props.children}
      </div>
    )
  }
}
