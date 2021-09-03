import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl' 
import Nav from 'react-bootstrap/Nav'
// import Cart from '../cart/Cart'
import InputGroup from 'react-bootstrap/InputGroup'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartIcon from '../cart/CartIcon'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const SignedOutLinks = () => {
    return (<div>
        {/* <Container>
        <Row>
            <Col xs={2} md={2}>
            <Navbar>
            <Navbar className='container'>
            <Navbar.Brand href="#home">ALCO</Navbar.Brand>
            </Navbar>
            </Navbar>
            </Col>
            <Col xs={10} md={6}>
             <SearchInput/>
            </Col>
            <Col xs={6} md={4}>
              <Container>
                <Row>
                    <Col xs>  <CartIcon/></Col>
                    <Col xs={{ order: 12 }}> <NavLink to="/signup">РЕГИСТРАЦИЯ</NavLink></Col>
                    <Col xs={{ order: 1 }}> <NavLink to="/signin">ВХОД</NavLink></Col>
                </Row>
                </Container>   
            </Col>
          </Row>
        </Container> */}


       


        <Navbar className='container'  style={{backgroundColor:"#343a40"}}>
        <Navbar.Brand href="/">ALCO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end  ">
           
            <NavLink to="/signup" className="mx-4">РЕГИСТРАЦИЯ</NavLink>
            <NavLink to="/signin" className="mx-4" >ВХОД</NavLink>
            <div><CartIcon /></div>
        </Navbar.Collapse>
      </Navbar>
        </div>

    );
}

export default SignedOutLinks;