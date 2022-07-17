const schema = {
    fields: {
        login: {
            title: {
                ru: 'Логин',
                en: 'Login',
            },
            placeholder: {
                ru: '',
                en: '',
            },
            initialValue: '',
            error: {
                ru: 'Некорректный логин',
                en: 'Incorrect login',
            },
            required: true,
            matching: {
                email: {
                    parser: '',
                    validator: '',
                },
                prhone: {
                    parser: '',
                    validator: '',
                },
            },
        },
        password: {},
    },
};

export default schema;
