import r2wc from '@r2wc/react-to-web-component';
export * from './src/App';

customElements.define(
    'spry-test-app-component',
    r2wc(App, {
        props: {name: 'Varun'}
    })
);