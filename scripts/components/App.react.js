'use strict';

import React from 'react';

import AppContainer from './AppContainer.react';
import AppLog from './AppLog.react';

export default class App extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <div>
        <AppContainer />
        <AppLog />
      </div>
    )
  }
}
