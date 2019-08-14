import { directive as clickOutside } from './click-outside';
import resize from './resize';
import mouseWheel from './mousewheel';
const directives = {
    'click-outside': clickOutside,
    resize,
    'mouse-wheel': mouseWheel,
};
export default {
    install(Vue) {
        for (let key in directives) {
            const directive = directives[key];
            Vue.directive(key, directive);
        }
    },
};
