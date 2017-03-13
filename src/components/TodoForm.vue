<template>
    <form @submit.prevent="addTodo(newTodo)">
        <div class="form-group">
            <input type="text" placeholder="add a new todo" class="form-control"
                   v-model="newTodo.title"
            >
        </div>
        <div class="form-group">
            <button class="btn btn-success" type="submit">Add Todo</button>
        </div>
    </form>
</template>

<script>
    export default{
        props:['todos'],
        data:function ()
        {
            return {
                newTodo:{id: null, title: '', completed: false},
            };
        },
        methods:{
            addTodo: function (newTodo)
            {
                if(newTodo.title){
                    this.todos.push(newTodo);
                    this.newTodo = {id: null, title: '', completed: false};
                }

            },
        }
    }
</script>