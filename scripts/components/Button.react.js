'use strict';

import React from 'react';

import UpdateMessage from '../flux/UpdateMessage';
import DelayedUpdateMessage from '../flux/DelayedUpdateMessage';

export default class Button extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <button id={this.props.id} className="button component__view" onClick={this.onButtonClick}>
        {this.props.children}
        <p className="button__description">
          When clicked, each button will create an instance of the {this.actionCreatorType} ActionCreator.
          This in turn <a href="#">creates and runs</a> and instance of the <a href="#">UpdateMessage action</a>.
          <a href="#">The action</a> contains a type and message but could contain any other relevant information.
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
