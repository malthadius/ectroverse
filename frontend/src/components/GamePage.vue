<template>
    <div id="game_page">
        <side-nav></side-nav>
        <div id="page_content">
            <top-nav></top-nav>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    import TopNav from '../components/TopNav'
    import SideNav from "../components/SideNav";

    export default {
        name: "GamePage",
        components: {
            SideNav,
            TopNav
        },
    }
</script>

<style scoped>
    #game_page {
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    #page_content{
        width: 100%;
    }
</style>