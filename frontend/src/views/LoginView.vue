<template>
    <h1>Log in</h1>
    <form @submit.prevent="LogIn">
        <input type="email" v-model="email" placeholder="email">
        <input type="password" v-model="password" placeholder="password">
        <input type="submit">
    </form>
</template>
<script lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { defineComponent, ref, watch } from 'vue';
import { requestData } from '../includes/requestData';

export default defineComponent({
    name: 'LoginView',
    setup() {
        const router = useRouter()
        const email = ref('niemail@mail.com');
        const password = ref('1234');

        const LogIn = async () => {
            try {
                const isLogIn = await requestData('login', {
                    email: email.value,
                    password: password.value
                });
                if (isLogIn.token) {
                    router.push('profile')
                } else {
                    console.error('Invalid token or other error');
                }
            } catch (err) {
                console.error('Error during login:', err);
            }
        }

        return {
            // getUsers,
            email,
            password,
            LogIn
        };
    },
});
</script>