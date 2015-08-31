'use strict';

import React from 'react';
import OutputStore from '../flux/OutputStore';

var Container = require('flux/utils').Container;

export class MessageBar extends React.Component<{}, Props, State> {
  static getStores(): Array<Store> {
    return [OutputStore];
  }

  static calculateState(prevState: ?State): State {
    return {
      message: OutputStore.getState(),
    }
  }

  render() : ?ReactElement {
    return (
      <div id={this.props.id} className="message-bar component__view">
        {this.state.message}
      </div>
    )
  }
}

var ContainedMessageBar = Container.create(MessageBar);
export default ContainedMessageBar;
