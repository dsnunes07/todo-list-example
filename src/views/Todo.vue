<template>
<div>
    <todo-form @newTask="handleNewTask" />
  <v-list
      flat
      subheader
      two-line
    >
    <div v-for="task in tasks" :key="task.id">
      <v-list-item>
        <v-list-item-content :style="[task.completed ? {'text-decoration': 'line-through'} : '']">
          <v-list-item-title>{{task.title}}</v-list-item-title>
          <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
            <v-icon
              :color="task.completed ? 'green' : 'grey'"
              @click="completeTask(task.id)">
              mdi-check-bold
            </v-icon>
            <v-icon
              :data-test="'delete-' + task.id"
              @click="deleteTask(task.id)">
              mdi-delete
            </v-icon>
          </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
    </div>
      
    </v-list>
</div>

</template>

<script>
  import TodoForm from "./TodoForm.vue";

export default {
  name: 'Todo',
  data() {
    return {
      current_id: 0,
      tasks: [
      ]
    }
  },
  components: {
    TodoForm
  },
  methods: {
    handleNewTask(data) {
      this.current_id += 1
      data.id = this.current_id;
      this.tasks.push(data);
      console.log(this.tasks)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id != id)
    },
    completeTask(id) {
      let task = this.tasks.find(t => t.id == id)
      task.completed = !(task.completed)
    }
  }
}
</script>
