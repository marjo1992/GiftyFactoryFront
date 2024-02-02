<script>

import { accountService } from '@/_services';


export default {
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        accountService.getUserInfos()
            .then(res => {
                this.user = res.data
            })
    }
}

</script>

<template>
    <h1>Mon profil</h1>
    <main>
        <div>
            <div class="formGroup">
                <label for="user_username">Pseudo</label>
                <label>{{ user.username }}</label>
            </div>
            <div class="formGroup">
                <label for="user_email">Mail</label>
                <label>{{ user.email }}</label>
            </div>
            <div class="formGroup">
                <label for="user_picture">Image</label>
                <label>{{ user.picture }}</label>
            </div>
           <div class="formGroup">
                <label for="person_name">Nom</label>
                <label>{{ user.person?.name }}</label>
            </div>
            <div class="formGroup">
                <label for="person_firstname">Firstname</label>
                <label>{{ user.person?.firstname }}</label>
            </div>
            <div class="formGroup">
                <label for="person_birthdate">Date de naissance</label>
                <label>{{ user.person?.birthdate }}</label>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
