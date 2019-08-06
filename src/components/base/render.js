// function 类型的组件，调用render函数
export default {
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function
    },
    render: (h, ctx) => {
        return ctx.props.render(h);
    }
};