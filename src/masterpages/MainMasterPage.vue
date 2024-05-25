<template>
    <div class="container">
        <header class="header">
            <router-link class="header_logo" :to="{ name: 'home' }"
                ><span class="s1">To</span>List<span class="s2">Do</span></router-link
            >

            <!-- <div class="header_logo"><span class="s1">To</span>List<span class="s2">Do</span></div> -->
            <nav class="header_menu">
                <router-link :to="{ name: 'todo-form' }">{{ $t('menu.form') }}</router-link>
                <router-link :to="{ name: 'todo-list' }">{{ $t('menu.tasksList') }}</router-link>
                <router-link :to="{ name: 'pageNotFound' }">{{ $t('menu.advice') }}</router-link>
            </nav>
            <div class="header_user_action">
                <div v-if="getUser" class="user_active">
                    <span class="user_name">{{ getUser.displayName }}</span>
                    <img :src="getUser.photoURL" alt="user photo" class="user_photo" />
                    <button @click="logout" class="user_button">{{ $t(`buttons.logOut`) }}</button>
                </div>
                <div v-else class="user_not_active">
                    <button @click="loginWithGoogle" class="user_button">{{ $t(`buttons.logIn`) }}</button>
                </div>
            </div>
            <div class="header_locale">
                <div>{{ currentLanguage }}</div>
                <button @click="changeLocale('en')" class="locale_btn">En</button>
                <button @click="changeLocale('ua')" class="locale_btn">Ua</button>
            </div>
        </header>
        <slot> </slot>

        <footer class="footer">footer</footer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'MainMasterPage',
    computed: {
        ...mapGetters('auth', ['getUser']),
        currentLanguage() {
            return this.$i18n.locale === 'en' ? 'en' : 'ua'
        },
    },
    created() {
        this.$i18n.locale = localStorage.getItem('selectedLocale') ?? process.env.VUE_APP_I18N_LOCALE
        const self = this
        window.addEventListener('storage', function () {
            if (self.$i18n.locale !== localStorage.getItem('selectedLocale')) {
                self.$i18n.locale = localStorage.getItem('selectedLocale')
                self.$router.go()
            }
        })
    },
    methods: {
        ...mapActions('auth', ['loginWithGoogle', 'logout']),
        changeLocale(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('selectedLocale', lang)
        },
    },
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    min-height: 116px;
    padding: 15px 0;
    font-weight: 300;
    .header_logo {
        width: 60px;
        height: 60px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid white;
        font-size: 24px;
        font-weight: 400;
        text-decoration: none;
        transition: 0.2s ease all;
        &:hover {
            transform: rotateZ(-1deg) scale(1.01);
        }
        // transform: rotate(45deg);
        .s1 {
            display: flex;
            justify-content: start;
            color: #3d96f4;
        }
        .s2 {
            display: flex;
            justify-content: end;
            color: #ff6d35;
        }
    }
    .header_menu {
        display: flex;
        justify-content: start;
        flex: 1 1 auto;
        gap: 32px;
    }
    .header_user_action {
        display: flex;
        margin-right: 50px;
        .user_active {
            display: flex;
            align-items: center;
            column-gap: 5px;
            .user_photo {
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
        }
    }
    .user_button {
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
    .header_locale {
        display: flex;
        align-items: center;
        gap: 4px;
        .locale_btn {
            display: inline-block;
            text-align: center;
            padding: 8px 10px;
            background-color: #ff6d35;
            color: #fff;
            font-size: 12px;
            letter-spacing: 1px;
            line-height: 0.8;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            transition: 0.5s ease-in-out all;
            &:hover {
                background-color: #c74f20;
            }
        }
    }
}
.footer {
    padding-bottom: 100px;
}
</style>
