'use strict';

import React from 'react';

export default class Dispatcher extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <div id={this.props.id} className="component__dispatcher">
        {this.props.children}
        <p className="dispatcher__description">
          Each button click dispatches an event against the dispatcher.
          The dispatcher in turn notifies the stores who can decide if they are interested.
        </p>
      </div>
    )
  }
}
