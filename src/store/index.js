import { createStore } from 'vuex'

export default createStore({
  state: {
    connectedUser: undefined,
    notifDisplay: false,
    notifMessage: ''
  },
  getters: {
    getNotif: (state) => {
      return state.notifDisplay
    },
    getNotifMessage: (state) => {
      return state.notifMessage
    }
  },
  mutations: {
    setConnectedUser(state, connectedUser) {
        state.connectedUser = connectedUser
    },
    displayNotif(state, payload){
      state.notifDisplay = payload.d
      state.notifMessage = payload.mes
    }
  },
  actions: {
  }
})