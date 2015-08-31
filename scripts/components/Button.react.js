'use strict';

import React from 'react';

import { dispatch } from '../flux/Dispatcher';

export default class Button extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <button id={this.props.id} className="button component__view" onClick={this.onButtonClick}>
        {this.props.children}
      </button>
    )
  }

  onButtonClick = () => {
    dispatch({
      type: 'button/clicked',
      id: this.props.id
    })
  }
}
