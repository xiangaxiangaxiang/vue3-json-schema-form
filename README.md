# vue3-json-schema-form

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 说明

```jsx
<JsonSchemaForm
    schema={schema}
    value={value}
    onChange={handleChange}
    locale={locale}
    contextRef={contextRef}
    uiSchema={uiSchema}
/>
```

### schema

json schema 对象，用来定义数据，同时也是我们表单的依据

### value

表单的数据结果，你可以从外部改变这个 value, 在表单被编辑的时候， 会通过`onchange`透出 value
