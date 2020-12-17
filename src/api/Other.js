export const Other = [
  {
    name: "Rope",
    description: "Useful for crafting",
    needed: [{ name: "String", qty: 2 }],
    actions: ["craft"],
    qty: 1,
  },
  {
    name: "Knife ",
    description: "Small amount of vitamins and water",
    needed: ["Rope", "Flint", "Wood"],
    actions: ["craft"],
  },
  {
    name: "Bow",
    description: "Useful for crafting",
    needed: ["String", "Wood"],
    actions: ["craft"],
  },
  {
    name: "Skinned rabiit",
    needed: ["Dead rabbit"],
    tools: ["Knife"],
    actions: ["craft"],
  },
];
