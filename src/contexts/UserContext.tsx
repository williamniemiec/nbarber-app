/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useReducer, createContext } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';


export const UserContext = createContext({
  ...initialState,
  dispatch: (props: any) => {},
});

export default ({children}: any) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{...state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
