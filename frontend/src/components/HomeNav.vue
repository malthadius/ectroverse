<template>
    <table id="home_nav">
        <tbody>
        <tr>
            <td id="users_online">
                <span id="u_online">
                    {{u_online}} of {{u_activated}} players online
                </span>
            </td>
            <td>
                <b>
                    <router-link class="nav_item" to="/">Main</router-link>
                    |
                    <router-link class="nav_item" to="/register">Register</router-link>
                    |
                    <router-link class="nav_item" to="/forum">Forums</router-link>
                    |
                    <router-link class="nav_item" to="/faq">FAQ</router-link>
                    |
                    <router-link class="nav_item" to="/guide">Guide</router-link>
                    |
                    <router-link class="nav_item" to="/getting_started">Getting Started</router-link>
                    |
                    <router-link class="nav_item" to="/hall_of_fame">Hall Of Fame</router-link>
                    |
                    <router-link class="nav_item" to="/server_status">Server Status</router-link>
                </b>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "HomeNav",
        data () {
            return {
                u_online: 7,
                u_activated: 20
            }
        }
    }
</script>

<style scoped>

    #home_nav{
        position: relative;
        z-index: 2;
        font-size: 12px;
        font-family: verdana,geneva,arial,helvetica,sans-serif;
    }
    #users_online {
        color: #C0D0D8;
        padding: 1px;
    }
    .nav_item {
        padding: 1px;
        text-decoration: none;
        color: #FFFFFF;
    }

</style>
