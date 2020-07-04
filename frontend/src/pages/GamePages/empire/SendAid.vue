<template>
    <GamePage id="send_aid">
        <div id="send_aid_content" slot="content">
            <display-box title="Send Aid">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../../components/DisplayBox";
    import GamePage from "../../../components/GamePage";

    export default {
        name: "SendAid",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #send_aid {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #send_aid_content{
        width: 100%;
    }
</style>