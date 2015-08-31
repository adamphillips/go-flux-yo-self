'use strict';

import React from 'react';
import MessageStore from '../flux/MessageStore';

var Container = require('flux/utils').Container;

export class MessageBar extends React.Component<{}, Props, State> {
  static getStores(): Array<Store> {
    return [MessageStore];
  }

  static calculateState(prevState: ?State): State {
    return {
      message: MessageStore.getState(),
    }
  }

  render() : ?ReactElement {
    return (
      <div id={this.props.id} className="message-bar component__view">
        <span className="source">Source: MessageStore</span>
        {this.state.message}
      </div>
    )
  }
}

var ContainedMessageBar = Container.create(MessageBar);
export default ContainedMessageBar;
