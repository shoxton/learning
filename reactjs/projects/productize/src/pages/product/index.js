import React, { Component} from 'react';
import Productize from '../../services/api';

import './styles.css';

class Product extends Component {

    state = {
        product: {}
    }

    async componentDidMount() {

        const { id } = this.props.match.params;
        const response = await Productize.getById(id);
        this.setState({product: response.data});

    }

    render() {

        const { product } = this.state;

        return(
            <div className="main">
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>
                        <a href={product.url}>{product.url}</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Product;