import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import M from 'materialize-css';
import SearchInput from './SearchInput';
// import SearchButton from './SearchButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
var selectedTab;

class SignedInLinks extends Component{
    componentDidMount(){
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, alignment: 'right', coverTrigger: false});
    }

    render(){
        return (
            <div>
        <Container>
        <Row>
            <Col xs={2} md={2}>
            <Navbar>
            <Navbar className='container'>
            <Navbar.Brand href="#home">ALCO</Navbar.Brand>
            </Navbar>
            </Navbar>
            </Col>
            <Col xs={4} md={3}>
             <SearchInput/>
            </Col>
            <Col xs={12} md={7}>
              <Container>
                  <Row>
                  <Col xs={8} md={4} ></Col>
                  <Col xs={2} md={2}> <NavLink to="/showorders" >Заказы</NavLink></Col>
                  <Col xs={2} md={2}> <NavLink to="/products">Продукты</NavLink></Col>
                  <Col xs={2} md={2}><NavLink to="/createproduct">Добавить продукт</NavLink></Col>
                
                  <Col xs={2} md={2}>
                        <a onClick={this.props.signOut} href={() => false}>Выйти</a>
                        <NavLink to="/" 
                            className="btn btn-floating pink lighten-1 dropdown-trigger"
                            data-target='dropdown-profile'>{this.props.profile.initials}
                        </NavLink>
                  
                        <ul id="dropdown-profile" className="dropdown-content">
                                    <li><NavLink to='/profile'>Profile</NavLink></li>
                        </ul>
                  </Col>

                </Row>
                </Container>   
            </Col>
          </Row>
        </Container>
        </div>
            // <ul className="right">
            //     <li>
            //         <NavLink to="/products">Products</NavLink>
            //     </li>
            //     <li>
            //         <NavLink to="/showorders" >Ordes</NavLink>
            //     </li>
            //     <li>
            //         <NavLink to="/createproduct">New Prod</NavLink>
            //     </li>
            //     <li>
            //         <SearchInput />
            //     </li>
                
            //     <li>
            //         <NavLink to="/create">New Project</NavLink>
            //     </li>

            //     <li>
            //         <NavLink to="/">projects</NavLink>
            //     </li>

            //     <li>
            //         <a onClick={this.props.signOut} href={() => false}>Log Out</a>
            //     </li>
            //     <li>
            //         <NavLink to="/" 
            //         className="btn btn-floating pink lighten-1 dropdown-trigger"
            //         data-target='dropdown-profile'>{this.props.profile.initials}</NavLink>
            //         <ul id="dropdown-profile" className="dropdown-content">
            //             <li><NavLink to='/profile'>Profile</NavLink></li>
            //         </ul>
            //     </li>
            // </ul>
        );
    }
    
}

const mapDispatchToProps = dispatch => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);