import Axios from './caller.service'
import store from '../store'

let login = (user) => {
    return Axios.post('/auth/signin', user)
}

let logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('connectedUser')
    store.commit('setConnectedUser', undefined)
}

let getToken = () => {
    return localStorage.getItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let getConnectedUser = () => {
    return localStorage.getItem('connectedUser')
}

let saveConnectedUser = (connectedUser) => {
    localStorage.setItem('connectedUser', connectedUser)
    store.commit('setConnectedUser', connectedUser)
}

let loadAndGetConnectedUser = () => {
    let connectedUser = getConnectedUser()
    store.commit('setConnectedUser', connectedUser)
    return connectedUser
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let searchUserByName = (name, firstname, birthdate) => {
    const map = { "name": name, "firstname": firstname, "birthdate": birthdate };
    let searchFields = Object.entries(map)
        .filter(([k, v]) => v)
        .map(([k, v]) => `${k}=${v}`)
        .join("&")
    return Axios.get('/person/searchexact?' + searchFields)
}

let signup = (user) => {
    return Axios.post('/auth/signup', user)
}

export const accountService = {
    login,
    logout,
    saveToken,
    saveConnectedUser,
    getToken,
    getConnectedUser,
    loadAndGetConnectedUser,
    isLogged,
    searchUserByName,
    signup
}
