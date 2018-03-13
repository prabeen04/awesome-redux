import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../actions/posts_action';
import ContentLoader from '../../components/loaders/content-loader/content_loader';

class Payout extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getPosts();
    }
    render(){
        return(
            <div className="flex-container">
                {/* <ContentLoader/> */}
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {posts: state.posts}
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({getPosts: getPosts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Payout);