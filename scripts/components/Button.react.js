'use strict';

import React from 'react';

import ClickedButton from '../flux/ClickedButton';

export default class Button extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <button id={this.props.id} className="button component__view" onClick={this.onButtonClick}>
        {this.props.children}
        <p className="button__description">
          When clicked, each button will create an instance of the <a>ClickedButton</a> ActionCreator.
          This in turn <a>creates and dispatches</a> the action.
          <a>The action</a> contains a type and id but could contain any other relevant information.
        </p>
      </button>
    )
  }

  onButtonClick = () => {
    new ClickedButton(this.props.id).click();
  }
}
