import React from 'react';
import ContentLoader from '../../components/loaders/content-loader/content_loader';

class Team extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>Team Component</h3>
                <ContentLoader/>
            </div>
        );
    }
}

export default Team;