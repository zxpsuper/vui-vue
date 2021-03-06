import Icon from './icon';
import Alert from './alert';
import Message from './message';
import Link from './link';
import Radio from './radio';
import RadioGroup from './radio-group';
import BackTop from './back-top';
import Card from './card';
import Button from './button';
import Upload from './upload';
import SwitchButton from './switch';
import Throttle from './throttle';
const components = {
    Icon,
    Alert,
    Message,
    Link,
    Radio,
    RadioGroup,
    BackTop,
    Card,
    Button,
    Upload,
    SwitchButton,
    Throttle,
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
