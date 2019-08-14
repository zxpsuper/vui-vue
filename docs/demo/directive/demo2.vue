<template>
    <div>
        <Alert v-resize="resizeObj">
            <p>Window Size: width: {{width}}px height: {{height}}px</p>
        </Alert>
    </div>
</template>
<script>
export default {
    data() {
        return {
            width: 0,
            height: 0,
            resizeObj: {
                value: this.resizeFunc,
                debounce: 500,
                quiet: false,
            },
        };
    },
    methods: {
        resizeFunc() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        },
    },
};
</script>