export const Actions = [
  {
    name: "Sleep",
    description: "Rest to replenish your energy",
    statsDescription: "+35 energy",
    stats: {
      energy: 35,
    },
  },
  {
    name: "Hunt",
    description: "Hunt for food and fur to craft equiment",
    statsDescription: "-10 energy, -10 water, -6 food",
    stats: {
      energy: -10,
      water: -10,
      food: -6,
    },
  },
  {
    name: "Scavenge",
    description: "Find useful items to survive",
    statsDescription: "-5 energy, -5 water, -3 food",
    stats: {
      energy: -5,
      water: -5,
      food: -3,
    },
  },
];
