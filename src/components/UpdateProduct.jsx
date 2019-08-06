// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { Component } from 'react';

// class UpdateProduct extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             isHidden: true,
//             newList: {
//                 mrp: '',
//                 sellingPrice: '',
//             }
//          }
//     }

//     handleChange = (event) => {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;

//       this.setState(prevState => (
//         { 
//             newList: {
//              ...prevState.newList,
//              [name]: value,
//             }
//         }),
//       )}

//       handleSubmit = (e) => {
//         e.preventDefault();
//         this.setState({isHidden:true});
//         this.props.onSubmit(this.state.newList);
//     }

//     renderForm = () => {
//         return (
//             <form style={{display:'flex',flexDirection: 'column', justifyContent: 'center'}}>
//             <TextField
//                 required
//                 id="outlined-name"
//                 label="Selling Price"
//                 type="number"
//                 name="sellingPrice"
//                 value={this.state.selling_price}
//                 margin="normal"
//                 variant="outlined"
//                 onChange={this.handleChange}
//             />

//             <TextField
//                 required
//                 id="outlined-name"
//                 label="Store ID"
//                 type="number"
//                 name="storeId"
//                 value={this.state.selling_price}
//                 margin="normal"
//                 variant="outlined"
//                 InputProps={{
//                     readOnly: true,
//                   }}
//                 onChange={this.handleChange}
//             />

//             <Button variant="outlined"  type = "submit" onSubmit={this.handleSubmit} color="primary" >
//                 Save
//             </Button>
//         </form>
//         )
//     }

//     render() { 
//         return ( 
//             <div>
//                 { this.renderForm()}
//             </div>
//          );
//     }
// }
 
// export default UpdateProduct;