import React from 'react';
import st from "./Posting.module.css";
import { Formik, Form, Field } from "formik";


const Posting = (props) => {

    return (
        <div className={st.user_add_post}>
            <div className={st.title_block}>My posts</div>

            <Formik
                initialValues={{ post: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false)
                    props.addPost(values.post)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="post" placeholder="Text Post" className={st.user_write_news} disabled={props.disabledPosting} />
                        <button disabled={isSubmitting} className={st.send_news} disabled={props.disabledPosting}>Send</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default Posting;