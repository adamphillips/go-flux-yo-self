'use strict';

import { dispatch } from '../flux/Dispatcher';

export default class UpdateMessage {
  run = (message) => {
    dispatch({
      type: 'message/updated',
      message: message
    })
  }
}
