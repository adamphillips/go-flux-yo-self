'use strict';

import React from 'react';

export default class AppLog extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <div id="app-log">
        <table>
          <thead>
            <tr>
              <td>Action</td>
              <td>Log</td>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}
