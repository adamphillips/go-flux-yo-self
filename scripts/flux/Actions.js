'use strict';

import ActionTypes from './ActionTypes';

export type Action =
  {
    type: ActionTypes.BUTTON_CLICKED,
    id: string,
  };
