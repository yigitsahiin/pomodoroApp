export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "Increment":
      return {
        ...state,
        counter: state.counter + payload,
      };
    case "Decrement":
      return {
        ...state,
        counter: state.counter - payload,
      };
    case "loginUser":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case "logoutUser":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case "changeColorMode":
      return {
        ...state,
        colorMode: payload,
      };
    case "changeTime":
      const { key, value } = payload;
      return {
        ...state,
        time: {
          ...state.time,
          [key]: value,
        },
      };
    case "changeCountDownStatus":
      return {
        ...state,
        isCountingDown: payload,
      };
    default:
      return state;
  }
};
