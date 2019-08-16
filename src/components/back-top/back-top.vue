<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <Icon type="ios-arrow-up" />
            </div>
        </slot>
    </div>
</template>
<script>
import { scrollTop } from '../../utils/assist';
import { on, off } from '../../utils/dom';
import Icon from '../icon/icon.vue';
const prefixCls = 'vu-back-top';
export default {
    name: 'BackTop',
    components: { Icon },
    props: {
        height: {
            type: Number,
            default: 400, // 默认滚动大于400时出现
        },
        bottom: {
            type: Number,
            default: 30,
        },
        right: {
            type: Number,
            default: 30,
        },
        duration: {
            type: Number,
            default: 1000,
        },
    },
    data() {
        return {
            backTop: false,
        };
    },
    mounted() {
        on(window, 'scroll', this.handleScroll);
        on(window, 'resize', this.handleScroll);
    },
    beforeDestroy() {
        off(window, 'scroll', this.handleScroll);
        off(window, 'resize', this.handleScroll);
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-show`]: this.backTop,
                },
            ];
        },
        styles() {
            return {
                bottom: `${this.bottom}px`,
                right: `${this.right}px`,
            };
        },
        innerClasses() {
            return `${prefixCls}-inner`;
        },
    },
    methods: {
        handleScroll() {
            this.backTop = window.pageYOffset >= this.height;
        },
        back() {
            const sTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop(window, sTop, 0, this.duration);
            this.$emit('on-click');
        },
    },
};
</script>