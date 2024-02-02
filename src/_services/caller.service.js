import axios from 'axios'
import { accountService } from '@/_services'
import store from '@/store'

const Axios = axios.create({
    baseURL: 'http://localhost:8081/api'
})

/**
 * Interceptor for token injection
 */
Axios.interceptors.request.use(request => {

    // If connected, add token to header
    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }
    return request
})

/**
 * Interceptor of API responses
 */
Axios.interceptors.response.use(response => {
    return response
}, error => {

    console.log(error)

    if (!error.response) {
        // Error rzo
        store.commit('displayNotif', { d: true, mes: error })
        return Promise.reject(error)
    } else {
        if (error.response.status == 401) {
            accountService.logout()
            return Promise.reject(error.response.data.message)
        } else {
            // Error from API
            store.commit('displayNotif', { d: true, mes: error.response.data.message })
            return Promise.reject(error)
        }
    }
})

export default Axios