<template>
    <GamePage id="forums">
        <div id="forums_content" slot="content">
            <display-box title="Forums">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Forums",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #forums {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #forums_content{
        width: 100%;
    }
</style>