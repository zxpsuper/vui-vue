import Icon from './icon';
import Alert from './alert';
import Message from './message';
import Link from './link';
const components = {
    Icon,
    Alert,
    Message,
    Link,
};
export default {
    install(Vue) {
        for (let key in components) {
            const component = components[key];
            if (component.name) Vue.component(component.name, component);
        }
        Vue.prototype.$Message = Message;
    },
};
