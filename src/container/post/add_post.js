import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addPost } from '../../actions/posts_action';
import { Field, reduxForm } from 'redux-form';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
        this.setState({ open: false });
        console.log('values')
        this.props.addPost(values);
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
                secondary={true}
                onClick={this.handleClose}
                style={{ marginRight: '1rem'}}

            />,
            <RaisedButton
                label="Submit"
                primary={true}
                onClick={this.props.handleSubmit(this.onSubmit)}
            />,
        ];

        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <div>
                <FloatingActionButton  onClick={this.handleOpen} 
                    style={{position: 'fixed',right: '2rem', bottom: '2rem', zIndex: '1000'}}>
                    <ContentAdd />
                </FloatingActionButton>
                <div className="flex-container">
                    <Dialog
                        title="Share Your Story"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                    >
                <form onSubmit={handleSubmit(this.onSubmit)}>
                        
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
                  </form> 
                    </Dialog>
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