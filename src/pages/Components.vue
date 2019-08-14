<template>
    <div>
        <Icon type="ios-add-circle" />
        <div style="width: 600px;margin: 0 auto">
            <Alert type="success" closable banner showIcon>
                A success prompt
                <div slot="desc">我爱你啊</div>
            </Alert>

            <Link>你好</Link>
            <div>
                <Link type="primary">你好</Link>
            </div>
            <div>
                <Link type="success">你好</Link>
            </div>
            <div>
                <Link type="info">你好</Link>
            </div>
            <div>
                <Link type="warning">你好</Link>
            </div>
            <div>
                <Link type="error" underline>你好</Link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        setInterval(() => {
            this.$Message.info('This is a info tip');
        }, 2000);
    },
};
</script>
