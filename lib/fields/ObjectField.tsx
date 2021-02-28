import { defineComponent, inject } from 'vue'
import { FieldPropsDefine } from '../types'
import { SchemaFormContextKey } from '../context'

export default defineComponent({
    name: 'ObjectField',
    props: FieldPropsDefine,
    setup(props) {
        const context = inject(SchemaFormContextKey)

        return () => {
            return null
        }
    }
})
