'use strict';

import React from 'react';

import Layer from './Layer.react';
import MessageBar from './MessageBar.react';
import Button from './Button.react';
import Dispatcher from './Dispatcher.react';
import Store from './Store.react';

export default class AppContainer extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <div id="app-container">
        <Layer id="view-layer">
          <MessageBar id="message-bar"></MessageBar>
          <Button id="button-1">Button 1</Button>
          <Button id="button-2">Button 2</Button>
          <Button id="button-3">Button 3</Button>
        </Layer>
        <Layer id="dispatcher-layer">
          <Dispatcher id="dispatcher">Dispatcher</Dispatcher>
        </Layer>
        <Layer id="store-layer">
          <Store id="output-store">Output Store</Store>
          <Store id="logger-store">Logger Store</Store>
        </Layer>
      </div>
    )
  }
}
