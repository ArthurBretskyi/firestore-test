<template>
    <main-master-page>
        <div class="page">
            <div class="todo_form">
                <div class="form_item">
                    <label>
                        {{ $t('messages.taskTitle') }}:
                        <input v-model="task.title" type="text" />
                    </label>
                </div>
                <div class="form_item">
                    <label>
                        {{ $t('messages.taskExecution') }}:
                        <input v-model="task.time" type="text" />
                    </label>
                </div>
                <button @click="onTaskAction" class="form_button">{{ buttonTitle }}</button>
            </div>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ToDoFormView',
    components: {
        MainMasterPage,
    },
    data() {
        return {
            task: {},
        }
    },
    computed: {
        ...mapGetters('todolist', ['getItemById', 'isLoading', 'hasError']),
        ifItsEditing() {
            return this.$route.params.id
        },
        buttonTitle() {
            return this.ifItsEditing ? 'Save' : 'Add Task'
        },
    },
    created() {
        this.task = { ...this.getItemById(this.ifItsEditing) }
    },
    methods: {
        ...mapActions('todolist', ['addItem', 'deleteItem', 'updateItem']),
        onTaskAction() {
            if (this.ifItsEditing) {
                this.updateItem({
                    itemId: this.task.id,
                    data: {
                        title: this.task.title,
                        time: this.task.time,
                    },
                })
            } else this.addItem(this.task)
            this.task = {}
            this.$router.push({
                name: 'todo-list',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.todo_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 60px 0;
    .form_item {
        width: 400px;
        border: 1px solid #5cc978;
        padding: 5px;
    }
    input {
        outline-color: white;
    }
    .form_button {
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
