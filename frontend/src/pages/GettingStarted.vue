<template>
    <div id="Getting Started">
        <home-logo/>
        <DisplayBox title="Getting started in the galaxy of Ectroverse">
            <div class="getting_started_content" slot="content">
                <div style="text-align: center">This page is a basic guide to new players on how to get started.
                <br>It is important to read this to get the best possible experience when first playing!<br>
                    </div>
                <b>Creating an account:</b><br><a
                    href="#a0">0. Registering the account.</a><br><a href="#a1">1. The user name and faction
                name.</a><br><a href="#a2">2. Joining an empire.</a><br><a href="#a3">3. Choosing your race.</a><br><a
                    href="#a4">4. Completion and logging in.</a><br><br><br><b>Playing the game:</b><br><a href="#b0">0.
                Resources &amp; Buildings.</a><br><a href="#b1">1. Planets.</a><br><a href="#b2">2. Research.</a><br><a
                    href="#b3">3. Military.</a><br><br><br><b>Tips:</b><br><a href="#c0">0. Map generation.</a><br><a
                    href="#c1">1. Fleet page.</a><br><a href="#c2">2. Account page.</a><br><br>
            </div>
        </DisplayBox>
        <DisplayBox title="Creating an account">
            <div class="getting_started_content" slot="content">
                <br><a name="a0"><b><i>0. Registering the account.</i></b></a><br>The great thing about Ectroverse is
                that the signup is simple. You won't need to input your e-mail address and no other activation is
                required.<br><br><a name="a1"><b><i>1. The user name and faction name.</i></b></a><br>Your user name is
                something personal. Other players won't see this.<br>Your Faction name however, is your handle in the
                game. Choose carefully.<br><br><a name="a2"><b><i>2. Joining an Empire.</i></b></a><br>Being part of an
                Empire is one of the most important aspects of the game.<br>You start out small and will need other
                players to grow.<br>Know anyone in the game? Ask them for their empire number and password.<br><br>If
                you want to start an Empire of your own, look at the <a href="rankings?2fix&amp;type=1">Empire
                rankings</a> and pick a number not yet in the list!<br>Want to team up with random players? Leave blank.
                But remember, be a teamplayer and you'll earn a rank in the Empire.<br><br><a name="a3"><b><i>3.
                Choosing your race.</i></b></a><br>You are well on your way to making a name for yourself.<br>But how
                will people remember you? As an aggressive attacker? A proud and rich Energy provider? A self made and
                self sufficient powerhouse?<br><br>Your race will decide which path you will walk.<br><a
                    href="info?2fix&amp;type=races">View the stats for each race here</a>.<br><br><a name="a4"><b><i>4.
                Completion and logging in.</i></b></a><br>Congratulations. You have created an account, chosen an Empire
                to fight for and selected your race.<br>You are now ready to explore, build and fight your way to the
                top.<br><br>
            </div>
        </DisplayBox>
        <DisplayBox title="Playing the game">
            <div class="getting_started_content" slot="content">
                <br><a name="b0"><b><i>0. Resources &amp; Buildings.</i></b></a><br>Your main concern is growth. You
                need to spend your resources by making resources.<br>How do you do that? Simple. Build buildings on your
                planets.<br>There are 4 resources in the galaxy. Energy, Minerals, Crystal and Ectrolium. <br>Most
                buildings need 3 of the 4 resources to be built, so you need to plan your building a bit at the
                start.<br><br><a name="b1"><b><i>1. Planets.</i></b></a><br>Exploring and conquering planets is your way
                of getting to the top.<br>You start out with 4 exploration ships. Send these out into the galaxy to
                colonise planets.<br>Don't worry, you'll be building a lot of them soon enough. Afterall, who is pleased
                with <i>just</i> 4 planets....<br><br><a name="b2"><b><i>2. Research.</i></b></a><br>Get smarter and do
                it smart.<br>Research is a very important aspect of the game.<br>Head over to your Research tab and
                distribute points wisely!<br><br><a name="b3"><b><i>3. Military.</i></b></a><br>A big fleet makes you
                strong, but they also increase your Networth.<br>A higher networth makes it harder to grow.<br>Build up
                your fleet steadily, don't go overboard.<br>And remember, you need to pay upkeep for your little
                Cruisers too!<br><br>
            </div>
        </DisplayBox>
        <DisplayBox title="Tips">
            <div class="getting_started_content" slot="content">
                <br><a name="c0"><b><i>0. Map generation</i></b></a><br>The galaxy map is the place where you'll find
                planets to explore and conquer... But it is easy to lose your way and location.<br>Luckily you can
                generate a map using the Generation page.<br>You can filter away planets that are already owned, that
                are of your Empire or are that of enemies!<br>A usefull tool to say the least.<br><br><a
                    name="c1"><b><i>1. Fleet page.</i></b></a><br>Check your fleet page. In the top right you see <b>"Fleet
                Orders"</b>, select the dropdown and chose <b>"Wait in System"</b> instead of the default one.<br>It is
                easy to forget this option, and spend 10 minutes wondering where your mighty fleet has gone!.<br><br><a
                    name="c2"><b><i>2. Account page.</i></b></a><br>This will here page allows you to alter your Faction
                name when the game hasn't started yet.<br>Once the time starts flowing, you won't be able to change your
                name until the next round has started.<br><br>
            </div>
        </DisplayBox>
    </div>
</template>

<script>
    import HomeLogo from '../components/HomeLogo'
    import DisplayBox from "../components/DisplayBox";

    export default {
        name: "GettingStarted",
        components: {
            DisplayBox,
            HomeLogo,
        }
    }
</script>

<style scoped>

    .getting_started_content{
        color:#FFFFFF;
        font-weight: normal;
        text-align: left;
    }
</style>