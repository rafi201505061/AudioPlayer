
import React,{ createContext, useReducer } from 'react';
const CreateContext = (reducer, actions, initialValue) => {

  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const boundActions = [];
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return <Context.Provider value={{ state, ...boundActions }}>
      {children}
    </Context.Provider>
  }

  return { Context, Provider };
}
export default CreateContext;