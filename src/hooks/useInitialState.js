import { useState } from "react";
import initialState from "../initialState";
import { gatheredItems } from "../api/GatheredItems";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const DiscardItem = (payload) => {
    if (!payload.qty) return;
    if (payload.qty === 1) {
      setState({
        ...state,
        backpack: state.backpack.filter((items) => items.name !== payload.name),
      });
    } else {
      state.backpack.find((item) => item === payload).qty = payload.qty - 1;
      setState({
        ...state,
      });
    }
  };

  const UseAction = (payload) => {
    const act = {};
    const usedAction = payload.stats;
    for (var key in usedAction) {
      if (state.stats.hasOwnProperty(key)) {
        act[key] =
          state.stats[key] + usedAction[key] > 100
            ? 100
            : state.stats[key] + usedAction[key];
      }
    }
    if (state.stats.time + usedAction.time >= 23) {
      act.days = state.stats.days + 1;
      act.time = act.time - 24;
    }
    console.log(act);

    switch (payload.name) {
      case "Gatherer":
        const backpack = [...state.backpack];
        const random = Math.floor(
          Math.random() * Object.keys(gatheredItems).length
        );
        const maxCapacity = 100; // to be upgraded in next iteration
        let count = 0;
        backpack.forEach((item) => {
          count = count + item.qty;
        });
        if (count >= maxCapacity) return;

        const itemFound = gatheredItems[random];
        if (!backpack.find((item) => item.name === itemFound.name)) {
          itemFound.qty = 1;
          backpack.push(itemFound);
        } else {
          backpack.find((item) => item.name === itemFound.name).qty =
            backpack.find((item) => item.name === itemFound.name).qty + 1;
        }
        setState({
          ...state,
          stats: { ...state.stats, ...act },
          backpack: backpack,
        });
        break;

      default:
        setState({
          ...state,
          stats: { ...state.stats, ...act },
        });
        break;
    }
  };

  const ConsumeItem = (payload) => {
    const consumedItem = {};
    const itemStats = payload.stats || {};
    // Change stats
    for (const key in itemStats) {
      if (state.stats.hasOwnProperty(key)) {
        consumedItem[key] =
          state.stats[key] + itemStats[key] > 100
            ? 100
            : state.stats[key] + itemStats[key];
      }
    }
    // Remove from backpack
    if (!payload.qty) return;
    const itemExist = state.backpack.find((item) => item.name === payload.name);
    if (!itemExist) return;

    if (itemExist.qty - payload.qty <= 0) {
      setState({
        ...state,
        stats: { ...state.stats, ...consumedItem },
        backpack: state.backpack.filter((item) => item.name !== payload.name),
      });
    } else {
      let a = state.backpack.find((item) => item.name === payload.name);
      state.backpack.find((item) => item.name === payload.name).qty =
        a.qty - payload.qty;
      setState({
        ...state,
        stats: { ...state.stats, ...consumedItem },
      });
    }
  };

  const CraftItem = (payload) => {
    payload.needed.forEach((item) => {
      ConsumeItem(item);
    });
  };
  return {
    state,
    UseAction,
    DiscardItem,
    ConsumeItem,
    CraftItem,
  };
};

export default useInitialState;
