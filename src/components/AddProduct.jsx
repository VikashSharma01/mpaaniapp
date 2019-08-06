import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: {
        displayName: '',
        barcode: '',
        description: '',
        mrp: '',
        sellingPrice: '',
        storeId: '23416',
      },
    };
  }

    handleChange = (event) => {
      const { target } = event;
      const { value } = target;
      const { name } = target;

      this.setState(prevState => (
        {
          newList: {
            ...prevState.newList,
            [name]: value,
          },
        }));
    }

    handleSubmit = (event) => {
      const { newList } = this.state;
      const { history } = this.props;
      event.preventDefault();
      fetch('https://apionlinedelivery-staging.mpaani.com/homedelivery/v1/retailerproduct/', { method: 'POST', body: JSON.stringify(newList) })
        .then((responce) => {
          if (responce.ok) {
            return history.push('/');
          }

          throw new Error(responce.error);
        })
        .catch(err => (err));
    }

    renderForm = () => {
      const {
        displayName, barcode, description, mrp, sellingPrice, storeId,
      } = this.state;
      return (
        <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <TextField
            required
            id="outlined-name"
            label="Product Name"
            type="text"
            name="displayName"
            value={displayName}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />

          <TextField
            id="outlined-name"
            label="Barcode"
            type="text"
            name="barcode"
            value={barcode}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />

          <TextField
            id="outlined-name"
            label="Description"
            type="text"
            name="description"
            value={description}
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
            value={mrp}
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
            value={sellingPrice}
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
            value={storeId}
            margin="normal"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            onChange={this.handleChange}
          />

          <Button variant="outlined" onClick={this.handleSubmit} color="primary">
            Save
          </Button>
        </form>
      );
    }

    render() {
      return (
        <div>
          {this.renderForm()}
        </div>
      );
    }
}

AddProduct.propTypes = {
  history: PropTypes.objectOf({}).isRequired,
};

export default AddProduct;
