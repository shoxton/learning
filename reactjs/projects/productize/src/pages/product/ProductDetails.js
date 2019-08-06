import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Productize from '../../services/api';

import './styles.css';

class Product extends Component {

    state = {
        product: {}
    }

    async componentDidMount() {

        const { id } = this.props.match.params;
        const response = await Productize.show(id);
        this.setState({product: response.data});

    }

    render() {

        const { product } = this.state;
        const { id } = this.props.match.params;

        return(
            <div className="container">
                <div className="nav-actions">
                    <Link to={`/products/${id}/edit`}>edit</Link>
                </div>
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