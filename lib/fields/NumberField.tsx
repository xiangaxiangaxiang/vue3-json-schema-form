import { getWidget } from '../theme'
import { defineComponent } from 'vue'
import { FieldPropsDefine, CommonWidgetDefine } from '../types'

export default defineComponent({
    name: 'NumberField',
    props: FieldPropsDefine,
    setup(props) {
        const handleChange = (v: any) => {
            props.onChange(v)
        }

        const NumberWidgetRef = getWidget('NumberWidget')

        return () => {
            const NumberWidget = NumberWidgetRef.value as CommonWidgetDefine
            const { value, errorSchema, schema } = props
            return (
                <NumberWidget
                    value={value}
                    onChange={handleChange}
                    errors={errorSchema.__errors}
                    schema={schema}
                />
            )
        }
    }
})
