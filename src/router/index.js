import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todos from '@/components/Todos.vue'
import Todo from '@/components/Todo.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/todos',
            component: Todos
        },
        {
            path: '/todo/:id',
            component: Todo
        },
    ]
})
