<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
    const prefixCls = 'vu-icon';

    export default {
        name: 'Icon',
        props: {
            type: { // 图标类型
                type: String,
                default: ''
            },
            size: { // 大小
                type: [Number, String],
                default: ''
            },
            color: String, // 颜色
            custom: { // 用户自定义图标，增加一个类名，提高拓展性
                type: String,
                default: ''
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: this.type !== '',
                        [`${this.custom}`]: this.custom !== '',
                    }
                ];
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }

                if (this.color) {
                    style.color = this.color;
                }

                return style;
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    };
</script>
