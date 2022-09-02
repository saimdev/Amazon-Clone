import React, { Component } from 'react';
import ProductSearchCard from './ProductSearchCard';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_test_464559e85f630bd82c298f86ed926b5c1000e2e799040');

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    commerce.products.list().then((result) => {
      this.setState({ products: result.data });
    });
  }

  render() {
    return (
      <div className="container main-content">
        {
          this.state.products.map(product => {
            return <ProductSearchCard key={product.id} image={product.media.source} name={product.name} description={product.description} price={product.price.formatted_with_symbol} />
          })
        }
      </div>
    );
  }
}

export default ProductList;