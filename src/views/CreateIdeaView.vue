<script>

import { accountService } from '@/_services';

export default {
    data() {
        return {
            eligibleRecipients: [],
            idea: {},
            ideaCreated: true,
            errorMessage: null
        }
    },
    mounted() {
        this.ideaCreated = false

        accountService.getConnectedPerson()
            .then(res => {
                console.log("toto", res.data)
                this.eligibleRecipients.push(res.data)
            })
            .catch(err => {
                this.errorMessage = err.response.data.message
                console.log(err)
            })
                
        accountService.getPersonsOwnedByConnectedUser()
            .then(res => res.data.forEach(r => this.eligibleRecipients.push(r)))
            .catch(err => {
                this.errorMessage = err.response.data.message
                console.log(err)
            })
	},
    methods: {
        createIdea() {
            accountService.createIdea(this.idea)
                .then(res => {
                    this.ideaCreated = true
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
    <h1>Nouvelle idée</h1>
    <main>
        <div v-if="ideaCreated">Votre idée a bien été créé</div>
        <div v-else>
            <div class="errorMessage" v-if="errorMessage">{{ errorMessage }}</div>
            <form @submit.prevent="createIdea">
                <div class="formGroup">
                    <label for="user_name">Nom</label>
                    <input type="text" id="user_name" v-model="idea.name" />
                </div>
                <div class="formGroup">
                    <label for="user_url_link">Lien</label>
                    <input type="text" id="user_url_link" v-model="idea.urlLink" />
                </div>
                <div class="formGroup">
                    <label for="idea_event_id">Evénement</label>
                    <input type="text" id="idea_event_id" v-model="idea.eventId" />
                </div>
                <div class="formGroup">
                    <label for="idea_price">Prix</label>
                    <input type="text" id="idea_price" v-model="idea.price" />
                </div>
                <div class="formGroup">
                    <label for="idea_recipients">Destinataire(s)</label>
                    <select id="idea_recipients" v-model="idea.recipientsId" multiple>
                        <option v-for="option in eligibleRecipients" :value="option.id">{{ option.name }} {{ option.firstname }}</option>
                    </select>
                </div>
                <div class="formGroup">
                    <button type="submit" class="button">Créer votre idée</button>
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
</style>
