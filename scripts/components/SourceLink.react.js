'use strict';

import React from 'react';

const sourceRoot = 'https://github.com/adamphillips/go-flux-yo-self/blob/master/scripts/flux/';

export default class SourceLink extends React.Component<{}, Props, State> {
  render() : ?ReactElement {
    return (
      <a id={this.props.id} className="source-link" href={this.url}>
        {this.props.children}
      </a>
    )
  }

  get url() {
    return sourceRoot + this.props.filename;
  }
}
