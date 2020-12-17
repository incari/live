export const CampUpgrades = [
  {
    name: "Fire",
    needed: [
      {
        name: "Wood",
        description: "wooddd",
        actions: ["discard"],
        qty: 1,
      },
      { name: "Flint", qty: 1 },
    ],
    description: "Start a fire to cook items",
    actions: ["craft"],
  },
  {
    name: "Water Collector",
    needed: [
      { name: "Plastic", qty: 1 },
      { name: "Rope", qty: 1 },
      { name: "Empty bottle", qty: 1 },
    ],
    description: "Build a water collector to get rain water",
    actions: ["craft"],
  },
];
