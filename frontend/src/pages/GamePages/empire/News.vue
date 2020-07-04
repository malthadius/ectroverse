<template>
    <GamePage id="news">
        <div id="news_content" slot="content">
            <display-box title="News">
            </display-box>
        </div>
    </GamePage>

</template>

<script>
    import DisplayBox from "../../../components/DisplayBox";
    import GamePage from "../../../components/GamePage";

    export default {
        name: "News",
        components: {
            GamePage,
            DisplayBox,
        },
    }
</script>

<style scoped>
    #news {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #news_content{
        width: 100%;
    }
</style>