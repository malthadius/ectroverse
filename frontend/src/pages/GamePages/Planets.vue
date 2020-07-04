<template>
    <GamePage id="planets">
        <div id="planets_content" slot="content">
            <display-box title="Planets">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Planets",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #planets {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #planets_content{
        width: 100%;
    }
</style>