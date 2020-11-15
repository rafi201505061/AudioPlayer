import React, { createContext, useState, useEffect } from 'react';

const Context = createContext({});

const Provider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const handleChange = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }
  useEffect(() => {
    window.addEventListener('resize', handleChange);
    return ()=>window.removeEventListener('resize',handleChange);
  }, [])
  return <Context.Provider value={{windowSize}}>
    {children}
  </Context.Provider>
}

export {Context,Provider};