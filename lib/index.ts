import { defineComponent, h } from 'vue'

export default defineComponent({
    setup(prop, { slots }) {
        return () => h('div', 'this is form')
    }
})
