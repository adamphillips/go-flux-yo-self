'use strict';

import { dispatch } from '../flux/Dispatcher';

import UpdateMessage from '../flux/UpdateMessage';

export default class DelayedUpdateMessage {
  run = (message) => {
    var updater = new UpdateMessage();
    updater.run('Preparing to update message');

    setTimeout(() => {
      var updater = new UpdateMessage();
      updater.run(message);
    }, 1000)
  }
}
