import React from 'react';
import ContentLoader from '../../components/loaders/content-loader/content_loader';

class Payout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>Payout Component</h3>
                <ContentLoader/>
            </div>
        );
    }
}

export default Payout;