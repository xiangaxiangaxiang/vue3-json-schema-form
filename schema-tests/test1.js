const Ajv = require('ajv')
const ajv = new Ajv()

const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            format: 'email'
        },
        age: {
            type: 'number'
        },
        pets: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        isWorker: {
            type: 'boolean'
        }
    },
    required: ['name', 'age']
}

const validate = ajv.compile(schema)
const valid = validate({
    name: '666@qq.com',
    age: 777,
    pets: ['hello', 'thank'],
    isWorker: false
})
if (!valid) {
    console.log(validate.errors)
}
