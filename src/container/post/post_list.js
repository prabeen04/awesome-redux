import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../actions/posts_action';

class PostList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('inside post CWM');
        // this.props.getPosts();
    }
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        console.log(this.props)
        if(this.props.isLoading){
            return(<div>Loading...</div>);
        }
        if(this.props.isError){
            return(<div>Error Fetching data</div>);
        }
        let renderPost = this.props.posts.map(post => {
            return <div key={post._id}>
                <h4>{post.title}</h4> by <p>{post.author} on {post.date}</p>
                <p>{post.body}</p>
                <hr/>
            </div>
        })
        return (<div className="">
            {renderPost}
        </div>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.posts.posts,
        isLoading: state.posts.isLoading,
        isError: state.posts.isError
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPosts: getPosts
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);