'use strict';

import React from 'react';

export default class ActionCreator extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <div id={this.props.id} className="component__action_creator">
        {this.props.children}
        <p className="action_creator__description">
          Actions are similar to <a href="#">command objects</a>.
          They instigate a particular command and if this results in a change of
          state, notify the dispatcher.
        </p>
      </div>
    )
  }
}
