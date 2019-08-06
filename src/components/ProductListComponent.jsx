import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar, Button, Typography, Box, Switch, FormControlLabel,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  list: {
    flexGrow: 1,
  },

  paper: {
    width: 350,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    border: '1px solid rgba(128,128,128, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(237, 241, 244, 0.5)',
    },
    display: 'flex',
  },

  button: {
    fontWeight: 'bold',
    color: '#60C5D8',
  },

  avatar_and_edit: {
    width: '30%',
  },

  product_details_list: {
    width: '65%',
  },


  product_avatar: {
    margin: 8,
    width: 60,
    height: 60,
  },

  product_details: {
    marginLeft: '10px',
    marginTop: '7px',
  },

  product_dispalyName: {
    color: 'black',
    fontFamily: 'serif',
    fontSize: '15px',
  },

  sellingPrice: {
    color: 'green',
  },

  product_modification: {
    fontSize: '10px',
  },
}));

const ProductListComponent = (props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <>
      <div className={classes.list}>
        <div className={classes.paper}>
          <div className={classes.avatar_and_edit}>
            <Avatar
              className={classes.product_avatar}
              alt="product-pic"
              src={data.libraryProduct ? data.libraryProduct.image : ''}
            />

            <Button variant="outlined" onClick={() => props.editProduct(data.id)} color="primary" className={classes.button}>
                            &#x270E; Edit
            </Button>
          </div>

          <div className={classes.product_details_list}>
            <Typography
              className={classes.product_details}
              component="div"
            >
              <div className={classes.product_details_head}>

                <div className={classes.product_title}>
                  <Box fontWeight="fontWeightBold" className={classes.product_dispalyName}>
                    {data.displayName}
                  </Box>
                </div>

                <div className={classes.product_mrp_and_sellingmrp}>
                  <Box className={classes.sellingPrice}>
                    &#x20b9;
                    {' '}
                    {data.sellingPrice}
                  </Box>
                  {(data.mrp <= data.sellingPrice)
                    ? (
                      <Box>
                        {null}
                      </Box>
                    ) : (
                      <Box>
                    &#x20b9;
                        {' '}
                        {data.mrp}
                      </Box>
                    )
                  }
                </div>

                <div>
                  <FormControlLabel control={<Switch value="checkedC" />} label="In Stock" />
                </div>

                <div>
                  <Box fontWeight="fontWeightLight" className={classes.product_modification}>
                    {data.modifiedOn}
                  </Box>
                </div>
              </div>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListComponent;
