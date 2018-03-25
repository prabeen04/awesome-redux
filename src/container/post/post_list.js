import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../actions/posts_action';
import ContentLoader from '../../components/loaders/content-loader/content_loader';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class PostList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        console.log(this.props)
        if (this.props.isLoading) {
            return (<ContentLoader />);
        }
        if (this.props.isError) {
            return (<div>Error Fetching data</div>);
        }
        // let renderPost = this.props.posts.map(post => {
        //     return <div key={post._id} className="post-container">
        //         <h4 className="post-container">{post.title}</h4>
        //         by <p className="post-container">{post.author} on {post.date}</p>
        //         <p className="post-container">{post.body}</p>
        //         <hr />
        //     </div>
        // })
        let renderPost = this.props.posts.map(post => {
            return <Card key={post._id} style={{margin: '1rem 0.4rem', boxShadow: ' 0 2px 4px 2px #ccc'}}>
                {/* <CardHeader
                    title={post.author}
                    subtitle="Programmer"
                /> */}
                <CardTitle title={post.title} subtitle={`By ${post.author} on ${post.date}`} />
                <CardText>
                {post.body}
            </CardText>
                {/* <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions> */}
            </Card>
        })
        return (<div className="flex-container-column">
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