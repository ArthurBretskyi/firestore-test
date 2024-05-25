<template>
    <div class="page">
        <div class="page_not_found">
            <h2>Oops</h2>
            <h1>404</h1>
            <h2>{{ $t('messages.404') }}</h2>
            <div><font-awesome-icon :icon="['fas', 'ghost']" size="4x" /></div>
            <button @click="goHome" class="page_not_found_button">{{ $t(`buttons.goHome`) }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',
    methods: {
        goHome() {
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: center;
}
.page_not_found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    .page_not_found_button {
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
