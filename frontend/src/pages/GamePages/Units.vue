<template>
    <GamePage id="units">
        <div id="units_content" slot="content">
            <display-box title="Units">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Units",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #units {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #units_content{
        width: 100%;
    }
</style>