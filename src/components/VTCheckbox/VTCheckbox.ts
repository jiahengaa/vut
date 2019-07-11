import { Component, Watch, Prop, Ref } from 'vue-property-decorator'
import Vue, { CreateElement, RenderContext } from 'vue'
import { VNode, VNodeData, VNodeChildren, NormalizedScopedSlot } from 'vue/types/vnode'
import { DefaultProps as Props } from 'vue/types/options'
import { Colors } from '@/theme/colors'
import '@/assets/Iconfont/vt-iconfont.css'

import VTIcon from '../VTIcon/VTIcon'

@Component({
  name: 'VTCheckbox',
  components: {
    'vt-icon': VTIcon
  }
})
export default class VTCheckbox extends Vue {
  @Prop()
  default?: boolean
  @Prop()
  public text?: string

  public ischeck: boolean = false

  @Ref('vtIcon')
  public vtIcon!: VTIcon

  private onChecked(event: MouseEvent) {
    this.ischeck = !this.ischeck
    this.vtIcon.iconName = 'icon-square' + (this.ischeck ? 'check' : '')
  }

  private mounted() {
    // this.vtIcon.$on('click', this.onChecked) //失败
    // this.vtIcon.$on('nativeOn.click', this.onChecked) //失败
    this.vtIcon.iconName = 'icon-square' + (this.ischeck ? 'check' : '')
  }

  private render(createElement: CreateElement, hack: RenderContext<Props>): VNode {
    const checkbox = createElement('vt-icon', {
      //   attrs: { //也能成功
      //     name: 'icon-square' + (this.ischeck ? 'check' : '')
      //   },
      ref: 'vtIcon',
      nativeOn: {
        ['click']: this.onChecked
      }
    })
    const body = this.$slots.default === undefined ? createElement('div', this.text) : createElement('')

    return createElement('div', {}, [checkbox, body])
  }
}
