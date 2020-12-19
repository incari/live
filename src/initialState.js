/* eslint-disable import/no-anonymous-default-export */
export default {
  stats: {
    hp: 100,
    energy: 100,
    water: 100,
    food: 100,
    days: 0,
    time: 6,
  },
  backpack: [
    {
      name: "Berries ",
      description: "Small amount of vitamins and water",
      actions: ["consume", "discard"],
      stats: { food: 3, water: 4 },
      qty: 3,
    },
    {
      name: "Flint",
      needed: ["Clean water", "Medicinal herbs"],
      actions: ["discard"],
      qty: 2,
    },
    {
      name: "String",
      description: "Useful for crafting",
      actions: ["discard"],
      qty: 2,
    },
    {
      name: "Wood",
      description: "wooddd",
      actions: ["discard"],
      qty: 2,
    },
  ],
};
