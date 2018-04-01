import utils from '@/utils'

export default {
  initInventory ({state, commit}) {
    const startingItems = utils.randomizeItems(state.existingItems, 2)
    startingItems.forEach(item => commit('addInventory', {item}))
  },
  decreaseAsync ({state, commit}, {stat, amount, time}) {
    return new Promise((resolve, reject) => {
      commit('disable')
      if (!state.gameOver) {
        setTimeout(function () {
          commit('enable')
          commit('decrease', {stat, amount})
          resolve()
        }, time)
      } else {
        reject(new Error('game is over'))
      }
    })
  },
  increaseAsync ({state, commit}, {stat, amount, time}) {
    return new Promise((resolve, reject) => {
      commit('disable')
      if (!state.gameOver) {
        setTimeout(function () {
          commit('enable')
          commit('increase', {stat, amount})
          resolve()
        }, time)
      } else {
        reject(new Error('game is over'))
      }
    })
  },
  scavenge ({state, getters, commit}, {time}) {
    return new Promise((resolve, reject) => {
      commit('disable')
      if (!state.gameOver) {
        setTimeout(function () {
          const scavengeableItems = state.existingItems.filter(item => item.action === 'scavenge')

          const numberOfItems = getters.slotsInInventoryLeft > 3 ? 3 : getters.slotsInInventoryLeft

          const newItems = utils.randomizeItems(scavengeableItems, numberOfItems)

          newItems.forEach(item => {
            commit('addInventory', {item})
          })

          commit('decrease', {stat: 'sleep', amount: 5})
          commit('decrease', {stat: 'water', amount: 5})
          commit('decrease', {stat: 'sleep', amount: 3})
          commit('enable')

          resolve(newItems)
        }, time)
      } else {
        reject(new Error('game is over'))
      }
    })
  },
  hunt ({state, commit}, {time}) {
    return new Promise((resolve, reject) => {
      commit('disable')
      if (!state.gameOver) {
        setTimeout(function () {
          const huntableItems = state.existingItems.filter(item => item.action === 'hunt')

          const newItems = utils.randomizeItems(huntableItems, 1)

          newItems.forEach(item => {
            commit('addInventory', {item: item})
          })

          commit('decrease', {stat: 'sleep', amount: 10})
          commit('decrease', {stat: 'water', amount: 10})
          commit('decrease', {stat: 'sleep', amount: 6})
          commit('enable')

          resolve(newItems)
        }, time)
      } else {
        reject(new Error('game is over'))
      }
    })
  },
  removeItemsById ({state, commit}, items) {
    const findItemByName = (itemName) => {
      return state.inventory.find(item => item.id === itemName)
    }

    items.map(findItemByName).forEach(item => {
      commit('removeInventory', item.uid)
    })
  }
}
