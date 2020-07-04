<template>
    <GamePage id="head_quarters">
        <div id="hq_content" slot="content">
            <display-box title="Headquarters">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Headquarters",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #head_quarters {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #hq_content{
        width: 100%;
    }
</style>