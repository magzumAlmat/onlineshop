import React, { Component } from 'react'
import Cart from '../cart/Cart'
import TotalAmount from '../cart/TotalAmount'
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { showCart, addItem } from '../../store/actions/cartActions';
import CartItem from '../cart/CartItem';
import uuid from 'uuid';
import Table from 'react-bootstrap/Table'
import Media from 'react-bootstrap/Media'
import Alert from 'react-bootstrap/Alert'
export default class CreateOrder extends Component {
    render() {
         const {cartItems}=this.props.location.params
        return (
            <div className='container'>
               
       
            <div className="items">
              {cartItems.length === 0 ? (
                <h3>
                 Нечего отображать <i className="far fa-frown" />
                </h3>
              ) : (
                <div>
                    <Table striped  hover>
                            <thead>
                                <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                {/* <th>Продукт</th>
                              
                                <th>Цена</th>
                                <th>Количество</th> */}

                                </tr>
                            </thead>
                        {cartItems.map(item => (
                            <tbody>
                                <tr key={uuid()}>
                                
                                <td><Media>
                                        <img
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={item.picture}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <h5>{item.name}</h5>
                                           
                                        </Media.Body>
                                    </Media>
                                </td>
                                
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                </tr>

                            </tbody>
                           
                          
                         
                  ))} 
                </Table>
                <div>
                        <Alert  variant={'dark'} className="price">
                        ИТОГО :	  {this.props.location.params.totalPrice} T
                        </Alert>
                </div>
                
                </div>
              )}
            </div>
         
       
       
          {console.log('Cart ITEMS',cartItems)}
       {console.log('CREATE ORDER---',this.props.location.params.totalPrice)}
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
