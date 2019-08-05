import React, { Component } from 'react';
import './styles.css';
import Productize from '../../services/api';

class Main extends Component {

    state = {
        products: [],
        productMeta: {},
        page: 1
    }

    ProductService = new Productize();

    componentDidMount() {
        this.loadProducts();
        console.log(this)
    }

    loadProducts = async (page=1) => {
        const response = await this.ProductService.list(page);
        const { docs, ...productMeta } = response.data;

        this.setState({ products: docs, productMeta, page });
        console.log(this.state)
    }

    prevPage = () => {

        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber)
    } 

    nextPage = () => {
        
        const { productMeta, page } = this.state;

        if (page === productMeta.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    }

    render() {

        const { products, productMeta, page } = this.state;

        return(
            <main id="main">
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Previous</button>
                    <button disabled={page === productMeta.pages} onClick={this.nextPage}>Next</button>
                </div>
                <div className="product-list">
                    {products.map( product => (
                        <article key={product._id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <a href="">More</a>
                        </article>
                    ) )}
                </div>
            </main>
        );
    }
}

export default Main;