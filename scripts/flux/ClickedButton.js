'use strict';

import { dispatch } from '../flux/Dispatcher';

export default class ClickedButton {
  constructor(id) {
    this.id = id
  }

  click() {
    dispatch({
      type: 'button/clicked',
      id: this.id
    })
  }
}
