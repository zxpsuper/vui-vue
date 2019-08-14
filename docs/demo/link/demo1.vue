<template>
    <div class="link-demo">
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
</template>