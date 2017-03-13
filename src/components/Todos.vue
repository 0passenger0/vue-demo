<template>
    <ul class="list-group" v-if="todos.length > 0">
        <li class="list-group-item"
            :class="{ 'completed' : todo.completed }"
            v-for="(todo,index) in todos">
            {{todo.title}}
            <button class="btn btn-danger btn-xs pull-right" @click="DelTodo(index)">Delete Todo</button>
            <button class="btn  btn-xs pull-right" :class="[todo.completed ? 'btn-success': 'btn-warning' ]" @click="ToggleTodo(todo)">{{ todo.completed ? 'Done' : 'Undo'}}</button>
        </li>
    </ul>
</template>

<style>
    .completed {
        color: green;
        text-decoration: line-through;
    }
</style>

<script>
    export default{
        props: ['todos'],
        methods: {
            DelTodo: function (index)
            {
                this.todos.splice(index, 1);
            },
            ToggleTodo: function (todo)
            {
                todo.completed = !todo.completed;
            }
        }
    }
</script>