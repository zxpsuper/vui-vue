<template>
    <a :class="wrapClasses" :href="disabled ? 'javascript:void(0);' : href">
        <span :class="innerClass">
            <slot></slot>
        </span>
    </a>
</template>
<script>
import { oneOf } from '../../utils/assist';

const prefixCls = 'vu-link';

export default {
    name: 'Link',
    props: {
        type: {
            validator(value) {
                return oneOf(value, [
                    'success',
                    'info',
                    'warning',
                    'error',
                    'default',
                    'primary',
                ]);
            },
            default: 'default',
        },
        underline: {
            type: Boolean,
            default: false,
        },
        href: {
            type: String,
            default: 'javascript:void(0);',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        innerClass() {
            return [`${prefixCls}-inner`];
        },
        wrapClasses() {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-underline`]: !!this.underline,
                    [`${prefixCls}-disabled`]: !!this.disabled,
                },
            ];
        },
    },
};
</script>
