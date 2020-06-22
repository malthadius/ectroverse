<template>
    <div id="login_wrapper">
        <div id="login_header">Log In</div>
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
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                msg: 'Login'
            }
        }
    }
</script>

<style scoped>
    #login_wrapper {
        color: #FFFFFF;
        width: 100%;
    }
    #login_header {
        background-image: url('../assets/ectro_16.jpg');
        margin: 5% 5% 0;
        text-align: center;
        font-weight: bold;
        height: 25px;
        padding-left: 10px;
    }
    #login_form {
        margin: 0 5% 5% 0;
        padding: 2px;
        text-align: center;
    }
</style>