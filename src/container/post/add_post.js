import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class AddPost extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { handleSubmit } = this.props
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="author" component="input" type="text" />
                    </div>
                    <div>
                        <Field name="title" component="input" type="text" />
                    </div>
                    <div>
                        <Field name="body" component="input" type="text" />
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