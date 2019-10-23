<template>
    <div>
        <Throttle :time="1000" isDebounce>
            <span @click="decounceFunction">
                <Button color="purple" light>防抖按钮</Button>
            </span>
        </Throttle>
        <Throttle :time="2000" events="click">
            <span @click="throttleFunction">
                <Button color="orange">节流按钮</Button>
            </span>
        </Throttle>
        <Button color="green" light @click.native="normalFunction">普通按钮</Button>
    </div>
</template>

<script>
export default {
    methods: {
        throttleFunction() {
            this.$Message.error('你点击了节流按钮');
        },
        normalFunction() {
            this.$Message.error('你点击了普通按钮');
        },
        decounceFunction() {
            this.$Message.error('你点击了防抖按钮');
        },
    },
};
</script>
