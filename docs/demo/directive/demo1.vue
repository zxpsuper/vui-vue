<template>
    <div>
        <Alert v-click-outside="clickOutside">
            <p @click="clickInside" class="click-outside-paragraph">{{text}}</p>
        </Alert>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: '测试是否点击了外部',
        };
    },
    methods: {
        clickOutside() {
            this.text = '你点击了外部';
        },
        clickInside() {
            this.text = '你点击了内部';
        },
    },
};
</script>