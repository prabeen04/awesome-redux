import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../actions/posts_action';

class PostList extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        console.log('inside post CWM');
        this.props.getPosts();
    }
    componentDidMount(){
        console.log(this.props.posts);
    }
    render(){
        return(
            <h1>post list</h1>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPosts: getPosts
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);