import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./type";

export const incrementCounter = (incrementState:any) => (dispatch:any) => {
  const increase = incrementState + 1;

  return dispatch({
    type: INCREMENT_COUNTER,
    payload: increase,
  });
};

export const decrementCounter = (decrementState:any) => (dispatch:any) => {
  const decrease = decrementState - 1;

  return dispatch({
    type: DECREMENT_COUNTER,
    payload: decrease,
  });
};
