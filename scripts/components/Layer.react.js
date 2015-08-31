'use strict';

import React from 'react';

export default class Layer extends React.Component<{}, Props, State> {
  render() : ?ReactElement {

    return (
      <div id={this.props.id} className="layer clear-fix">
        {this.props.children}
      </div>
    )
  }
}
