<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from './components/ListCharacters.vue'

export default {
  name: 'App',
  components: {
    ListCharacters
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f2f2f2;
  }
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    color: #333;
    margin: 1rem 0;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  img {
    width: 100%;
  }
</style>
