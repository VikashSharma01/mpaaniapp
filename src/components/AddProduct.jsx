import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responce : [],
            newList: {
                displayName: '',
                barcode: '',
                description: '',
                mrp: '',
                sellingPrice: '',
                storeId: '23416',
            }
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

      this.setState(prevState => (
        { 
            newList: {
             ...prevState.newList,
             [name]: value,
            }
        }),
      )}

    handleSubmit = (event) => {
        event.preventDefault();      
        fetch(`https://apionlinedelivery-staging.mpaani.com/homedelivery/v1/retailerproduct/` , {method : "POST", body: JSON.stringify(this.state.newList)})
        .then((responce) => {
            if(responce.ok){
                return this.props.history.push('/')
            }
            else{
                throw new Error (responce.error)
            }
        })
        .catch(err => console.log(err))
    }

    renderForm = () => {
        return (
            <form style={{display:'flex',flexDirection: 'column', justifyContent: 'center'}}>
            <TextField
                required
                id="outlined-name"
                label="Product Name"
                type="text"
                name="displayName"
                value={this.state.product_name}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
            />

            <TextField
                id="outlined-name"
                label="Barcode"
                type="text"
                name="barcode"
                value={this.state.barcode}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
            />

            <TextField
                id="outlined-name"
                label="Description"
                type="text"
                name="description"
                value={this.state.description}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
            />

            <TextField
                required
                id="outlined-name"
                label="MRP"
                type="number"
                name="mrp"
                value={this.state.mrp}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
            />

            <TextField
                required
                id="outlined-name"
                label="Selling Price"
                type="number"
                name="sellingPrice"
                value={this.state.selling_price}
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
            />

            <TextField
                required
                id="outlined-name"
                label="Store ID"
                type="number"
                name="storeId"
                value={this.state.selling_price}
                defaultValue= "23416"
                margin="normal"
                variant="outlined"
                InputProps={{
                    readOnly: true,
               }}
                onChange={this.handleChange}
            />

            <Button variant="outlined" onClick={this.handleSubmit} color="primary" >
                Save
            </Button>
        </form>
        )
    }

    render() {
        return ( 
            <div>
                {this.renderForm()}
            </div>
         );
    }
}
 
export default AddProduct;
