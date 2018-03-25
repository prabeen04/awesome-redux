import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts_action';
import { Field, reduxForm } from 'redux-form';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, Input, TextArea } from 'semantic-ui-react'
import './post.css';

class AddPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        };
        this.onSubmit = this.onSubmit.bind(this)
        this.renderField = this.renderField.bind(this)
        this.renderTextarea = this.renderTextarea.bind(this)
        // this.action = this.action.bind(this)
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onSubmit = (values) => {
        console.log(values)
        this.props.addPost(values);
    //    this.setState({name: '', email: '', location: ''})
   }

 renderField = ({ input, label, type, meta: { touched, error }, ...custom }) => (
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
 renderTextarea = ({ input, label, type, meta: { touched, error }, ...custom }) => (
    <div>
        <Form.Field
            placeholder={label}
            className="semantic-input"
            control={TextArea}
            siz="large"
            {...input}
            {...custom}
        />
        {touched && error && <span>{error}</span>}
    </div>
)
    render() {
       const actions = [
            <RaisedButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <RaisedButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div>
                <RaisedButton label="Add a Post" onClick={this.handleOpen} />
                <div className="flex-container">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Dialog
                        title="Share Your Story"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                    >
                        
                            <div className="post-input">
                                <Field name="author" label="Author" component={this.renderField} />
                            </div>
                            <div className="post-input">
                                <Field name="title" label="Post Title" component={this.renderField} />
                            </div>
                            <br />
                            <div className="post-input">
                                <Field name="body" label="Your Story" component={this.renderTextarea} style={{ width: '100%' }} />
                            </div>
                            <button type="submit">Submit</button>
                    </Dialog>
                  </form> 
                </div>

            </div>
        )
    }
}
const validate = values => {
    const errors = {};
    return errors
}
const mapStateToProps = (state) => ({
    // ...
});

const mapDispatchToProps = (dispatch)  => {
    return bindActionCreators({ addPost: addPost }, dispatch)
};

AddPost = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPost);

export default reduxForm({
    form: 'postForm',
    validate
})(AddPost);