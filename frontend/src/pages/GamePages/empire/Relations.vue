<template>
    <GamePage id="relations">
        <div id="relations_content" slot="content">
            <display-box title="Relations">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../../components/DisplayBox";
    import GamePage from "../../../components/GamePage";

    export default {
        name: "Relations",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #relations {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #relations_content{
        width: 100%;
    }
</style>