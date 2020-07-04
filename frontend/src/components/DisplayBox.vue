<template>
    <div class="display_box_wrapper">
        <div class="display_box">
            <div class="display_box_header">
                <div class="display_box_header_left"></div>
                <div class="display_box_header_center">
                    <div class="display_box_header_center_content">{{title}}</div>
                </div>
                <div class="display_box_header_right"></div>
            </div>
            <div class="display_box_content">
                <div class="display_box_content_left"></div>
                <div class="display_box_content_center">
                    <slot name="content"></slot>
                </div>
                <div class="display_box_content_right"></div>
            </div>

            <div class="display_box_footer">
                <div class="display_box_footer_left"></div>
                <div class="display_box_footer_center"></div>
                <div class="display_box_footer_right"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DisplayBox",
        props: [
            'title'
        ]
    }
</script>

<style scoped>

    .display_box_wrapper {
        color: #FFFFFF;
    }

    .display_box {
        margin: 15px 5% 0;
        text-align: center;
        font-weight: bold;
        font-size: 15px;
    }

    .display_box_header {
        height: 25px;
        display: flex;
    }

    .display_box_header_left {
        background-image: url('../assets/display_box_images/i25.jpg');
        width: 22px;
    }

    .display_box_header_center {
        background-image: url('../assets/display_box_images/i27.jpg');
        flex-grow: 1;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .display_box_header_center_content {
        font-size: 13px;
        color: #C0D0D8;
    }

    .display_box_header_right {
        background-image: url('../assets/display_box_images/i30.jpg');
        width: 62px;
    }

    .display_box_content {
        display: flex;
    }

    .display_box_content_left {
        background-image: url('../assets/display_box_images/i38.jpg');
        width: 7px;
    }

    .display_box_content_center {
        flex-grow: 1;
        background-color: #0b1119;
    }

    .display_box_content_right {
        background-image: url('../assets/display_box_images/i43.jpg');
        width: 7px;
    }

    .display_box_footer {
        display: flex;
        height: 12px
    }

    .display_box_footer_left {
        background-image: url('../assets/display_box_images/i45.jpg');
        width: 62px;
    }

    .display_box_footer_center {
        flex-grow: 1;
        background-image: url('../assets/display_box_images/i47.jpg');
    }

    .display_box_footer_right {
        background-image: url('../assets/display_box_images/i49.jpg');
        width: 62px;
    }
</style>
