import React from 'react';
import PostList from './post_list';
import AddPost from './add_post';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

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
        return (
            <div className="flex-container">
                <div>
                    <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
                    <Dialog
                        title="Scrollable Dialog"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                    >
                        <AddPost />
                    </Dialog>
                </div>

                <PostList />
            </div>
        );
    }
}


export default Posts;