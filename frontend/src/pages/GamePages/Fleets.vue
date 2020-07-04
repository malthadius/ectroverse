<template>
    <GamePage id="fleets">
        <div id="fleets_content" slot="content">
            <display-box title="Fleets">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Fleets",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #fleets {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #fleets_content{
        width: 100%;
    }
</style>