<script>

import { accountService } from '@/_services';


export default {
    data() {
        return {
            personId: null,
            person: {},
            personModified: false,
            errorMessage: null
        }
    },
    mounted() {
        this.personId = this.$route.params.id
        accountService.getPerson(this.personId)
                .then(res => {
                    this.person = res.data
                })
    },
    methods: {
        modify() {
            accountService.modifyPerson(this.person, this.personId)
                .then(res => {
                    this.personModified = true
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
    <h1>Modification de personne</h1>
    <main>
        <div v-if="personModified">Le personne a été mise à jour</div>
        <div v-else>
            <div class="errorMessage" v-if="errorMessage">{{ errorMessage }}</div>
            <form @submit.prevent="modify">
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
                    <button type="submit" class="button">Modifier</button>
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
</style>
