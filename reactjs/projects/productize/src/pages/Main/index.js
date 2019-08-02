import React, { Component } from 'react';
import './styles.css';
import Productize from '../../services/api';

class Main extends Component {

    state = {
        products: []
    }

    ProductService = new Productize();

    componentDidMount() {
        this.loadProducts();
        console.log(this)
    }

    loadProducts = async () => {
        const response = await this.ProductService.list();
        this.setState({ products: response.data.docs })
    }

    render() {

        const { products } = this.state;

        return(
            <main className="product-list">
                {products.map( product => (
                    <article key={product._id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <a href="">More</a>
                    </article>
                ) )}
            </main>
        );
    }
}

export default Main;