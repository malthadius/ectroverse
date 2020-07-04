<template>
    <GamePage id="map_gen">
        <div id="map_gen_content" slot="content">
            <display-box title="Map Generation">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../../components/DisplayBox";
    import GamePage from "../../../components/GamePage";

    export default {
        name: "Map Gen",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #map_gen {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #map_gen_content{
        width: 100%;
    }
</style>