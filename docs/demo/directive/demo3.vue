<template>
    <div>
        <Alert v-mouse-wheel="mouseWheelFunc" style="height: 200px; overflow: auto">
            <p>Window content</p>
            <p>Window content</p>
            <p>Window content</p>
            <p>Window content</p>
            <p>Window content</p>
        </Alert>
    </div>
</template>
<script>
export default {
    methods: {
        mouseWheelFunc(event, normalizeWheel) {
            console.log(normalizeWheel);
            console.log(event);
        },
    },
};
</script>