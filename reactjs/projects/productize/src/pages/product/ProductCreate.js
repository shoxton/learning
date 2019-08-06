import React, { Component } from 'react';
import Productize from '../../services/api';

class ProductCreate extends Component {

    state = {
        title: '',
        description: '',
        url: ''
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({[name]:value})
        
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Productize.save(this.state);
    }
    
    render() {

        console.log(this.state)

        const { title, description, url } = this.state;

        return (
            <div className="main">
                <h1>Create</h1>
            </div>
        );
    }

}

export default ProductCreate;