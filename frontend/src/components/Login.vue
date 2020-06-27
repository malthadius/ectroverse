
<template>
    <div id="login_wrapper">
        <DisplayBox id="login_header" :title="title">
        <div slot="content">
            <div id="login_form">
            <form action="login" method="POST">
                <label>
                    <br>Name<br>
                    <input type="text" name="name" size="24">
                </label>
                <br>
                <label>
                    <br>Password<br>
                    <input type="password" name="pass" size="24">
                </label>
                <br>
                <br>
                <input type="submit" value="Log in">
            </form>
        </div>
        </div>
        </DisplayBox>
    </div>
</template>

<script>
    import DisplayBox from "../components/DisplayBox.vue";

    export default {
        name: "Login",
        components: {
            DisplayBox
        },
        data () {
            return {
                title: 'Log In'
            }
        }
    }
</script>

<style>
    #login_form {
        margin: 0 5% 5% 0;
        padding: 2px;
        text-align: center;
    }
</style>