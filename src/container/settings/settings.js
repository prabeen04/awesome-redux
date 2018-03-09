import React from 'react';
import ContentLoader from '../../components/loaders/content-loader/content_loader';

class Settings extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>Settings Component</h3>
                <div className="test">
                    <ContentLoader/>
                </div>
            </div>
        );
    }
}

export default Settings;