import { computed, defineComponent, PropType } from 'vue'
import NumberField from './fields/NumberField'
import StringField from './fields/StringField'
import ObjectField from './fields/ObjectField'

import { FieldPropsDefine, SchemaTypes } from './types'

import { retrieveSchema } from './utils'

export default defineComponent({
    name: 'SchemaItem',
    props: FieldPropsDefine,
    setup(props) {
        const retrievedSchemaRef = computed(() => {
            const { schema, rootSchema, value } = props
            return retrieveSchema(schema, rootSchema, value)
        })

        return () => {
            const type = props.schema.type
            const retrievedSchema = retrievedSchemaRef.value

            let Component: any

            switch (type) {
                case SchemaTypes.STRING: {
                    Component = StringField
                    break
                }
                case SchemaTypes.NUMBER: {
                    Component = NumberField
                    break
                }
                case SchemaTypes.OBJECT: {
                    Component = ObjectField
                    break
                }
                default: {
                    console.warn(`${type} is not supported`)
                }
            }

            return <Component {...props} schema={retrievedSchema} />
        }
    }
})
