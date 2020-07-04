<template>
    <GamePage id="research">
        <div id="research_content" slot="content">
            <display-box title="Research">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Research",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #research {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #research_content{
        width: 100%;
    }
</style>