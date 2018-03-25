import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../actions/posts_action';
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
            return (<div>Loading...</div>);
        }
        if (this.props.isError) {
            return (<div>Error Fetching data</div>);
        }
        let renderPost = this.props.posts.map(post => {
            return <div key={post._id} className="post-container">
                <h4 className="post-container">{post.title}</h4>
                by <p className="post-container">{post.author} on {post.date}</p>
                <p className="post-container">{post.body}</p>
                <hr />
            </div>
        })
        let renderPost = this.props.posts.map(post => {
            return <Card>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>
        })
        return (<div className="flex-container">
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