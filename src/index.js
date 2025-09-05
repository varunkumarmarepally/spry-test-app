import r2wc from '@r2wc/react-to-web-component';
export * from './SpryApp';

customElements.define(
    'spry-test-app-component',
    r2wc(SpryApp, {
        props: {name: "string"}
    })
);