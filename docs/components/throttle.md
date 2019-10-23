# Throttle 防抖节流组件

<br>

::: tip
vui 防抖节流组件, 用于阻止一些事件频繁发生
:::

## 1. 基本使用

<br>

-   默认为节流组件，设置`:isDebounce="true"` 即可成为防抖组件

-   设置 `time` 属性，设置防抖节流时间

-   设置 `event` 属性, 设置防抖事件名称，如有多个，可用逗号分隔

<demo>

<div slot="code">

<<<@/docs/demo/throttle/demo1.vue

</div>
<div slot="comp"  class="color-btn-group">

<Throttle :time="1000"  isDebounce><span @click="decounceFunction"><Button color="purple" light>防抖按钮</Button></span></Throttle>

<Throttle :time="2000" events="click"><span @click="throttleFunction"><Button color="orange">节流按钮</Button></span></Throttle>

<Button color="green" light @click.native="normalFunction">普通按钮</Button>

</div>
</demo>

## 2. API

#### props

| 参数       |      说明      |    类型 |             可选值             | 默认值 |
| :--------- | :------------: | ------: | :----------------------------: | -----: |
| time       |  防抖节流时间  |  number |               --               |    800 |
| events     |  防抖节流事件  |  string | 默认是‘click’,如多个用逗号分隔 |  click |
| isDebounce | 是否是防抖组件 | boolean |          true, false           |  false |

<script>
export default {
    methods: {
        throttleFunction() {
            this.$Message.error('你点击了节流按钮')
        },
        normalFunction() {
            this.$Message.error('你点击了普通按钮')
        },
        decounceFunction() {
            this.$Message.error('你点击了防抖按钮')
        }
    }
}
</script>
