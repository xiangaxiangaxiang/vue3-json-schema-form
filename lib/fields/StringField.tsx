import { FieldPropsDefine } from '../types'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'StringField',
    props: FieldPropsDefine,
    setup(props) {
        const handleChange = (v: any) => {
            props.onChange(v)
        }

        // const TextWidgeRef = computed(() => {
        //     return getWidget('TextWidget', props).value
        // })

        return () => {
            const { value, schema } = props
            return (
                <input
                    type="text"
                    value={value as string}
                    onChange={handleChange}
                />
            )
        }
    }
})
