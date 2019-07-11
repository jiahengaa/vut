import { Component, Prop } from 'vue-property-decorator'
import Vue, { CreateElement, RenderContext } from 'vue'
import { VNode, VNodeData, VNodeChildren, NormalizedScopedSlot } from 'vue/types/vnode'
import { DefaultProps as Props } from 'vue/types/options'
import { Colors } from '@/theme/colors'
import './VTIcon.scss'

import '@/assets/Iconfont/vt-iconfont.css'

@Component({
  name: 'VTIcon'
})
export default class VTIcon extends Vue {
  @Prop()
  name?: string

  private readonly vtIconPre = 'vt-iconfont'

  public render(createElement: CreateElement, hack: RenderContext<Props>): VNode {
    const vndata: VNodeData = {
      class: 'vt-iconfont ' + this.name
    }
    return createElement('i', vndata, [])
  }
}
