import React, { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config";

// Creating an AuthContext using the createContext() function
export const AuthContext = createContext();

// authReducer returns the new state based on an action
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // When a user logs in, return a new state object with the user set
      return { ...state, user: action.payload };

    case "LOGOUT":
      // When a user logs out, return a new state object with the user set to null
      return { ...state, user: null };
    case "AUTH_IS_READY":
      // When the auth state is ready, return a new state object with the user and authIsReady set
      return {
        ...state,
        user: action.payload,
        authIsReady: true,
      };

    default:
      // For any other action type, return the current state unchanged
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  // Using the useReducer() hook to manage the state with authReducer function
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  // useEffect() hook to set up a listener for changes in the authentication state
  useEffect(() => {
    // Using the onAuthStateChanged() method from Firebase to listen for changes in authentication state
    const cleanUp = projectAuth.onAuthStateChanged((user) => {
      // Dispatch an action to update the state when the auth state is ready
      dispatch({ type: "AUTH_IS_READY", payload: user });
      // Call the cleanUp function to unsubscribe from the listener when the component unmounts
      cleanUp();
    });
  }, []);

  // Log the current state to the console for debugging purposes
  // console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
