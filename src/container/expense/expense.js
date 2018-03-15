import React from 'react';
import ContentLoader from '../../components/loaders/content-loader/content_loader';

class Expense extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>Expense Component</h3>
                <div className="test">
                    <ContentLoader/>
                </div>
            </div>
        );
    }
}

export default Expense;