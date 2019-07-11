<template>
  <div id="app" class="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import '@/assets/Iconfont/iconfont'

@Component({
  name: 'App'
})
export default class App extends Vue {}
</script>
<style lang="scss">
body {
  margin: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.app {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>
