import P from 'prop-types';
import { createContext, useReducer, useState } from 'react';
import { globalState } from './data';

const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

export const Context = createContext();
// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  // eslint-disable-next-line
  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.protoTypes = {
  children: P.node,
};
