import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import CartIcon from '../cart/CartIcon'
import Cart from '../cart/Cart';
import { useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl' 
import Nav from 'react-bootstrap/Nav'
// import Cart from '../cart/Cart'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Container from 'react-bootstrap/esm/Container';
const MainNavbar = (props) => {
    // console.log('this is cardItem from navbar',props);
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    let styles={
        divStyle:{backgroundColor:'#343a40', paddingBottom:'0.1%'}
        };
    return (
        <div  >
       
        <div  style={styles.divStyle}> 
            {links}
            </div>
        
       
           
              
   
         
            </div>
         
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        cart:state.cart
    }
}

export default connect(mapStateToProps)(MainNavbar);