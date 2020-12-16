/* eslint-disable import/no-anonymous-default-export */
export default {
  stats: {
    hp: 100,
    energy: 100,
    water: 100,
    food: 100,
    days: 0,
  },
  backpack: [
    {
      name: "String",
      description: "Useful for crafting",
      actions: ["discard"],
      qty: 2,
    },
    {
      name: "Berries ",
      description: "Small amount of vitamins and water",
      actions: ["consume", "discard"],
      qty: 1,
    },
    {
      name: "Cooked Meat",
      description: "Nothing beats a good steak",
      actions: ["consume", "discard"],
      stats: { food: 20 },
      qty: 1,
    },
    {
      name: "Clean water",
      description: "Safe boiled water to drink",
      actions: ["consume", "discard"],
      stats: { water: 20 },
      qty: 1,
    },
  ],
};
