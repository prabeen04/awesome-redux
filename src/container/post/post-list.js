import React from 'react';
import { conect } from 'react-redux';

class PostList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <h1>post list</h1>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);