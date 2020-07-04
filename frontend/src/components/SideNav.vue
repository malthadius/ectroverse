<template>
    <div id="side_nav">
        <div id="top_logo"></div>
        <div id="top_logo_bottom">
            <router-link id="headquarters" to="headquarters">Headquarters</router-link>
        </div>
        <div class="side_nav_main" id="side_nav_empire_management">
            <router-link to="council">Council</router-link>
            <router-link to="units">Units</router-link>
            <router-link to="market">Market</router-link>
            <router-link to="planets">Planets</router-link>
            <router-link id="empire_section" to="empire">Empire</router-link>
            <router-link class="sublink" to="empire_forum">- Forum</router-link>
            <router-link class="sublink" to="send_aid">- Send aid</router-link>
            <router-link class="sublink" to="receive_aid">- Receive aid</router-link>
            <router-link class="sublink" to="News">- News</router-link>
            <router-link class="sublink" to="Relations">- Relations</router-link>
            <router-link to="fleets">Fleets</router-link>
            <router-link id="galaxy_section" to="galaxy_map">Galaxy map</router-link>
            <router-link class="sublink" to="full_map">- Full map</router-link>
            <router-link class="sublink" to="map_generation">- Map Gen</router-link>
            <router-link class="sublink" to="scouting">- Scouting</router-link>
            <router-link to="research">Research</router-link>
            <router-link to="operations">Operations</router-link>
        </div>
        <div id="side_nav_divider"></div>
        <div class="side_nav_main" id="side_nav_bottom_management">
            <router-link to="messages">Messages</router-link>
            <router-link to="faction_rankings">Faction rankings</router-link>
            <router-link to="empire_rankings">Empire rankings</router-link>
            <router-link to="forums">Forums</router-link>
            <router-link to="account">Account</router-link>
            <router-link id="logout" to="logout">Logout</router-link>
            <form action="search" method="POST">
                <input type="text" name="search" size="8" value="">
                <input type="submit" size="2" value="OK">
            </form>
            <a id="discord" href="https://discord.gg/8Pkpqtd?2fix">Discord</a>
            <router-link to="Guide">Guide</router-link>
            <a href="https://web.facebook.com/groups/803616616363658?2fix">Facebook</a>
        </div>
        <div id="side_nav_bottom"></div>
        <div id="side_nav_bottom_logo"></div>
    </div>
</template>

<script>
    export default {
        name: "SideNav"
    }
</script>

<style scoped>

    #side_nav{
        margin-top: 15px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        width: 155px;
        height: 100%;
        font-weight: bold;
        font-size: 13px;
        text-align: left;
        font-family: Tahoma,serif;
        color: #C0D0D8;
    }

    #top_logo{
        width: 150px;
        height: 40px;
        background-image: url('../assets/side_nav_images/i18.jpg');
    }
    #top_logo_bottom{
        width: 150px;
        height: 20px;
        background-image: url('../assets/side_nav_images/i23.jpg');

    }
    #headquarters{
        vertical-align: sub;
    }
    #logout{
        padding-bottom: 16px;
    }
    #discord{
        padding-top: 10px;
    }
    .sublink{
        padding-left: 8px;
    }
    .side_nav_main{
        display: flex;
        flex-direction: column;
        width: 150px;
        background-image: url('../assets/side_nav_images/i36.jpg');
    }
    #empire_section{
        display: flex;
        flex-direction: column;
    }
    #galaxy_section{
        display: flex;
        flex-direction: column;

    }
    #side_nav_empire_management{
        height: 272px;
    }
    #side_nav_bottom_management{
        height: 193px
    }
    #side_nav_divider{
        width: 150px;
        height: 15px;
        padding-bottom: 3px;
        background-image: url('../assets/side_nav_images/i53.jpg');
    }
    #side_nav_bottom{
        width: 150px;
        height: 20px;
        background-image: url('../assets/side_nav_images/i55.jpg');
    }
    #side_nav_bottom_logo{
        width: 150px;
        height: 75px;
        background-image: url('../assets/side_nav_images/i56.jpg');
    }
</style>
