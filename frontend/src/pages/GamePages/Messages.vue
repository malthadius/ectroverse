<template>
    <GamePage id="messages">
        <div id="messages_content" slot="content">
            <display-box title="Messages">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Messages",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #messages {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #messages_content{
        width: 100%;
    }
</style>