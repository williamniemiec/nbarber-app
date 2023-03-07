/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const initialState = {
  avatar: '',
  favorites: [],
  appointments: []
};

export const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_AVATAR':
      return { ...state, avatar: action.payload.avatar };
    default:
      return state;
  }
};
