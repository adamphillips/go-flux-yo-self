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
          <div className="button-container">
            <Button id="button-1">Button 1</Button>
            <Button id="button-2">Button 2</Button>
            <Button id="button-3">Button 3</Button>
          </div>
        </Layer>
        <Layer id="dispatcher-layer">
          <Dispatcher id="dispatcher">Dispatcher</Dispatcher>
        </Layer>
        <Layer id="store-layer">
          <Store id="output-store">
            Output Store
            <p className="store__description">
              The output store contains the message to be displayed.
            </p>
          </Store>
          <Store id="logger-store">Logger Store
            <p className="store__description">
              The Logger Store contains the log of the last 10 actions.
              This is the source used for the data table.
            </p>
          </Store>
        </Layer>
      </div>
    )
  }
}
