<template>
    <GamePage id="empire_rankings">
        <div id="empire_rankings_content" slot="content">
            <display-box title="Empire Rankings">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "EmpireRankings",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #empire_rankings {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #empire_rankings_content{
        width: 100%;
    }
</style>