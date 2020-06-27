<template>
    <div id="register">
        <home-logo/>
        <div id="registration_message">
            <h3>Registration</h3>
            <form action="register_details" method="POST">
                <label>
                    <br>User Name<br>
                    <input type="text" name="user_name" size="24">
                </label>
                <br>
                <label>
                    <br>Password<br>
                    <input type="password" name="pass" size="24">
                </label>
                <br>
                <label>
                    <br>Faction Name<br>
                    <input type="text" name="faction_name" size="24">
                </label>
                <br>
                <label>
                    <br>Email<br>
                    <input type="text" name="email" size="24">
                </label>
                <br>
                <br>
                <input type="submit" value="OK">
            </form>
        </div>
    </div>
</template>

<script>
    import HomeLogo from '../components/HomeLogo'

    export default {
        name: "RegisterDetails",
        components: {
            HomeLogo,
        },
        data: function () {
            return {
                checked: false
            }
        }
    }
</script>

<style scoped>
    #registration_message {
        text-align: center;
        list-style-position: inside;
    }
</style>