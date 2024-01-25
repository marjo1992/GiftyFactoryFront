<script>

import { accountService } from '@/_services'

export default {
    data() {
        return {
            user: {
                name: null,
                firstname: null,
                birthdate: null
            },
            persons: null,
            errorMessage: null
        }
    },
    methods: {
        search() {
            this.persons = null
            this.errorMessage = null
            accountService.searchUserByName(this.user.name, this.user.firstname, this.user.birthdate)
                .then(res => {
                    if (res.data.length) {
                        this.persons = res.data
                        console.log(this.persons)
                    } else {
                        this.errorMessage = "pas de résultats"
                    }
                })
                .catch(err => {
                    this.errorMessage = err
                    console.log(err)
                })
        }
    }
}


</script>

<template>
    <h1>Rechercher une personne</h1>
    <main>
        <div>
            <form @submit.prevent="search">
                <div class="formGroup">
                    <label for="user_name">Nom</label>
                    <input type="text" id="user_name" v-model="user.name" />
                </div>
                <div class="formGroup">
                    <label for="user_firstname">Prénom</label>
                    <input type="text" id="user_firstname" v-model="user.firstname" />
                </div>
                <div class="formGroup">
                    <label for="user_birthdate">Date de naissance</label>
                    <input type="text" id="user_birthdate" v-model="user.birthdate" />
                </div>
                <div class="formGroup">
                    <button type="submit" class="button">Rechercher</button>
                </div>
            </form>
        </div>
        <div v-if="persons">
            <li v-for="person in persons">
                {{ person.firstname }}
            </li>
        </div>
        <div class="errorMessage" v-if="errorMessage">
            {{ errorMessage }}
        </div>
    </main>
</template>


<style scoped>
</style>