<template>
    <main-master-page>
        <div class="page">
            <div class="todo_list">
                <h1 class="todo_list-title">{{ $t('messages.listTitle') }}</h1>

                <div v-if="isLoading">Loading.....</div>
                <div v-else-if="hasError">Error</div>
                <template v-else>
                    <div v-for="item in getItemsList" :key="item.id" class="todo_list-item">
                        <font-awesome-icon :icon="['fas', 'thumbtack']" color="#2276cf" />{{ item.title }} -
                        {{ `${item.time} min ` }}
                        <div class="todo_list-item-actions">
                            <button @click="deleteItem(item.id)" class="todo_item_delete_btn">
                                <font-awesome-icon :icon="['fas', 'trash-can']" />
                            </button>
                            <button @click="onEdit(item.id)" class="todo_item_edit_btn">
                                <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                            </button>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ToDoListView',
    components: {
        MainMasterPage,
    },
    data() {
        return {
            task: {},
        }
    },
    computed: {
        ...mapGetters('todolist', ['getItemsList', 'isLoading', 'hasError']),
        ifItsEditing() {
            return this.$route.params.id
        },
        buttonTitle() {
            return this.ifItsEditing ? 'Save' : 'Add Task'
        },
    },
    created() {
        this.loadList()
    },
    methods: {
        ...mapActions('todolist', ['loadList', 'deleteItem', 'updateItem']),
        onEdit(itemId) {
            this.$router.push({
                name: 'todo-form',
                params: {
                    id: itemId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.todo_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 60px 0;
    .todo_list-title {
        color: #5cc978;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
    .todo_list-item {
        width: 400px;
        border: 1px solid white;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .todo_list-item-actions {
            display: flex;
            gap: 5px;
        }
        .todo_item_delete_btn {
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
        .todo_item_edit_btn {
            display: inline-block;
            text-align: center;
            padding: 8px 10px;
            background-color: #3d96f4;
            color: #fff;
            font-size: 12px;
            letter-spacing: 1px;
            line-height: 0.8;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            transition: 0.5s ease-in-out all;
            &:hover {
                background-color: #2276cf;
            }
        }
    }
}
</style>
