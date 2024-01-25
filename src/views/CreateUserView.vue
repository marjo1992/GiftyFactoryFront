<script>

import { accountService } from '@/_services';

export default {
    data() {
        return {
            user: {},
            userCreated: false,
            errorMessage: null
        }
    },
    methods: {
        signup() {
            accountService.signup(this.user)
                .then(res => {
                    this.userCreated = true
                })
                .catch(err => {
                    this.errorMessage = err.response.data.message
                    console.log(err)
                })
        }
    }
}

</script>

<template>
    <h1>Nouveau compte</h1>
    <main>
        <div v-if="userCreated">Votre compte a bien été créé</div>
        <div v-else>
            <div class="errorMessage" v-if="errorMessage">{{ errorMessage }}</div>
            <form @submit.prevent="signup">
                <div class="formGroup">
                    <label for="user_username">Nom d'utilisateur</label>
                    <input type="text" id="user_username" v-model="user.username" />
                </div>
                <div class="formGroup">
                    <label for="user_email">Mail</label>
                    <input type="text" id="user_email" v-model="user.email" />
                </div>
                <div class="formGroup">
                    <label for="user_password">Mot de passe</label>
                    <input type="text" id="user_password" v-model="user.password" />
                </div>
                <div class="formGroup">
                    <label for="user_name">Nom</label>
                    <input type="text" id="user_name" v-model="user.name" />
                </div>
                <div class="formGroup">
                    <label for="user_firstname">Prénom</label>
                    <input type="text" id="user_firstname" v-model="user.firstname" />
                </div>
                <div class="formGroup">
                    <label for="user_birthdate">Date de naissance (format aaaa-mm-jj)</label>
                    <input type="text" id="user_birthdate" v-model="user.birthdate" />
                </div>
                <div class="formGroup">
                    <button type="submit" class="button">Créer votre compte</button>
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
</style>
