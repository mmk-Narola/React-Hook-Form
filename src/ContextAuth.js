import { createContext, useReducer } from "react";

const initialState = {
  token: null,
  isLoading: false,
  message: null,
  error: null,
};

const authContext = createContext(initialState);

const setReducerState = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_PENDING":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        message: payload.message,
      };
    case "LOGIN_FAILED":
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

const Authentication = ({ children }) => {
  const [values, dispatch] = useReducer(setReducerState, initialState);
  const handleLogin = async (payload) => {
    try {
      dispatch({ type: "LOGIN_PENDING" });
      const response = await fetch({
        url: "http://192.168.100.86:3000/auth/login",
        method: "post",
        body: payload,
      });
      const convertedData = await response.json();
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: convertedData.token,
          message: convertedData.message,
        },
      });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED" });
    }
  };
  return (
    <>
      <authContext.Provider
        value={{
          state: values,
          handleLogin,
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
};
