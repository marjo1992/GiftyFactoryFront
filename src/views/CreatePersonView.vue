<script>

import { accountService } from '@/_services';

export default {
    data() {
        return {
            person: {},
            personCreated: false,
            errorMessage: null
        }
    },
    methods: {
        signup() {
            this.personCreated=null
            accountService.createPerson(this.person)
                .then(res => {
                    this.personCreated = true
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
    <h1>Nouvelle personne</h1>
    <main>
        <div v-if="personCreated">La personne a bien été créé</div>
        <div v-else>
            <div class="errorMessage" v-if="errorMessage">{{ errorMessage }}</div>
            <form @submit.prevent="signup">
                <div class="formGroup">
                    <label for="person_name">Nom</label>
                    <input type="text" id="person_name" v-model="person.name" />
                </div>
                <div class="formGroup">
                    <label for="person_firstname">Prénom</label>
                    <input type="text" id="person_firstname" v-model="person.firstname" />
                </div>
                <div class="formGroup">
                    <label for="person_birthdate">Date de naissance (format aaaa-mm-jj)</label>
                    <input type="text" id="person_birthdate" v-model="person.birthdate" />
                </div>
                <div class="formGroup">
                    <button type="submit" class="button">Créer la personne</button>
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
</style>
