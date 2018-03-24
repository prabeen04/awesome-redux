import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, TextArea } from 'semantic-ui-react'

class AddPost extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const renderField = ({ input, label, type, meta: { touched, error }, ...custom }) => (
            <div>
                <Input
                    placeholder={label}
                    className="semantic-input"
                    fluid={true}
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )
        const renderTextarea = ({ input, label, type, meta: { touched, error }, ...custom }) => (
            <div>
                <Form.Field
                    placeholder={label}
                    className="semantic-input"
                    fluid={true}
                    control={TextArea}
                    siz="large"
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="author" label="Author" component={renderField} />
                    </div>
                    <div>
                        <Field name="title" label="Post Title" component={renderField}  />
                    </div>
                    <div>
                        <Field name="body" label="Your Story" component={renderTextarea}  style={{width: '100%'}} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
AddPost = reduxForm({
    form: 'postForm'
})(AddPost);

export default AddPost;