<template>
    <div class="container">
        <client-only>
            <div v-if="$auth.loggedIn">Zalogowany<br />{{ $auth.user }}</div>
            <div v-else>Niezalogowany</div>
        </client-only>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$echo
            .join(`user.test.presence.${this.$auth.user.id}`)
            .listen("UserTestPresenceChannel", (e) => {
                console.log(`user.test.presence.${this.$auth.user.id}: `);
                console.log(e);
            });

        this.$echo
            .channel("user.test.channel")
            .listen("UserTestChannel", (e) => {
                console.log("user.test.channel:");
                console.log(e);
            });
    },
};
</script>

