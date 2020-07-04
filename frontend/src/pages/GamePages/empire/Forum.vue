<template>
    <GamePage id="forum">
        <div id="forum_content" slot="content">
            <display-box title="Forum">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../../components/DisplayBox";
    import GamePage from "../../../components/GamePage";

    export default {
        name: "Forum",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #forum {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #forum_content{
        width: 100%;
    }
</style>