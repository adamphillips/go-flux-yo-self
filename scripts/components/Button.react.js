'use strict';

import React from 'react';

import ClickedButton from '../flux/ClickedButton';

export default class Button extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <button id={this.props.id} className="button component__view" onClick={this.onButtonClick}>
        {this.props.children}
        <p className="button__description">
          When clicked, each button will dispatch an action against the dispatcher.
          This action contains a type and id but could contain any other relevant information.
        </p>
      </button>
    )
  }

  onButtonClick = () => {
    new ClickedButton(this.props.id).click();
  }
}
