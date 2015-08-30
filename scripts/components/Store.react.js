'use strict';

import React from 'react';

export default class Store extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <div id={this.props.id} className="component__store">
        {this.props.children}
      </div>
    )
  }
}
