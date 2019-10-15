# Button 按钮

::: tip
vui 常用的操作按钮。
:::

## 1. 主要按钮

<br>

-   vui 提供了 8 种类型的主要按钮，`default,primary,dashed,text,info,success,warning,error`

<br>

-   加入 `disabled` 属性可禁用按钮,加入 `long` 属性变成长按钮

<demo>

<div slot="code">

<<<@/docs/demo/button/demo1.vue

</div>
<div slot="comp"  class="color-btn-group">
<Button>default 按钮</Button>
<Button type="primary">primary 按钮</Button>
<Button type="success">success 按钮</Button>
<Button type="info">info 按钮</Button>
<Button type="error">error 按钮</Button>
<Button type="warning">warning 按钮</Button>
<Button type="dashed">dash 虚线按钮</Button>
<Button type="text">text 文本按钮</Button>
<Button type="primary" disabled>禁用按钮</Button>

<Button type="warning" long>长按钮</Button>

</div>
</demo>

<br>

## 2. 五颜六色按钮

<br>

-   vui 提供了 13 种颜色的按钮（花里胡哨）以及对应的浅色按钮。`red, yellow, orange, olive, green, cyan, blue, purple, mauve, pink, brown, grey, gray`

<demo>

<div slot="code">

<<<@/docs/demo/button/demo2.vue

</div>
<div slot="comp"  class="color-btn-group">
<div class="color-btn-group">
<Button color="red">嫣红按钮</Button>
<Button color="orange">桔橙按钮</Button>
<Button color="yellow">明黄按钮</Button>
<Button color="olive">橄榄按钮</Button>
<Button color="green">森绿按钮</Button>
<Button color="cyan">天青按钮</Button>
<Button color="blue">海蓝按钮</Button>
<Button color="purple">姹紫按钮</Button>
<Button color="mauve">木槿按钮</Button>
<Button color="pink">桃粉按钮</Button>
<Button color="brown">棕褐按钮</Button>
<Button color="grey">玄灰按钮</Button>
<Button color="gray">草灰按钮</Button>
</div>

<br>

<div class="color-btn-group">
<Button color="red" light>嫣红按钮</Button>
<Button color="orange" light>桔橙按钮</Button>
<Button color="yellow" light>明黄按钮</Button>
<Button color="olive" light>橄榄按钮</Button>
<Button color="green" light>森绿按钮</Button>
<Button color="cyan" light>天青按钮</Button>
<Button color="blue" light>海蓝按钮</Button>
<Button color="purple" light>姹紫按钮</Button>
<Button color="mauve" light>木槿按钮</Button>
<Button color="pink" light>桃粉按钮</Button>
<Button color="brown" light>棕褐按钮</Button>
<Button color="grey" light>玄灰按钮</Button>
<Button color="gray" light>草灰按钮</Button>
</div>

</div>
</demo>

<style scoped>
.color-btn-group {
    line-height: 46px
}
</style>

<BackTop />
