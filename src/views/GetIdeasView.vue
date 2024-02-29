<script>

import { accountService } from '@/_services';

export default {
    data() {
        return {
            personId: null,
            recipient: {},
            ideas: null
        }
    },
    mounted() {

        this.personId = this.$route.params.id

        accountService.getPerson(this.personId)
                .then(res => {
                    this.recipient = res.data
                })

        
        accountService.getIdeasFor(this.personId)
                .then(res => {
                    this.ideas = res.data

                    this.ideas.forEach(idea => {
                            idea.otherRecipients = []
                            idea.recipientsId.filter(rId=>rId != this.personId)
                                        .map(rId => accountService.getPerson(rId).then(res => { idea.otherRecipients.push(res.data) }))
                            
                    })
                })

	}
}

</script>

<template>
    <h1>Les idées cadeaux pour {{ recipient.name }} {{ recipient.firstname }}</h1>
    <main>
        <div v-if="!ideas">Aucune idée cadeaux</div>
        <div class="ideas" v-else>
            <div class="idea-block" v-for="idea in ideas">
                <div><label>Nom :</label><label>{{ idea.name }}</label></div>
                <div v-if="idea.urlLink"><label>Lien :</label><label><a :href="idea.urlLink" target="_blank">le lien</a></label></div>
                <div v-if="idea.eventId"><label>Evénement :</label><label>{{ idea.eventId }}</label></div>
                <div v-if="idea.price"><label>Prix :</label><label>{{ idea.price }} €</label></div>
                <div v-if="idea.otherRecipients.length > 0"><label>Autres destinataire(s) :</label><li v-for="r in idea.otherRecipients">{{ r.name }} {{ r.firstname }}</li></div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.ideas {
    display: flex;
    gap:1em;
}
.idea-block {
    border: 1px solid cadetblue;
    padding: 1rem;
    border-radius: 10px;
    background-color: aliceblue;
    width: 200px;
}

</style>
