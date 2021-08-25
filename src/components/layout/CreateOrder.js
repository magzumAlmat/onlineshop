import React, { Component } from 'react'
import Cart from '../cart/Cart'
import TotalAmount from '../cart/TotalAmount'
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showCart, addItem } from '../../store/actions/cartActions';
import CartItem from '../cart/CartItem';
import uuid from 'uuid';

export default class CreateOrder extends Component {
    render() {
        // const {cartItems}=props.CartItem
        return (
            <div className='container'>
                {this.props.location.params
                    .map(t => <span>{t}</span>)
                    .reduce((prev, curr) => [prev, ', ', curr])}
       
       

       {console.log('CREATE ORDER---',this.props.location.params)}
                    {/* <Scrollbars style={{ height: '35%' }}>
                        <div className="items">
                        {cartItems.length === 0 ? (
                            <h3>
                            В корзину ничего не добавлено <i className="far fa-frown" />
                            </h3>
                        ) : (
                            <ul>
                            {cartItems.map(item => (
                                <li key={uuid()}>
                                <CartItem item={item} />
                                </li>
                            ))}
                            </ul>
                        )}
                        </div>
                </Scrollbars> */}
                {/* <Cart/> */}
            </div>
        )
    }
}
