<template>
    <GamePage id="head_quarters">
        <div id="hq_content" slot="content">
            <display-box title="Headquarters">
                <div class="text" slot="content">
                    <div id="current_date_next_tick">
                        <div id="current_date">
                            Current date : {{current_date}}
                        </div>
                        <div id="next_tick">
                            Next tick : {{next_tick}}
                        </div>
                    </div>
                    <div id="user_faction">
                        <div id="user_name">
                            User <b>{{user_name}}</b>
                        </div>
                        <div id="faction_name">
                            Faction <b>{{faction_name}}</b>
                        </div>
                    </div>
                    <div id="hq_stats">
                        <div id="hq_stats_col_1">
                            <div>Empire: {{empire}}</div>
                            <div>Planets: {{planets}}</div>
                            <div>Population: {{population}}</div>
                            <div>Networth: {{networth}}</div>
                        </div>
                        <div id="hq_stats_col_2">
                            <div>Fleet readiness: {{fr}}%</div>
                            <div>Psychics readiness: {{pr}}%</div>
                            <div>Agents readiness: {{ar}}%</div>
                            <div>Home Planet: {{home_planet}}</div>
                        </div>
                    </div>
                    <div class="genwhite"><i>Message from Administration:</i></div>
                    <div id="admin_msg">
                        {{admin_message}}
                    </div>
                    <b>Message from your Prime Minister</b>
                    <div id="pm_msg">
                        {{prime_minister_message}}
                    </div>
                    <b>No new reports</b>
                    <div id="reports">
                        <router-link to="faction_reports">See all reports</router-link>
                    </div>
                </div>
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Headquarters",
        components: {
            GamePage,
            DisplayBox,
        },
        data () {
            return {
                current_date: "Week 31, year 1",
                next_tick: "20 seconds",
                user_name: 'Xxit',
                faction_name: 'Xxit',
                fr: '85',
                pr: '74',
                ar: '21',
                population: 1239123,
                networth: 132981,
                planets: 31,
                empire: "#25",
                home_planet: "46,34:0",
                admin_message: "If you want some tutoring, message me (the admin @ empire 0). \n" +
                                "Make sure to invite your friends, the more people the more fun!\n" +
                                " Report any bugs found.",
                prime_minister_message: "Welcome to empire #25!"
            }
        }
    }
</script>

<style scoped>
    #head_quarters {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #hq_content{
        width: 100%;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    #current_date_next_tick{
        padding:10px;
    }
    #user_faction{
        padding:10px;
    }
    #hq_stats{
        width:100%;
        justify-content: center;
        display:flex;
        flex-direction: row;
        padding: 10px;
        margin-bottom: 20px;
    }
    #hq_stats_col_1{
        padding-right:50px;
    }
    #admin_msg{
        white-space: pre-line;
        width: fit-content;
        padding: 12px;
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 11px;
        color: #8BC7FF;
        line-height: 125%;
        border: 1px solid #DDDDDD;
        margin: 0 auto 20px;
    }
    #pm_msg{
        margin-bottom:20px;
    }
</style>