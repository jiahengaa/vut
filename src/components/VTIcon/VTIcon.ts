import { Component, Prop } from 'vue-property-decorator'
import Vue, { CreateElement, RenderContext } from 'vue'
import { VNode, VNodeData, VNodeChildren, NormalizedScopedSlot } from 'vue/types/vnode'
import { DefaultProps as Props } from 'vue/types/options'
import { Colors } from '@/theme/colors'
import '@/assets/Iconfont/vt-iconfont.css'

@Component({
  name: 'VTIcon'
})
export default class VTIcon extends Vue {
  @Prop()
  name: string | undefined

  public iconName: any = ''

  public created() {
    this.iconName = this.name
  }

  private mounted() {
    // this.iconName = this.name
  }

  private render(createElement: CreateElement, hack: RenderContext<Props>): VNode {
    const vndata: VNodeData = {
      class: 'vt-iconfont ' + this.iconName
    }
    return createElement('i', vndata, [])
  }
}
