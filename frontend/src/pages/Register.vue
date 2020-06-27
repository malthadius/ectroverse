<template>
    <div id="register">
        <home-logo/>
        <div id="registration_message">
            <h3>Registration</h3>
            <h3>Please read the rules below, and click the box if you agree...</h3>
            <ol>
                <li>Have fun and bring your friends to play!</li>
                <li>Be nice to others, lets keep this game friendly.</li>
                <li>If you will use cursing language or make multi accounts, you will be banned.</li>
            </ol>
            <label for="agree"><input id="agree" type="checkbox" value="agree" v-model="checked"/>I Agree</label>
            <p>
                <router-link to="/register_details">
                    <button :disabled="!checked">Ok</button>
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
    import HomeLogo from '../components/HomeLogo'

    export default {
        name: "Register",
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