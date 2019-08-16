<template>
    <button
        :class="classes"
        :disabled="disabled"
        @click="handleClickLink"
        v-bind="tagProps"
        :style="styless"
    >
        <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
        <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>
        <span v-if="showSlot" ref="slot">
            <slot></slot>
        </span>
    </button>
</template>

<script>
import Icon from '../icon';
import { oneOf } from '../../utils/assist';
// import mixinsLink from '../../mixins/link';
const prefixCls = 'vu-btn';
export default {
    name: 'Button',
    // mixins: [mixinsLink],
    components: { Icon },
    props: {
        type: {
            validator(value) {
                return oneOf(value, [
                    'default',
                    'primary',
                    'dashed',
                    'text',
                    'info',
                    'success',
                    'warning',
                    'error',
                ]);
            },
            default: 'default',
        },
        shape: {
            validator(value) {
                return oneOf(value, ['circle', 'circle-outline']);
            },
        },
        size: {
            validator(value) {
                return oneOf(value, ['small', 'large', 'default']);
            },
            default() {
                return !this.$IVIEW || this.$IVIEW.size === ''
                    ? 'default'
                    : this.$IVIEW.size;
            },
        },
        loading: Boolean,
        disabled: Boolean,
        htmlType: {
            default: 'button',
            validator(value) {
                return oneOf(value, ['button', 'submit', 'reset']);
            },
        },
        icon: {
            type: String,
            default: '',
        },
        customIcon: {
            type: String,
            default: '',
        },
        long: {
            type: Boolean,
            default: false,
        },
        light: {
            type: Boolean,
            default: false,
        },
        color: {
            validator(value) {
                return oneOf(value, [
                    'red',
                    'yellow',
                    'orange',
                    'olive',
                    'green',
                    'cyan',
                    'blue',
                    'purple',
                    'mauve',
                    'pink',
                    'brown',
                    'grey',
                    'gray',
                    'null',
                ]);
            },
            default: 'null',
        },
    },
    data() {
        return {
            showSlot: true,
        };
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-long`]: this.long,
                    [`${prefixCls}-${this.shape}`]: !!this.shape,
                    [`${prefixCls}-${this.size}`]: this.size !== 'default',
                    [`${prefixCls}-loading`]:
                        this.loading != null && this.loading,
                    [`${prefixCls}-icon-only`]:
                        !this.showSlot &&
                        (!!this.icon || !!this.customIcon || this.loading),
                    [`${prefixCls}-light`]: this.light,
                },
            ];
        },
        styless() {
            let data = {};
            if (this.color !== 'null') {
                if (this.light) {
                    return {
                        color: `var(--${this.color})`,
                        backgroundColor: `var(--${this.color}Light)`,
                        borderColor: `var(--${this.color}Light)`,
                    };
                } else {
                    return {
                        color: `#fff`,
                        backgroundColor: `var(--${this.color})`,
                        borderColor: `var(--${this.color})`,
                    };
                }
            }
            return data;
        },
        // Point out if it should render as <a> tag
        isHrefPattern() {
            const { to } = this;
            return !!to;
        },
        tagName() {
            const { isHrefPattern } = this;
            return isHrefPattern ? 'a' : 'button';
        },
        tagProps() {
            const { isHrefPattern } = this;
            if (isHrefPattern) {
                const { linkUrl, target } = this;
                return { href: linkUrl, target };
            } else {
                const { htmlType } = this;
                return { type: htmlType };
            }
        },
    },
    methods: {
        // Ctrl or CMD and click, open in new window when use `to`
        handleClickLink(event) {
            this.$emit('click', event);
            // const openInNewWindow = event.ctrlKey || event.metaKey;
            // this.handleCheckClick(event, openInNewWindow);
        },
    },
    mounted() {
        this.showSlot = this.$slots.default !== undefined;
    },
};
</script>

<style>
</style>