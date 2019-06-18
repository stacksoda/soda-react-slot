export default {
    routes: [{
        path: '/',
        component: './App',
    }],
    plugins: [
        ['umi-plugin-react',{
            antd: true
        }],
    ],
}