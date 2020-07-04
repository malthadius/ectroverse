<template>
    <GamePage id="faction_rankings">
        <div id="faction_rankings_content" slot="content">
            <display-box title="Faction Rankings">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "FactionRankings",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #faction_rankings {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #faction_rankings_content{
        width: 100%;
    }
</style>