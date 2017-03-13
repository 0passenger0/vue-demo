<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view :todos="todos" to="/todos"></router-view>
  </div>
</template>

<script>
    import Todos from './components/Todos.vue'
    import TodoForm from './components/TodoForm.vue'
export default {
  name: 'app',
    data(){
      return {
          todos: [
              {id: 1, title: 'learn Vue.js', completed: true},
          ],
      }
    },
    mounted(){
        this.axios.get('http://127.0.0.1:8000/api/todo').then(response => {
              this.todos=response.data;
        })
    },
    components:{
      Todos,TodoForm
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
