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
        let renderPost = this.props.posts.map(post => {
            return <div key={post._id}>
                <p>{post.title}</p>
            </div>
        })
        return (<div>
            <h1>post list</h1>
            {renderPost}
        </div>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPosts: getPosts
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);