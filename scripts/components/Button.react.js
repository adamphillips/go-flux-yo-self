'use strict';

import React from 'react';

export default class Button extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <button id={this.props.id} className="button component__view">
        {this.props.children}
      </button>
    )
  }
}
