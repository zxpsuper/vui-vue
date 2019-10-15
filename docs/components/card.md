# Card 卡片

::: tip
vui 内容的基本容器。
:::

## 1. 基本使用

<br>

-   标题，设置 `title` 或者 `slot="title"` 设置卡片标题，若无则不显示

<br>

-   阴影 `shadow`, 可设置为 `always, hover, nerver,` 默认 `nerver`

<br>

-   边框 `border`, 设置 `:border="false"` 可设置为无边框

<demo>
<div slot="code">

<<<@/docs/demo/card/demo1.vue

</div>
<div slot="comp">

<Card shadow="always">
<p>这是没有标题的卡片！这是没有标题的卡片！这是没有标题的卡片！这是没有标题的卡片！这是没有标题的卡片！</p>
</Card>

<br>
<Card shadow="always">
<p slot="title">带卡片阴影的Card</p>
<p>这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！</p>
</Card>

<br>

<Card shadow="hover">
<p slot="title">鼠标悬浮阴影的Card</p>
<p>这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！ </p>
</Card>

<br>

<Card>
<p slot="title">不带阴影的卡片</p>
<p>这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！这是卡片内容！ </p>

</Card>

<br>

<Alert>
<Card :bordered="false" shadow="hover" style="">
<p slot="title">没有border的卡片</p>
<p>建议在非白色背景下使用，由于卡片背景为白色，在白色背景下轮廓不清晰，因此我将其置于 Alert 组件中 </p>
</Card>
</Alert>
</div>
</demo>

<BackTop />
