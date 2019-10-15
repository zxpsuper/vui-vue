# Radio 单选框

::: tip
单选框，可单独或者组合使用
:::

## 1. 单独使用

<br>

-   `vui` 的 `<Radio>` 提供了三种显示类型的单选框，分别为 `default, normal, tick`
-   禁用，添加 `disabled` 属性即可

<demo>

<div slot="code">

<<<@/docs/demo/radio/demo1.vue

</div>
<div slot="comp">
  <div>
    <Radio v-model="single1">小皮咖</Radio>
    <Radio v-model="single2" type="normal">中皮咖</Radio>
    <Radio v-model="single3" type="tick">大皮咖</Radio>
  </div>

  <div>
    <Radio v-model="single1" disabled>小皮咖</Radio>
    <Radio v-model="single2" type="normal" disabled>中皮咖</Radio>
    <Radio v-model="single3" type="tick" disabled>大皮咖</Radio>
  </div>
</div>
</demo>

## 2. 组合使用

<br>

-   `vui` 提供了一个 `<RadioGroup>` 组件用于包含 `<Radio>` 组件
-   默认是横向排列，如需纵向排列，添加 `vertical` 属性即可

<demo>

<div slot="code">

<<<@/docs/demo/radio/demo2.vue

</div>
<div slot="comp">
  <div>
    <RadioGroup v-model="phone" size="large">
        <Radio label="apple"><span>Apple</span></Radio>
        <Radio label="android" type="normal"><span>Android</span></Radio>
        <Radio label="windows" type="tick"><span>Windows</span></Radio>
    </RadioGroup>
    <RadioGroup v-model="phone" vertical>
        <Radio label="apple"><span>Apple</span></Radio>
        <Radio label="android" type="normal"><span>Android</span></Radio>
        <Radio label="windows" type="tick"><span>Windows</span></Radio>
    </RadioGroup>
  </div>
</div>
</demo>

## 3. API

#### Radio props

| 参数     |                              说明                               |            类型 |        可选值         |  默认值 |
| :------- | :-------------------------------------------------------------: | --------------: | :-------------------: | ------: |
| type     |                              类型                               |          string | default, normal, tick | default |
| value    |                值 ,可以使用 v-model 双向绑定数据                |         boolean |          --           |   false |
| disabled |                            是否禁用                             |         boolean |          --           |   false |
| label    | 组合时父组件`<RadioGroup>`选中的值，也作 `<Radio>` 插槽的默认值 | string , number |          --           |      -- |

#### Radio event

| 事件名    |                            说明                            | 返回值 |
| :-------- | :--------------------------------------------------------: | -----: |
| on-change | `<Radio>`值 value 变化时触发， 返回 `boolean` 类型的 value |     -- |

#### RadioGroup props

| 参数     |               说明                |    类型 | 可选值 | 默认值 |
| :------- | :-------------------------------: | ------: | :----: | -----: |
| value    | 值 ,可以使用 v-model 双向绑定数据 | boolean |   --   |  false |
| vertical |           是否纵向排列            | boolean |  true  |  false |

#### RadioGroup event

| 事件名    |                               说明                               | 返回值 |
| :-------- | :--------------------------------------------------------------: | -----: |
| on-change | `<RadioGroup>`值 value 变化时触发， 返回选中`<Radio>`的 label 值 |     -- |

<script>
export default {
    data() {
        return {
            phone: '',
            single1: false,
            single2: false,
            single3: false,
        }
    }
}
</script>

<BackTop />
