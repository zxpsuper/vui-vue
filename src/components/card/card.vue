<template>
    <div :class="classes">
        <div :class="headClasses" v-if="showHead">
            <slot name="title">
                <p v-if="title">
                    <span>{{title}}</span>
                </p>
            </slot>
        </div>
        <div :class="bodyClasses" :style="bodyStyles">
            <slot></slot>
        </div>
    </div>
</template>
<script>
const prefixCls = 'vu-card';
const defaultPadding = 16;

import { oneOf } from '../../utils/assist';
export default {
    name: 'Card',
    props: {
        bordered: {
            type: Boolean,
            default: true,
        },
        shadow: {
            validator(value) {
                return oneOf(value, ['never', 'always', 'hover']);
            },
            default: 'never',
        },
        padding: {
            type: Number,
            default: defaultPadding,
        },
        title: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            showHead: true,
        };
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-bordered`]: this.bordered,
                    [`${prefixCls}-shadow-hover`]: this.shadow === 'hover',
                    [`${prefixCls}-shadow-always`]: this.shadow === 'always',
                },
            ];
        },
        headClasses() {
            return `${prefixCls}-head`;
        },
        extraClasses() {
            return `${prefixCls}-extra`;
        },
        bodyClasses() {
            return `${prefixCls}-body`;
        },
        bodyStyles() {
            if (this.padding !== defaultPadding) {
                return {
                    padding: `${this.padding}px`,
                };
            } else {
                return '';
            }
        },
    },
    mounted() {
        this.showHead = this.title || this.$slots.title !== undefined;
    },
};
</script>