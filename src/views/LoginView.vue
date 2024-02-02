<script>

import { accountService } from '@/_services'

export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            accountService.login(this.user)
                .then(res => {
                    accountService.saveToken(res.data.accessToken)
                    accountService.saveConnectedUser(this.user.username)
                    this.$router.push({name:"userInfo"})
                })
                .catch(err => console.log(err))
        }
    }
}


</script>

<template>
    <h1>Login</h1>
    <main>

        <div>
        <form @submit.prevent="login">
            <div class="formGroup">
                <label for="user_username">Nom d'utilisateur</label>
                <input type="text" id="user_username" v-model="user.username"/>
            </div>
            <div class="formGroup">
                <label for="user_password">Mot de passe</label>
                <input type="text" id="user_password" v-model="user.password"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Connexion</button>
            </div>
        </form>
    </div>
    </main>
</template>

<style></style>