<template>
  <div id="app">
    <div id="nav">
      <router-link to="/navigation">Dynamic Nav</router-link> |
      <router-link to="/editor">Inline Editor</router-link> |
      <router-link to="/order">Order form</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/grid">Grid</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
