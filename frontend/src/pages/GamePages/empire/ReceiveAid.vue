<template>
    <GamePage id="receive_aid">
        <div id="receive_aid_content" slot="content">
            <display-box title="Receive Aid">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../../components/DisplayBox";
    import GamePage from "../../../components/GamePage";

    export default {
        name: "ReceiveAid",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #receive_aid {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #receive_aid_content{
        width: 100%;
    }
</style>