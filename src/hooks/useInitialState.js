import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const discardItem = (payload) => {
    setState({
      ...state,
      backpack: state.backpack.filter((items) => items.name !== payload.name),
    });
  };

  const changeHp = (payload) => {
    setState({
      ...state,
      stats: [...state.stats.hp, payload],
    });
  };
  return {
    discardItem,
    changeHp,
    state,
  };
};

export default useInitialState;
