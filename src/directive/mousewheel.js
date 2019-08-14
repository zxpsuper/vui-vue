/**
 * 鼠标滚轮事件
 */
import normalizeWheel from 'normalize-wheel';

const isFirefox =
    typeof navigator !== 'undefined' &&
    navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const mousewheel = function(element, callback) {
    const eventFunc = function(event) {
        const normalized = normalizeWheel(event);
        callback && callback.apply(this, [event, normalized]);
    };
    if (element && element.addEventListener) {
        element.addEventListener(
            isFirefox ? 'DOMMouseScroll' : 'mousewheel',
            eventFunc
        );
    }
    element._onMousewheel = eventFunc;
};

export default {
    bind(el, binding) {
        mousewheel(el, binding.value);
    },
    unbind(el, binding) {
        window.removeEventListener(
            isFirefox ? 'DOMMouseScroll' : 'mousewheel',
            el._onMousewheel
        );
    },
};
