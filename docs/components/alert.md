# Alert 警告提示

::: tip
呈现一些警告信息，可手动关闭。
:::

## 1. 基本用法

<br>

提供平四种样式可以选择：`info、success、warning、error`。

<demo>
<div slot="code">

<<<@/docs/demo/alert/demo1.vue

</div>
<div slot="comp">
  <Alert>An info alert</Alert>
  <Alert type="success">A success alert</Alert>
  <Alert type="warning">A warning alert</Alert>
  <Alert type="error">An error alert</Alert>
</div>
</demo>

## 2. 高级用法

<br>

-   携带 icon

根据 `type` 属性自动添加不同图标，或者自定义图标 `slot` 。

<br>

-   添加描述

自定义 `<slot name="desc">` 描述内容。

<br>

-   可关闭警告窗

设置`props` 属性 `closable=true`, 显示关闭按钮，点击可关闭提示，也可以自定义关闭 `slot` 。

<demo>
<div slot="code">

<<<@/docs/demo/alert/demo2.vue

</div>
<div slot="comp">
  <Alert type="info" show-icon>A info alert</Alert>
  <Alert type="success" show-icon>
    A info alert, customize icon of alert
    <Icon type="md-folder" slot="icon"/>
  </Alert>
  <Alert show-icon type="warning">
        An info alert
        <template slot="desc">This is the description of alert </template>
    </Alert>
    <Alert show-icon closable type="error">
        An info alert
        <template slot="desc">This is the description of alert </template>
    </Alert>
    <Alert show-icon closable type="info">
        An info alert
        <template slot="desc">This is the description of alert,
         customize icon of alert </template>
        <Icon type="md-folder" slot="close"/>
    </Alert>
</div>
</demo>

## 3. API

#### props

<br>

| 参数     |     说明      |    类型 |                        可选值 | 默认值 |
| :------- | :-----------: | ------: | ----------------------------: | -----: |
| type     |  alert 类型   |  string | success, info, warning, error |   info |
| closable |  是否可关闭   | boolean |                            -- |  false |
| showIcon | 是否显示 icon | boolean |                            -- |  false |

<BackTop />
