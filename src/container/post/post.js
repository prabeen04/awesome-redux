import React from 'react';
import PostList from './post-list';

class Posts extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="flex-container">
                <PostList/>
            </div>
        );
    }
}

export default Posts;