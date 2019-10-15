import { directive as clickOutside } from './click-outside';
import resize from './resize';
import lazyLoad from './lazyLoad';
import mouseWheel from './mousewheel';
import longPress from './longPress';
const directives = {
    'click-outside': clickOutside,
    resize,
    'mouse-wheel': mouseWheel,
    'long-press': longPress,
};
export default {
    install(Vue) {
        for (let key in directives) {
            const directive = directives[key];
            Vue.directive(key, directive);
        }
        Vue.directive('lazy', lazyLoad(Vue));
    },
};
