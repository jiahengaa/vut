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
    <vt-checkbox text="ssss" :ischeck="ischecked"></vt-checkbox>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import RenderHello from '../views/RenderHello'
import VTIcon from '@/components/VTIcon/VTIcon'
import VTCheckbox from '@/components/VTCheckbox/VTCheckbox'

@Component({
  name: 'home',
  components: {
    'render-hello': RenderHello,
    'vt-icon': VTIcon,
    'vt-checkbox': VTCheckbox
  }
})
export default class Home extends Vue {
  public ischecked: boolean = false
}
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
