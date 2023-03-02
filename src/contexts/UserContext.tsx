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
