import React, { Component } from 'react';
import Productize from '../../services/api';

class ProductEdit extends Component {

    state = {
        product: {},
    }

    async componentDidMount() {

        const { id } = this.props.match.params;

        const product = await Productize.show(id);
        this.setState({product: product.data})
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({
            product: {
                ...this.state.product,
                [name]:value
            }
        })
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Productize.update(this.state.product);
    }
    
    render() {

        const { product } = this.state;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="product-edit">
                <div className="nav-actions">
                    <button type="submit" className="">Save</button>
                </div>
                    <input type="text" onChange={this.handleInputChange} name="title" value={product.title} />
                    <input type="text" onChange={this.handleInputChange} name="description" value={product.description}/>
                    <input type="text" onChange={this.handleInputChange} name="url" value={product.url}/>
                </form>
            </div>
        );
    }

}

export default ProductEdit;