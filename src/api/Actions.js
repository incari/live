export const Actions = [
  {
    name: "Sleep",
    description: "Rest to replenish your energy",
    statsDescription: "+35 energy, -8 water, -10 food",
    stats: {
      energy: 35,
      water: -8,
      food: -10,
      time: 8,
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
      time: 6,
    },
  },
  {
    name: "Gatherer",
    description: "Find useful items to survive",
    statsDescription: "-5 energy, -5 water, -3 food",
    stats: {
      energy: -5,
      water: -5,
      food: -3,
      time: 4,
    },
  },
];
