<template>
    <GamePage id="council">
        <div id="council_content" slot="content">
            <display-box title="Council">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Council",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #council {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #council_content{
        width: 100%;
    }
</style>