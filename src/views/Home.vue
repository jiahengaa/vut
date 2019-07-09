<template>
  <div class="home">
    <render-hello :level="1">
      <template v-slot:header>Hello world! header</template>
      <template>
        <div>body content</div>
      </template>
      <template v-slot:footer>
        <i>footer content</i>
      </template>
    </render-hello>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import RenderHello from '../views/RenderHello'

@Component({
  name: 'home',
  components: {
    'render-hello': RenderHello
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
</style>
