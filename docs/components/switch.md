# SwitchButton 开关

<br>

::: tip
vui 开关按钮。
:::

## 1. 基本使用

<br>

-   使用 v-model 进行双向绑定

    <SwitchButton />

```vue
<SwitchButton v-model="swith" />
```

-   三种尺寸按钮 `small,large,default`, 默认是 `default` 中等按钮

<SwitchButton size="large"/> <SwitchButton size="small"/> <SwitchButton size="default"/>

```vue
<SwitchButton size="large" />
<SwitchButton size="small" />
<SwitchButton />
```

-   自定义开关颜色，设置属性 `trueColor` 与 `falseColor`

<SwitchButton size="large" trueColor="#1cbbb4" falseColor="#e54d42"/>

```vue
<SwitchButton size="large" trueColor="#1cbbb4" falseColor="#e54d42" />
```

-   加载中的按钮

<SwitchButton loading />

```vue
<SwitchButton loading />
```

## 2. API

#### props

| 参数       |      说明      |   类型 |       可选值        |  默认值 |
| :--------- | :------------: | -----: | :-----------------: | ------: |
| size       |      大小      | string | small,large,default | default |
| trueColor  |  激活按钮颜色  | string |          -          | #0081ff |
| falseColor | 未激活按钮颜色 | string |          -          | #cccccc |

#### events

| 事件名    |                               说明                                | 返回值 |
| :-------- | :---------------------------------------------------------------: | -----: |
| on-change | `<SwitchButton>`值 value 变化时触发， 返回 `boolean` 类型的 value |     -- |
