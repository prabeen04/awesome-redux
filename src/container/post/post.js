import React from 'react';
import PostList from './post_list';
import AddPost from './add_post';

class Posts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <AddPost />
                <PostList />
            </div>
        );
    }
}

export default Posts;