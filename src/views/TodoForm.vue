<template>
  <v-form
    ref="form"
    class="pa-5"
    lazy-validation
  >
    <v-text-field
      v-model="title"
      label="Título"
      :rules="titleRules"
      required
    ></v-text-field>

    <v-text-field
      v-model="description"
      label="Descrição"
      :rules="descriptionRules"
      required
    ></v-text-field>
    <v-btn
      color="success"
      class="mr-4"
      @click="submit"
    >
      Salvar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      completed: false,
      titleRules: [
        v => !!v || "É preciso adicionar um título"
      ],
      descriptionRules: [
        v => v.length >= 30 || "Descrição muito curta"
      ]
    }
  },
  methods: {
    reset() {
      this.title = ""
      this.description = ""
    },
    submit() {
      if(!this.isValid()) return;
      this.addTask();
    },
    isValid() {
      return this.$refs.form.validate()
    },
    addTask() {
      var task = {
        title: this.title,
        description: this.description,
        completed: false
      }
      this.$emit('newTask', task)
    }
  }
}
</script>