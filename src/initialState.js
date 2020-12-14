export default {
  stats: {
    hp: 99,
    water: 98,
    food: 98,
    energy: 98,
    days: 0,
  },
  backpack: [
    {
      name: "String",
      description: "Useful for crafting",
      actions: ["discard"],
      qty: 3,
    },
    {
      name: "Berries ",
      description: "Small amount of vitamins and water",
      actions: ["consume", "discard"],
      qty: 1,
    },
    {
      name: "Plastic",
      description: "Useful for crafting",
      actions: ["discard"],
      qty: 2,
    },
  ],
};
