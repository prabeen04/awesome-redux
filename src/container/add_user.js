import React from 'react';

class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        console.log(e.target.value)
    }
    handleChange = (e) => {
        console.log(e.target.value)
    }
    render(){
        return(
            <div>
                <h3>Add User</h3>
                <input type="text" onChange={this.handleChange}/>
               <button onClick={this.handleSubmit}>Add User</button> 
            </div>
        );
    }
}

export default AddUser;