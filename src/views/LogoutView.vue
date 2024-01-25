<script>

import { accountService } from '@/_services'

export default {
    data() {
        return {
        }
    },
    methods: {
        logout() {
            accountService.logout()
            this.$router.push({name:"gifty"})
        }
    }
}

</script>

<template>
    <h1>Logout</h1>
    <main>

        <div>
        <form @submit.prevent="logout">
            <div class="formGroup">
                <button type="submit" class="button">Déconnexion</button>
            </div>
        </form>
    </div>
    </main>
</template>

<style></style>