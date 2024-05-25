<template>
    <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: 'Roboto Slab', sans-serif;
    text-align: center;
    background-color: #3a3939;
    color: white;
    font-weight: 300;
}
.page {
    min-height: 100vh;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    overflow: hidden;
}

nav {
    padding-left: 50px;

    a {
        cursor: pointer;
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        transition: 0.5s ease all;

        &:hover {
            color: #5cc978;
        }

        &.router-link-active {
            color: #5cc978;
        }
    }
}
</style>
