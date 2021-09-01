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
const MainNavbar = (props) => {
    // console.log('this is cardItem from navbar',props);
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <div className="darken-3  grey">
    
   
          <Navbar collapseOnSelect expand="lg" bg="dark" >
          <div className='container'>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                   
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">ВОПРОСЫ/ОТВЕТЫ</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        КОНТАКТЫ
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
            {links}
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" >
            <div className='container'>
                <Navbar.Brand href="#">ALCO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Поиск"
                    aria-label="Поиск"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary" size="sm"><SearchIcon fontSize="small"/></Button>
                    </InputGroup.Append>
                    <InputGroup.Append>
                    {links}
                    </InputGroup.Append> 
                    <InputGroup.Append>
                    <CartIcon />
                    </InputGroup.Append>
                </InputGroup>
                </Navbar.Collapse>
                </div>
                </Navbar> */}



       
              
                    </div>
             

        // <nav className="nav-wrapper grey darken-3">
           
          
        //     <div className="container">
        //        <Link to='/' className="brand-logo"></Link>
        //        {/* <CartIcon/> */}
        //         {links}  
        //         <CartIcon />
        //     </div>
           
        // </nav>
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