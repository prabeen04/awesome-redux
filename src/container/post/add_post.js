import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'semantic-ui-react'

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
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="author" component={renderField} type="text" />
                    </div>
                    <div>
                        <Field name="title" component={renderField}  type="text" />
                    </div>
                    <div>
                        <Field name="body" component={renderField}  type="text" />
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