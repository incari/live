import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const useItem = (payload) => {
    setState({
      ...state,
      backpack: state.backpack.filter((items) => items.name !== payload.name),
    });
  };

  const changeStats = (payload) => {
    var newStats = {};
    for (var key in payload) {
      if (state.stats.hasOwnProperty(key)) {
        newStats[key] =
          state.stats[key] + payload[key] > 100
            ? 100
            : state.stats[key] + payload[key];
      }
    }
    setState({
      ...state,
      stats: { ...state.stats, ...newStats },
    });
  };
  return {
    useItem,
    changeStats,
    state,
  };
};

export default useInitialState;
