'use strict';

import React from 'react';

import UpdateMessage from '../flux/UpdateMessage';
import DelayedUpdateMessage from '../flux/DelayedUpdateMessage';

export default class Button extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    debugger;
    return (
      <button id={this.props.id} className="button component__view" onClick={this.onButtonClick}>
        {this.props.children}
        <p className="button__description">
          When clicked, this button will create an instance of an ActionCreator.
          It will use this to set the message to {this.message}.
        </p>
      </button>
    )
  }

  onButtonClick = () => {
    this.actionCreator.run(this.message);
  }

  get message() {
    return 'You have clicked ' + this.props.id.replace('-', ' ');
  }

  get actionCreator() {
    return new this.actionCreatorType();
  }

  get actionCreatorType() {
    return (this.props.delay) ? DelayedUpdateMessage : UpdateMessage;
  }
}
