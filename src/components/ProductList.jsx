import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ProductListComponent from './ProductListComponent';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('https://apionlinedelivery-staging.mpaani.com/homedelivery/v1/retailerproduct/?limit=100&offset=0', { method: 'GET' })
      .then(data => data.json())
      .then(data => this.setState({ productList: data.results }))
      .catch(err => (err));
  }

    editProduct = (productID) => {
      console.log(productID);
    }

    render() {
      const { productList } = this.state;
      return (
        <div>
          <Link
            style={{
              width: '100%', position: 'fixed', textAlign: 'center', top: '450px', zIndex: '1', textDecoration: 'none',
            }}
            to="/AddProduct"
          >
            <Button variant="contained" color="primary" className="button_cont"> &#x271A; Add Product </Button>
          </Link>
          <div>
            {productList.map(items => (
              <ProductListComponent
                data={items}
                key={items.id}
                editProduct={this.editProduct}
              />
            ))}
          </div>
        </div>
      );
    }
}

export default ProductList;
