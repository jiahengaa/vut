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
    <vt-icon name="icon-squarecheck"></vt-icon>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import RenderHello from '../views/RenderHello'
import VTIcon from '@/components/VTIcon'

@Component({
  name: 'home',
  components: {
    'render-hello': RenderHello,
    'vt-icon': VTIcon
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.vt-icon {
  border-width: 1px;
  border-color: aquamarine;
}
</style>
