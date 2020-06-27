<template>
    <DisplayBox class="notification" :title="date">
        <div slot="content">
            <div class="notification_message">
                {{message}}
            </div>
        </div>
    </DisplayBox>
</template>

<script>
    import DisplayBox from "../components/DisplayBox.vue";
    export default {
        name: "Notification",
        props: [
            'date',
            'message'
        ],
        components: {
            DisplayBox
        }
    }
</script>

<style scoped>
    .notification_message{
        font-size: 12px;
        font-family: verdana,geneva,arial,helvetica,sans-serif;
        font-weight: normal;
        padding: 10px;
    }
</style>