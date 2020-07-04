<template>
    <div class="nav_text" id="top_nav">
        <div id="left_bookend"></div>
        <div id="center">
            <div id="top">
                <div id="top_left_bookend"></div>
                <div id="top_center">
                    <div class="top_nav_text" id="networth">Networth: {{networth}}</div>
                    <div class="top_nav_text" id="next_tick">Next Tick: {{next_tick}}</div>
                    <div class="top_nav_text" id="population">Population: {{population}}</div>
                </div>
                <div id="top_right_bookend"></div>
            </div>
            <div id="bottom_row">
                <router-link id=icons to="headquarters">
                    <div id="mail_icon"></div>
                    <div id="build_icon"></div>
                    <div id="aid_icon"></div>
                    <div id="fleet_icon"></div>
                    <div id="slant_img"></div>
                </router-link>
                <div id="bottom_center">
                    <div id="left_resources">
                        <div class="resource_text" id="Energy">Energy: {{energy}}</div>
                        <div class="resource_text" id="Mineral">Mineral: {{mineral}}</div>
                    </div>
                    <div id="right_resources">
                        <div class="resource_text" id="Crystal">Crystal: {{crystal}}</div>
                        <div class="resource_text" id="Ectrolium">Ectrolium: {{ectrolium}}</div>
                    </div>
                </div>
                <div id="bottom_right_bookend"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopNav",
        data () {
            return {
                networth: 7290193,
                population: 2013809312,
                next_tick: "10 seconds",
                energy: 712312432,
                mineral: 3411212,
                crystal: 21301,
                ectrolium: 1231314,
            }
        }
    }
</script>

<style scoped>

    #top_nav{
        display: flex;
        flex-direction: row;
    }
    #left_bookend {
        width: 35px;
        height: 63px;
        background-image: url('../assets/top_nav_images/i02.jpg');
    }
    #center {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    /* Top row of nav bar section*/
    #top {
        display: flex;
        flex-direction: row;
    }
    #top_left_bookend{
        width: 41px;
        height: 21px;
        background-image: url('../assets/top_nav_images/i03.jpg');
    }
    #top_center{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 21px;
        justify-content: center;
        align-items: center; /* align vertical */
        background-image: url('../assets/top_nav_images/i05.jpg');
    }
    #networth{
        float: left;
        width: 33%;
    }
    #next_tick{
        width: 33%;
    }
    #population{
        float: right;
        width: 33%;;
    }
    #top_right_bookend {
        width: 78px;
        height: 21px;
        background-image: url('../assets/top_nav_images/i07.jpg');
    }

    /* Bottom row of nav bar section*/
    #bottom_row{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #icons{
        display: flex;
        flex-direction: row;
        height: 42px;
        width: auto;
    }
    #mail_icon{
        height: 42px;
        width: 41px;
        background-image: url('../assets/top_nav_images/i09.jpg');
    }
    #build_icon{
        height: 42px;
        width: 40px;
        background-image: url('../assets/top_nav_images/i10.jpg');

    }
    #aid_icon{
        height: 42px;
        width: 39px;
        background-image: url('../assets/top_nav_images/i11.jpg');
    }
    #fleet_icon{

        height: 42px;
        width: 39px;
        background-image: url('../assets/top_nav_images/i12.jpg');
    }
    #slant_img {
        height: 42px;
        width: 18px;
        background-image: url('../assets/top_nav_images/i13.jpg');
    }
    #bottom_center {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 42px;
        background-image: url('../assets/top_nav_images/i15.jpg');
    }
    #left_resources{
        display: flex;
        flex-direction: column;
        width: 50%
    }
    #right_resources{
        display: flex;
        flex-direction: column;
        width: 50%
    }
    #bottom_right_bookend {
        width: 49px;
        height: 42px;
        background-image: url('../assets/top_nav_images/i17.jpg');
    }
    .nav_text{
      font-family: verdana,geneva,arial,helvetica,sans-serif;
      color: #C0D0D8;
      font-weight: bold;
    }
    .top_nav_text {
      font-size: 11px;
      text-align: center;
    }
    .resource_text{
        font-size: 11px;
        text-align: center;
        justify-content: center;
        padding: 2px;
        align-items: center; /* align vertical */
    }
</style>
