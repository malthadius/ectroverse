<template>
    <div id="server_notifications">
        <div id="notification_list" v-for="notification in notifications" :key="notification.id">
            <Notification :date="notification.date" :message="notification.message"/>
        </div>
    </div>
</template>

<script>
    import Notification from "./Notification";

    export default {
        name: "NotificationList",
        props: [
            'message'
        ],
        components: {
            Notification
        },
        data: function () {
            return {
                notifications: [
                    {
                        id: 1,
                        date: "11 June 2020",
                        message: "New round will start on friday the 12th of June 2020! Will be 2 man empires this time!"
                    },
                    {
                        id: 2,
                        date: "2 June 2020",
                        message: "Thanks to a player - Rotkeil, we now have a proper domain name! http://www.ectroverse.co.uk/"
                    },
                    {
                        id: 3,
                        date: "26 May 2020",
                        message: "The new 10 minute round will start on 28th of May!"
                    },
                    {
                        id: 4,
                        date: "16 May 2020",
                        message: "Fixed some bugs, hopefully now the database wont screw up. However, I've deleted all old player records, so you have to register again. Also made e-mail confirmation. Password recovery is next on the list. Will be launching a fast-tick round tommorow."
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    #server_notifications {
        display: flex;
        flex-direction: column;
        flex: auto;
        max-width:60%;
    }
</style>