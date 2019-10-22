<template>
    <span :class="wrapClasses" :style="wrapStyles" @click="toggle" @keydown.space="toggle">
        <span :class="innerClasses">
            <slot name="open" v-if="currentValue === true"></slot>
            <slot name="close" v-if="currentValue === false"></slot>
        </span>
    </span>
</template>

<script>
const prefixCls = 'vu-switch';
import { oneOf } from '../../utils/assist';
export default {
    name: 'SwitchButton',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        trueColor: {
            type: String,
        },
        falseColor: {
            type: String,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        beforeChange: Function,
        size: {
            validator(value) {
                return oneOf(value, ['large', 'small', 'default']);
            },
            default() {
                return !this.$IVIEW || this.$IVIEW.size === ''
                    ? 'default'
                    : this.$IVIEW.size;
            },
        },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    computed: {
        wrapClasses() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: this.currentValue === true,
                    [`${prefixCls}-disabled`]: this.disabled,
                    [`${prefixCls}-${this.size}`]: !!this.size,
                    [`${prefixCls}-loading`]: this.loading,
                },
            ];
        },
        wrapStyles() {
            let style = {};
            if (this.trueColor && this.currentValue === true) {
                style['border-color'] = this.trueColor;
                style['background-color'] = this.trueColor;
            } else if (this.falseColor && this.currentValue === false) {
                style['border-color'] = this.falseColor;
                style['background-color'] = this.falseColor;
            }
            return style;
        },
        innerClasses() {
            return `${prefixCls}-inner`;
        },
    },
    methods: {
        toggle(event) {
            event.preventDefault();
            if (this.disabled || this.loading) {
                return false;
            }
            if (!this.beforeChange) {
                return this.handleToggle();
            }
            const before = this.beforeChange();
            if (before && before.then) {
                before.then(() => {
                    this.handleToggle();
                });
            } else {
                this.handleToggle();
            }
        },
        handleToggle() {
            const checked = this.currentValue === true ? false : true;
            this.currentValue = checked;
            this.$emit('input', checked);
            this.$emit('on-change', checked);
        },
    },
};
</script>

<style>
</style>