import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement, RenderContext } from 'vue'
import { VNode } from 'vue/types/vnode'
import { DefaultProps as Props } from 'vue/types/options'

@Component({
  name: 'RenderHello'
})
export default class RenderHello extends Vue {
  @Prop({
    required: false,
    default: 1
  })
  level!: number

  private header: VNode = {} as VNode
  private body: VNode = {} as VNode
  private footer: VNode = {} as VNode

  public render(createElement: CreateElement, hack: RenderContext<Props>): VNode {
    const header = this.$slots.header !== undefined ? createElement('div', this.$slots.header) : createElement('')
    const body = this.$slots.default !== undefined ? createElement('div', this.$slots.default) : createElement('')
    const footer = this.$slots.footer !== undefined ? createElement('div', this.$slots.footer) : createElement('')
    return createElement(
      'h' + this.level, // 标签名称
      [header, body, footer]
    )
  }
}
