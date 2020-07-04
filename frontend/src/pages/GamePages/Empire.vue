<template>
    <GamePage id="empire">
        <div id="empire_content" slot="content">
            <display-box title="Empire">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Empire",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #empire {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #empire_content{
        width: 100%;
    }
</style>