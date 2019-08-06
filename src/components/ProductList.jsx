import React, { Component } from 'react';
import ProductListComponent from '../components/ProductListComponent';
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productList : [],
            error: null,
            response: [],
            isAddProduct: false,
         }
    }

    componentDidMount() {
        fetch(`https://apionlinedelivery-staging.mpaani.com/homedelivery/v1/retailerproduct/?limit=100&offset=0`, {method : "GET"})
        .then(data => data.json())
        .then(data => this.setState({productList : data.results}))
        .catch(err => console.log(err));
    }
      
    editProduct = productID =>{
        console.log(productID);
    }

    render() { 
        return ( 
            <div>
                <Link style = {{textDecoration : "none", }} to = "/AddProduct"> 
                    <Button style = {{position: "relative", left : 90, top: 450, zIndex: "1",}}  variant="contained" color="primary" className="button_cont"> &#x271A; Add Product </Button>
                </Link>
                <div>
                {this.state.productList.map(items => (
                    <ProductListComponent 
                        data = {items}
                        key = {items.id}
                        editProduct = {this.editProduct}
                    />
                ))}
                </div>
            </div>
        )
    }
}
 
export default ProductList;
