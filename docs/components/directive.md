# 集成自定义指令

::: tip
vui 内部集成一些指令以供使用
:::

## 1. v-click-outside

<br>

判断是否点击了元素之外的元素

<br>

<demo>
<div slot="code">

<<<@/docs/demo/directive/demo1.vue

</div>
<div slot="comp">
  <Alert v-click-outside="clickOutside">
<p  @click="clickInner" class="click-outside-paragraph">{{text}} </p>
</Alert>
</div>
</demo>

## 2. v-resize

<br>

窗口尺寸改变指令, 支持传入 function 或 option, 当绑定元素卸载时，页面 resize 事件也会随之清除

| option 参数 |            说明             |     类型 | 可选值 | 默认值 |
| :---------- | :-------------------------: | -------: | :----: | -----: |
| value       |      function 执行函数      | function |   --   |     -- |
| debounce    |  函数触发防抖时间，单位 ms  |   number |   --   |    200 |
| quiet       | 是否挂载时执行一遍 function |  boolean | false  |   true |

<demo>
<div slot="code">

<<<@/docs/demo/directive/demo2.vue

</div>
<div slot="comp">
<Alert v-resize="resizeObj">
<p  class="click-outside-paragraph">Window Size: width: {{width}}px height: {{height}}px </p>
</Alert>

</div>
</demo>

## 3. v-mouse-wheel

<br>

元素滚轮滚动指令, 当绑定元素卸载时，滚轮事件也会随之清除

<br>

指令绑定值为 `function`, 其携带两个参数，`event` 与 `normalizeWheel（pixelX, pixelY, spinX,spinY）`, 可根据 `normalizeWheel` 判断滚动的方向数值等

<demo>

<div slot="code">

<<<@/docs/demo/directive/demo3.vue

</div>
<div slot="comp">
<Alert v-mouse-wheel="mouseWheelFunc" style="height: 200px; overflow: auto">
<p  class="click-outside-paragraph">Window content</p>
<p  class="click-outside-paragraph">Window content</p>
<p  class="click-outside-paragraph">Window content</p>
<p  class="click-outside-paragraph">Window content</p>
<p  class="click-outside-paragraph">Window content</p>
</Alert>

</div>
</demo>

## 4. v-long-press

<br>

长按触发指令，`v-long-press` 使用即可，默认设置长按时间为 1s

<br>

<Button v-long-press="longPress" type="primary">长按点击测试</Button>

## 5. v-lazy

<br>

图片懒加载自定义指令, `v-lazy` 使用即可。默认的占位图是小皮咖的头像，如果你想自定义修改，修改`Vue.$vuiLazyLoad.img`即可实现

```
Vue.$vuiLazyLoad.img = '你的占位图url';
```

```html
<img
    v-lazy="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"
/>
```

<br>
<img v-lazy="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'" />

<img v-lazy="'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'" />

<img v-lazy="'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'" />

<img v-lazy="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'" />

<script>
export default {
    data() {
        return {
            text: '测试是否点击了外部',
            width: 0,
            height: 0,
            resizeObj: {
                value: this.resizeFunc,
                debounce: 500,
                quiet: true
            }
        }
    },
    methods: {
        mouseWheelFunc(event, normalizeWheel) {
            console.log(normalizeWheel)
            console.log(event)
        },
        resizeFunc() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        },
        clickOutside() {
            this.text = '你点击了外部'
        },
        clickInner() {
            this.text = '你点击了内部'
        },
        longPress() {
            this.$Message.success('长按点击成功')
        }
    }
}
</script>

<style scoped>
.click-outside-paragraph {
    padding: 50px;
    font-size: 16px;
    cursor: pointer
}
.mouseWheel {
    width: 800px;
    height: 200px
}
</style>

<BackTop />
