import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../actions/posts_action';
import ContentLoader from '../../components/loaders/content-loader/content_loader';

class Payout extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        // let renderposts =  this.props.posts.map(post => {
        //     // return <div key={post._id}><h3>{post.title}</h3> </div>
        //     return <p>test</p>
        // })
        return (
            <div className="flex-container">
                {this.props.posts.map(post => {
                    return <div key={post._id}>
                        <h3>{post.title} /by- {post.author}</h3>
                        <p>{post.body}</p>
                    </div>
                    // return <p>test</p>
                })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getPosts: getPosts }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Payout);