import { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = (props) => {
  const [contextState, setState] = useState(globalState);

  // eslint-disable-next-line
  return <GlobalContext.Provider value={{ contextState, setState }}>{props.children}</GlobalContext.Provider>;
};
