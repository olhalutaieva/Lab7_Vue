<!-- src/views/Registration.vue -->
<template>
    <div>
        <h1>Реєстрація</h1>
        <form @submit="register">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
            <label for="password">Пароль:</label>
            <input type="password" id="password" v-model="password" required />
            <button type="submit">Зареєструватися</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async register() {
            try {
                await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password);

                await this.$fire.auth.currentUser.sendEmailVerification();
                this.$router.push('/login');
            } catch (error) {
                console.error('Помилка реєстрації:', error);
            }
        },
    },
};
</script>