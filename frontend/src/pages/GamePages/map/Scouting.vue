<template>
    <GamePage id="scouting">
        <div id="scouting_content" slot="content">
            <display-box title="Scouting">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../../components/DisplayBox";
    import GamePage from "../../../components/GamePage";

    export default {
        name: "Scouting",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #scouting {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #scouting_content{
        width: 100%;
    }
</style>