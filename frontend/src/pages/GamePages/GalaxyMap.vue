<template>
    <GamePage id="galaxy_map">
        <div id="galaxy_map_content" slot="content">
            <display-box title="Galaxy Map">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Galaxy Map",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #galaxy_map {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #galaxy_map_content{
        width: 100%;
    }
</style>