<template>
    <div>
        <h1>Login Page</h1>
        <form>
            <input type="text" v-model="username">
            <input type="password" v-model="password">
            <button @click="login"> Login </button>
        </form>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name : "LoginView",
        data(){
            return {
                username:"",
                password:"",
            }
        },
        methods: {
            login: function(){
                axios.request({
                    url: "https://reqres.in/api/login",
                    method : "POST",
                    data:{
                        username : "eve.holt@reqres.in",
                        password : "cityslicka"
                    },
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then((response)=>{
                    console.log(response);
                    this.$router.push('/game');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>