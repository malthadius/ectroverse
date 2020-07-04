<template>
    <GamePage id="operations">
        <div id="operations_content" slot="content">
            <display-box title="Operations">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Operations",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #operations {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #operations_content{
        width: 100%;
    }
</style>