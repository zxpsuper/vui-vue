# Link 文字链接

::: tip
文字超链接
:::

## 1. 基本用法

<br>

提供平 6 种样式可以选择：`default、info、success、warning、error、primary`。

<br>

-   设置属性`underline`设置悬浮显示下划线，设置属性`disabled`禁用链接

<demo>
<div slot="code">

<<<@/docs/demo/link/demo1.vue

</div>
<div slot="comp" class="link-demo">
    <Link>我是 default 链接</Link>
    <div>
        <Link type="primary">我是 primary 链接</Link>
    </div>
    <div>
        <Link type="success">我是 success 链接</Link>
    </div>
    <div>
        <Link type="info">我是 info 链接</Link>
    </div>
    <div>
        <Link type="warning">我是 warning 链接</Link>
    </div>
    <div>
        <Link type="error" underline>我是 error 链接，带下划线</Link>
    </div>
    <div>
        <Link type="error" underline disabled>我是 error 链接，带下划线, 而且还禁用</Link>
    </div>
</div>
</demo>

## 2. API

#### props

| 参数      |       说明       |    类型 |                     可选值                      |  默认值 |
| :-------- | :--------------: | ------: | :---------------------------------------------: | ------: |
| type      |       类型       |  string | success, info, warning, error, default, primary | default |
| underline | hover 显示下划线 | boolean |                       --                        |   false |
| disabled  |    禁用超链接    | boolean |                       --                        |   false |

<style scoped>
.link-demo {
    line-height: 2em;
    font-size: 14px;
}
</style>
