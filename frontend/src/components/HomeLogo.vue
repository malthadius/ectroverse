<template>
    <div id="home_header">
        <div id="logo_lines_top" class="logo_lines"></div>
        <div class="logo">
        </div>
        <div id="logo_lines_bottom" class="logo_lines">
            <home-nav/>
        </div>
    </div>
</template>

<script>
    import HomeNav from "./HomeNav";
    export default {
        name: "HomeLogo",
        components: {
            HomeNav
        }
    }
</script>

<style scoped>
    #home_header {
        position:relative;
        width: 100%;
        padding-top: 10px;
    }
    .logo{
        height: 330px;
        width: 800px;
        background-image: url('../assets/combined_logo.png');
        background-repeat: no-repeat;
        background-position: top center;
        position: relative;
        margin: auto;
        z-index: 1;
    }
    .logo_lines {
        background-image: url('../assets/logo_lines.png');
        width: 100%;
        height: 80px;
        min-width: 800px;
        position: absolute;
    }
    #logo_lines_top {
        top: 89px;
        z-index: 0;
    }
    #logo_lines_bottom{
        top: 263px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
