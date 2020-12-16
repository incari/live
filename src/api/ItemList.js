export const gatheredItems = [
  {
    name: "Flint",
    description: "Useful for crafting",
    actions: ["discard"],
  },
  {
    name: "Salt",
    description: "Useful to preserve food",
    actions: ["discard"],
  },
  {
    name: "Medicinal herbs",
    description: "Healing properties when brewed",
    actions: ["discard"],
  },
  {
    name: "Dirty Water",
    description: "It will calm your thirst, but might make you sick",
    actions: ["consume", "discard"],
    stats: { water: 20 },
  },
  {
    name: "String",
    description: "Useful for crafting",
    actions: ["discard"],
  },
  {
    name: "Berries ",
    description: "Small amount of vitamins and water",
    actions: ["consume", "discard"],
    stats: { food: 3, water: 4 },
  },
  {
    name: "Plastic",
    description: "Useful for crafting",
    actions: ["discard"],
  },
];

export const MadeItems = [
  {
    name: "Cooked Meat",
    description: "Nothing beats a good steak",
    actions: ["consume", "discard"],
    stats: { food: 20 },
  },
  {
    name: "jerky",
    description: "Dried meat that does not rot",
    actions: ["consume", "discard"],
    stats: { food: 20 },
  },
  {
    name: "Clean water",
    description: "Safe boiled water to drink",
    actions: ["consume", "discard"],
    stats: { water: 20 },
  },
  {
    name: "Medicinal potion",
    description: "Healing properties when brewed",
    actions: ["consume", "discard"],
    stats: { hp: 40, water: 20 },
  },
];
