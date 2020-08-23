const validate = values => {
    const errors = {};
    if (!values.post) {
        errors.post = 'Required';
    } else if (values.post.length > 15) {
        errors.post = 'Must be 15 characters or less';
    }

    if (!values.message) {
        errors.message = 'Required';
    } else if (values.message.length > 20) {
        errors.message = 'Must be 20 characters or less';
    }

    if (!values.login) {
        errors.login = 'Required';
    } else if (values.login.length > 3) {
        errors.login = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.password)) {
        errors.password = 'Invalid email address';
    }

    return errors;
};

export default validate;