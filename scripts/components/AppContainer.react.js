'use strict';

import React from 'react';

import Layer from './Layer.react';
import MessageBar from './MessageBar.react';
import Button from './Button.react';
import ActionCreator from './ActionCreator.react';
import Dispatcher from './Dispatcher.react';
import Store from './Store.react';
import SourceLink from './SourceLink.react';

export default class AppContainer extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <div id="app-container">
        <Layer id="view-layer">
          <MessageBar id="message-bar"></MessageBar>
          <div className="button-container">
            <Button id="button-1">Button 1</Button>
            <Button id="button-2">Button 2</Button>
            <Button id="button-3" delay="true">Button 3</Button>
          </div>
        </Layer>
        <Layer id="action-creator-layer">
          <ActionCreator id="update-message-action-creator">UpdateMessage Action Creator</ActionCreator>
          <ActionCreator id="delayed-update-message-action-creator">DelayedUpdateMessage Action Creator</ActionCreator>
        </Layer>
        <Layer id="dispatcher-layer">
          <Dispatcher id="dispatcher">Dispatcher</Dispatcher>
        </Layer>
        <Layer id="store-layer">
          <Store id="message-store">
            Message Store
            <p className="store__description">
              The MessageStore contains the message to be displayed in the bar at top.
              The MessageBar React component as being bound to the MessageStore.
              <SourceLink filename="MessageStore.js">View on Github</SourceLink>
            </p>
          </Store>
          <Store id="logger-store">LoggerStore
            <p className="store__description">
              The LoggerStore contains the log of the last 10 actions.
              This is the source used for the data table.
              The AppLog React component as being bound to the LoggerStore.
              <SourceLink filename="LoggerStore.js">View on Github</SourceLink>
            </p>
          </Store>
        </Layer>
      </div>
    )
  }
}
