import React from 'react';
import st from './MessageSend.module.css';
import { Formik, Form, Field } from "formik";

const MessageSend = (props) => {

    return (
        <div>
            <Formik
                initialValues={{ message: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)
                    props.sendMessage(values.message)
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={st.send_message_block}>
                        <Field type="text" name="message" placeholder="Text Message" className={st.message_input} />
                        <button disabled={isSubmitting} className={st.send_message_btn}>Send</button>
                    </Form>
                )}
            </Formik>
        </div>


    )
}

export default MessageSend;
