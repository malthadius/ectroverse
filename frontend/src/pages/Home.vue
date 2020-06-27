<template>
    <div id="home">
        <home-logo/>
        <div id="home_content">
            <NotificationList/>
            <div id="login_and_adverts">
                <login/>
            </div>
        </div>
    </div>
</template>

<script>
    import Login from '../components/Login.vue'
    import HomeLogo from '../components/HomeLogo'
    import NotificationList from "../components/NotificationList";

    export default {
        name: "Home",
        components: {
            NotificationList,
            HomeLogo,
            Login,
        },
    }
</script>

<style scoped>
    #home {
        display: flex;
        flex-direction: column;
        align-items: center; /* align vertical */
        height: 100%;
        width: 100%;
        min-width: 800px;
    }

    #home_content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    #login_and_adverts {
        display: flex;
        flex-direction: column;
        flex: auto;
        max-width: 30%;
    }
</style>