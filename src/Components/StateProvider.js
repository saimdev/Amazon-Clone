import { createContext, useContext, useReducer } from "react";
import React from "react";

// prepares the datalayer
export const StateContext = createContext();

// wrap our app and provide the data layer to every component we want
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);

export default StateProvider;
