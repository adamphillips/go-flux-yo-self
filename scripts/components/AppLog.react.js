'use strict';

import React from 'react';
import LoggerStore from '../flux/LoggerStore';

var Container = require('flux/utils').Container;

export class AppLog extends React.Component<{}, Props, State> {
  static getStores(): Array<Store> {
    return [LoggerStore];
  }

  static calculateState(prevState: ?State): State {
    console.log('checking state');
    return {
      log: LoggerStore.getState()
    }
  }

  render() : ?ReactElement {
    const results = [];
    for (var x in this.state.log) {
      var entry = this.state.log[x];
      results.push(
        <tr key={x}>
          <td>{entry.type}</td>
          <td>{entry.data}</td>
        </tr>
      );
    }

    return (
      <div id={this.props.id}>
        <table>
          <thead>
            <tr>
              <td>Type</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            {results}
          </tbody>
        </table>
      </div>
    )
  }
}

var contained = Container.create(AppLog);
export default contained;
