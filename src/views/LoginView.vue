<template>
    <div>
        <h1>Login Page</h1>
        <form>
            <input type="text" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
            <button @click="login"> Login </button>
        </form>
        <div v-if="errorMessage"> 
            <p> User Not Found </p>
        </div>
    </div>


</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';

    export default {
        name : "LoginView",
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login: function(){
                axios.request({
                    url: "https://reqres.in/api/login",
                    method : "POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    data:{
                        email : this.email,
                        password : this.password,
                    },                    
                }).then((response)=>{
                    cookies.set('loginToken', response.data.token)
                    console.log(response);
                    this.$router.push('/game');
                }).catch((error)=>{
                    console.log(error);
                    this.errorMessage = "user not found";
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>