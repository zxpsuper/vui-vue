/**
 * v-resize 值支持 Function 和 Option(Object)
 * Option.value: function 执行函数
 * Option.debounce: 防抖时间，单位ms, 默认 200 ms
 * Option.quiet: 静态执行，即加载时便执行一次function, 默认true
 */
export default {
    name: 'resize',
    inserted(el, binding) {
        let cb = binding.value;
        let debounce = 200; // 函数防抖
        let callOnLoad = true;

        if (typeof binding.value !== 'function') {
            cb = binding.value.value;
            debounce = binding.value.debounce || debounce;
            callOnLoad = binding.value.quiet !== true ? false : callOnLoad;
        }
        let debounceTimeout = null;
        const onResize = () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(cb, debounce);
        };

        window.addEventListener('resize', onResize, { passive: true });
        el._onResize = onResize;

        callOnLoad && onResize();
    },
    unbind(el, binding) {
        window.removeEventListener('resize', el._onResize);
    },
};
