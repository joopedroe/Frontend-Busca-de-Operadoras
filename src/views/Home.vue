<template>
  <div id=container>
    <div>
      <h1>Cadastro de Operadoras</h1>
    </div>
    <div id="inputGrup" class="input-group">
  <input type="search" v-model="nameSearch" class="form-control rounded" placeholder="Digite aqui..." aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" class="btn btn-primary" @click="click">Pesquisar</button>
</div>
  <div v-if="status">
    <h3>Resultado não encontrado</h3>
  </div>
  <div v-if='response'>
    <table id="tabela" class="table table-hover">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="register in registers" :key="register[0]">
                    <th>{{register[0]}}</th>
                    <th>{{register[2]}}</th>
                </tr>
            </tbody>
        </table>
  </div>
  </div>
</template>
<script>
import axios from '../axios/index'
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      response: false,
      status: false,
      nameSearch: '',
      registers: []

    }
  },
  methods: {
    click () {
      axios.get(`/search/${this.nameSearch}`).then(response => {
        if (response.status === 200) {
          this.response = true
          this.status = false
          this.registers = response.data
        } else {
          this.status = true
          this.response = false
        }
      })
    }
  }
}
</script>
<style lang="scss">
#container {
  margin: 100px;
  display: flex;
  width: 85%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#inputGrup{
  width: 800px;
  justify-content: center;
  align-self: center;
}
#tabela{
  width: 750px;
}
</style>
