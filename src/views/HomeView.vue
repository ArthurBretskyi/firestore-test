<template>
    <main-master-page>
        <div class="page">
            <h1 class="page_title">{{ $t('messages.greetings') }}</h1>
            <button @click="onStart" class="page_button">
                {{ $t('buttons.start') }} <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
export default {
    name: 'HomeView',
    components: {
        MainMasterPage,
    },

    methods: {
        onStart() {
            this.$router.push({
                name: 'todo-form',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 60px 15px;
    .page_title {
        color: #5cc978;
    }
    .page_button {
        display: inline-block;
        text-align: center;
        padding: 16px 32px;
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
