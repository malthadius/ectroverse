<template>
    <GamePage id="market">
        <div id="market_content" slot="content">
            <display-box title="Market">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../components/DisplayBox";
    import GamePage from "../../components/GamePage";

    export default {
        name: "Market",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #market {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #market_content{
        width: 100%;
    }
</style>