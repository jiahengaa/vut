import { Component, Watch, Prop, Ref } from 'vue-property-decorator'
import Vue, { CreateElement, RenderContext } from 'vue'
import { VNode, VNodeData, VNodeChildren, NormalizedScopedSlot } from 'vue/types/vnode'
import { DefaultProps as Props } from 'vue/types/options'
import { Colors } from '@/theme/colors'
import '@/assets/Iconfont/vt-iconfont.css'

import VTIcon from '../VTIcon/VTIcon'

import './VTCheckbox.scss'

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

  public checkedImageName: string = 'icon-squarecheck'
  public uncheckedImageName: string = 'icon-square'

  @Ref('vtIcon')
  public vtIcon!: VTIcon

  private onChecked(event: MouseEvent) {
    this.ischeck = !this.ischeck
    this.vtIcon.iconName = this.ischeck ? this.checkedImageName : this.uncheckedImageName
  }

  private mounted() {
    // this.vtIcon.$on('click', this.onChecked) //失败
    // this.vtIcon.$on('nativeOn.click', this.onChecked) //失败
    this.vtIcon.iconName = this.ischeck ? this.checkedImageName : this.uncheckedImageName
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
    let body: any
    if (this.$slots.default === undefined) {
      body = createElement(
        'div',
        {
          class: 'text'
        },
        this.text
      )
    } else {
      body = this.$slots.default[0]
    }

    return createElement(
      'div',
      {
        class: 'vt-checkbox'
      },
      [checkbox, body]
    )
  }
}
