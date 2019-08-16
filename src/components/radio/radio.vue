<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                :name="groupName"
                @change="change"
                @focus="onFocus"
                @blur="onBlur"
            />
        </span>
        <slot>{{ label }}</slot>
    </label>
</template>
<script>
import { findComponentUpward, oneOf } from '../../utils/assist';
import Emitter from '../../mixins/emitter';

const prefixCls = 'vu-radio';

export default {
    name: 'Radio',
    mixins: [Emitter],
    props: {
        value: {
            type: [String, Number, Boolean],
            default: false,
        },
        trueValue: {
            //可自定义真值，用途不大
            type: [String, Number, Boolean],
            default: true,
        },
        falseValue: {
            //可自定义假值，用途不大
            type: [String, Number, Boolean],
            default: false,
        },
        label: {
            type: [String, Number], // label才是组合选中的值
        },
        disabled: {
            type: Boolean,
            default: false,
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
        name: {
            type: String,
        },
        type: {
            type: String,
            default: 'default',
        },
    },
    data() {
        return {
            currentValue: this.value, // 用data中的currentValue来储存radio值，true or false
            group: false, // 是否组合使用
            groupName: this.name,
            parent: findComponentUpward(this, 'RadioGroup'), // 找寻是否又radio-group包含，无则undefinded
            focusWrapper: false, // 控制样式
            focusInner: false, // 控制样式
        };
    },
    computed: {
        wrapClasses() {
            return [
                `${prefixCls}-wrapper`,
                {
                    [`${prefixCls}-group-item`]: this.group,
                    [`${prefixCls}-wrapper-checked`]: this.currentValue,
                    [`${prefixCls}-wrapper-disabled`]: this.disabled,
                    [`${prefixCls}-${this.size}`]: !!this.size,
                    [`${prefixCls}-focus`]: this.focusWrapper,
                },
            ];
        },
        radioClasses() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: this.currentValue,
                    [`${prefixCls}-disabled`]: this.disabled,
                    [`${prefixCls}-normal`]: this.type === 'normal',
                    [`${prefixCls}-tick`]: this.type === 'tick',
                },
            ];
        },
        innerClasses() {
            return [
                `${prefixCls}-inner`,
                {
                    [`${prefixCls}-focus`]: this.focusInner,
                },
            ];
        },
        inputClasses() {
            return `${prefixCls}-input`;
        },
    },
    mounted() {
        if (this.parent) {
            this.group = true;
            if (this.name && this.name !== this.parent.name) {
                /* eslint-disable no-console */
                if (console.warn) {
                    console.warn('[vui] Name does not match Radio Group name.');
                }
                /* eslint-enable no-console */
            } else {
                this.groupName = this.parent.name;
            }
        }

        if (this.group) {
            this.parent.updateValue();
        } else {
            this.updateValue();
        }
    },
    methods: {
        change(event) {
            if (this.disabled) {
                return false;
            }
            const checked = event.target.checked;
            this.currentValue = checked;

            const value = checked ? this.trueValue : this.falseValue;
            this.$emit('input', value);

            if (this.group) {
                if (this.label !== undefined) {
                    // 调用父组件的方法将自身的值更新给父组件
                    this.parent.change({
                        value: this.label,
                        checked: this.value,
                    });
                }
            } else {
                this.$emit('on-change', value);
                this.dispatch('FormItem', 'on-form-change', value);
            }
        },
        updateValue() {
            this.currentValue = this.value === this.trueValue;
        },
        onBlur() {
            this.focusWrapper = false;
            this.focusInner = false;
        },
        onFocus() {
            if (this.group && this.parent.type === 'button') {
                this.focusWrapper = true;
            } else {
                this.focusInner = true;
            }
        },
    },
    watch: {
        value(val) {
            if (val === this.trueValue || val === this.falseValue) {
                this.updateValue();
            } else {
                throw 'Value should be trueValue or falseValue.';
            }
        },
    },
};
</script>
