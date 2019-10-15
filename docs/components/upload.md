# Upload 上传文件

::: tip
vui 上传文件组件。
:::
<br>

## 1. 基本使用

<br>

-   默认 `slot` 为 `Button`, 当然你也可以自定义内部内容

```html
<Upload>你想要的内容</Upload>
```

-   `action` 设置 上传路径

```html
<Upload action="https://github.com/zxpsuper" />
```

-   `name` 设置 上传文件字段名

```html
<Upload action="https://github.com/zxpsuper" name="suporka" />
```

-   支持发送 cookie 凭证信息

```html
<Upload action="https://github.com/zxpsuper" withCredentials />
```

-   支持多选

```html
<Upload action="https://github.com/zxpsuper" withCredentials multiple />
```

<Upload/>

## 2. API

#### props

| 参数            |         说明         |     类型 | 可选值 |  默认值 |
| :-------------- | :------------------: | -------: | :----: | ------: |
| action          |       上传路径       |   string |   --   |       / |
| name            |    上传文件字段名    |   string |   --   |    file |
| withCredentials | 发送 cookie 凭证信息 |  boolean |   --   |   false |
| multiple        |       是否多选       |  boolean |   --   |   false |
| beforeUpload    |   上传之前执行函数   | Function |   --   | ()=> {} |

#### event

| 事件名         |     说明     |   返回值 |
| :------------- | :----------: | -------: |
| upload-success | 上传成功回调 | response |
| upload-error   | 上传错误回调 |    error |
