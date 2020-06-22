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
                    <a class="nav_item" href="register">Register</a>
                    |
                    <a class="nav_item" href="forum">Forums</a>
                    |
                    <a class="nav_item" href="faq">Faq</a>
                    |
                    <a class="nav_item" href="guide">Guide</a>
                    |
                    <a class="nav_item" href="getting_started">Getting Started</a>
                    |
                    <a class="nav_item" href="hall_of_fame">Hall of fame</a>
                    |
                    <a class="nav_item" href="status">Server</a>
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
