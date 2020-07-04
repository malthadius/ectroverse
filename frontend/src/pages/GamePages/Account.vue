<template>
    <GamePage id="account">
        <div id="account_content" slot="content">
            <display-box title="Account">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Account",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #account {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #account_content{
        width: 100%;
    }
</style>