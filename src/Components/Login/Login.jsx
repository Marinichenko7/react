import React from "react";
import st from "./Login.module.css";
// import { Field, reduxForm } from 'redux-form';
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = (props) => {
    
    return (
        <Formik
            initialValues={{ login: '', password: '', rememberMe: false }}
            validate={values => {
                const errors = {};
                if (!values.login) {
                    errors.login = 'Вы не ввели: Login';
                } else if (values.login.length < 4) {
                    errors.login = 'Login - должен быть не короче 4-ох символов';
                }
                if (!values.password) {
                    errors.password = 'Вы не ввели: Password';
                } else if (values.password.length < 4) {
                    errors.password = 'Password - должен быть не короче 4-ох символов';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                props.authUserThunk(values.login, values.password)

            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field type="text" name="login" placeholder="Login" />
                        <ErrorMessage name="login" component="div" />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <Field type="checkbox" name="rememberMe" /> Remember Me
                    </div>

                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    )
}


/* const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="login" type="text" placeholder='Login' />
            </div>
            <div>
                <Field component="input" name="password" type="text" placeholder='Password' />
            </div>
            <div>
                <Field component="input" name="rememberMe" type="checkbox" /> Remember Me
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const WithReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
    const handleSubmit= (values) => {
        console.log(values)
        debugger
    }
    return(
        <div className={st.login_block}>
            <WithReduxForm handleSubmit={handleSubmit} />
        </div>
    )
} */

/* class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            rememberMe: false,
            doneForm: false,
            errors: {
                login: false,
                password: false
            },
            isTouch: {
                login: false,
                password: false
            }
        }
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => {
            this.onDoneForm()
        });
    }
    handleUserFocus = (e) => {
        let name = e.target.name
        this.setState((state) => {
            return { ...state, isTouch: { ...state.isTouch, [name]: true } }
        })
    }
    onBlurName = (e) => {
        let val = this.state.login
        let touch = this.state.isTouch.login
        if (val.length === 0 && touch) {
            this.setState((state) => {
                return { ...state, errors: { ...state.errors, login: true } }
            }, () => {
                this.onDoneForm()
            })
        } else {
            this.setState((state) => {
                return { ...state, errors: { ...state.errors, login: false } }
            }, () => {
                this.onDoneForm()
            })
        }
    }
    onBlurPass = (e) => {
        let val = this.state.password
        let touch = this.state.isTouch.password
        if (val.length === 0 && touch) {
            this.setState((state) => {
                return { ...state, errors: { ...state.errors, password: true } }
            }, () => {
                this.onDoneForm()
            })
        } else {
            this.setState((state) => {
                return { ...state, errors: { ...state.errors, password: false } }
            }, () => {
                this.onDoneForm()
            })
        }
    }
    handleUserRememberMe = (e) => {
        this.setState({
            rememberMe: e.target.checked
        })
    }
    onDoneForm = () => {
        if (!this.state.errors.login && !this.state.errors.password && this.state.login.length !== 0 && this.state.password.length !== 0) {
            this.setState({
                doneForm: true
            })
        } else {
            this.setState({
                doneForm: false
            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className={st.login_block}>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            onFocus={this.handleUserFocus}
                            onChange={this.handleUserInput}
                            onBlur={this.onBlurName}
                            name="login"
                            type="text"
                            placeholder='Login'
                            value={this.state.login}
                            className={this.state.errors.login ? st.error_input : st.approved_input}
                        />

                    </div>
                    <div>
                        <input
                            onFocus={this.handleUserFocus}
                            onChange={this.handleUserInput}
                            onBlur={this.onBlurPass}
                            name="password"
                            type="password"
                            placeholder='Password'
                            value={this.state.password}
                            className={this.state.errors.password ? st.error_input : st.approved_input}
                        />
                    </div>
                    <div>
                        <input onChange={this.handleUserRememberMe} name="rememberMe" type="checkbox" checked={this.state.rememberMe} /> Remember Me
                    </div>
                    <div>
                        <button disabled={!this.state.doneForm} type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
} */

export default Login;