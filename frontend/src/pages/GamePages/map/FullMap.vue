<template>
    <GamePage id="full_map">
        <div id="full_map_content" slot="content">
            <display-box title="Full Map">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../../components/DisplayBox";
    import GamePage from "../../../components/GamePage";

    export default {
        name: "Full Map",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #full_map {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #full_map_content{
        width: 100%;
    }
</style>