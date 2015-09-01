'use strict';

import ActionTypes from './ActionTypes';

export type Action =
  {
    type: ActionTypes.MESSAGE_UPDATED,
    message: string,
  };
