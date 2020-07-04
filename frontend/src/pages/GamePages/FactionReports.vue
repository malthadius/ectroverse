<template>
    <GamePage id="faction_reports">
        <div id="faction_reports_content" slot="content">
            <display-box title="Faction Reports">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "FactionReports",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #faction_reports {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #faction_reports_content{
        width: 100%;
    }
</style>