<script>
import { RouterLink, RouterView } from 'vue-router'
import { accountService } from '@/_services'
import { mapState } from 'vuex'

export default {
    mounted() {
        accountService.loadAndGetConnectedUser()
    },
    computed: {
        ...mapState({
            username: state => state.connectedUser
        })
    }
}

</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink :to="{name: 'gifty'}">Gifty</RouterLink>
                <RouterLink :to="{name: 'createUser'}">Créer un user</RouterLink>
                <RouterLink :to="{name: 'login'}">Login</RouterLink>
                <RouterLink :to="{name: 'userInfo'}">Mon profil</RouterLink>
                <RouterLink :to="{name: 'searchUser'}">Rechercher une personne</RouterLink>
                <RouterLink :to="{name: 'createPerson'}">Créer une personne</RouterLink>
                <RouterLink :to="{name: 'createIdea'}">Créer une idée</RouterLink>
                <RouterLink :to="{name: 'logout'}">Logout</RouterLink>
            </nav>
        </div>

        <div v-if="username"> Vous êtes connecté en tant que {{ username }}</div>
        <div v-else> Vous n'êtes pas connecté</div>
    </header>

    <RouterView />
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: cornflowerblue;
}

nav {
    display: flex;
    flex-direction: row;
    gap: 20px;

    a {
        color: coral;
        text-decoration: none;
    }
}

</style>
