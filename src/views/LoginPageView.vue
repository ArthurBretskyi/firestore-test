<template>
    <div class="page">
        <div class="page_login">
            <h2 class="page_login_title">{{ $t(`messages.logIn`) }}</h2>
            <button @click="onLogIn" class="page_login_button">{{ $t(`buttons.logIn`) }}</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'LoginPageView',
    methods: {
        ...mapActions('auth', ['loginWithGoogle']),
        async onLogIn() {
            try {
                await this.loginWithGoogle()
                this.$router.push({
                    name: 'home',
                })
            } catch (error) {
                alert(error.message)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.page_login {
    padding-top: 200px;
    .page_login_title {
        color: #5cc978;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
    .page_login_button {
        display: inline-block;
        text-align: center;
        padding: 8px 16px;
        background-color: #3d96f4;
        color: #fff;
        font-size: 12px;
        letter-spacing: 0.5px;
        line-height: 1.2;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        transition: 0.5s ease-in-out all;
        &:hover {
            background-color: #2276cf;
        }
    }
}
</style>
