import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePrice } from '../../store/actions/cartActions';
import PassOrder from './PassOrder';



class TotalAmount extends Component {
  // handleSubmit(props){
  //   // console.log('Button clicked')
  //   console.log('Вот это все на данный момент в корзине',this.props.price)
  //   console.log('Сумма = ',this.props.price*this.props.qty)
    

  // }


  render() {
    
    const { totalPrice } = this.props.cart;
   
    return (
      <div className="total-amount">
        <p>
          <strong>Delivery</strong>
          <span>Free</span>
        </p>
        <p>
          <strong>Total</strong>
          {totalPrice} Т
        </p>
        <div className="text-center">
         

          
        </div>
      
        <div>
        {/* <p>все что внутри пропсов{prod}</p> */}
          {/* {console.log(prod)}
          <p>Сумма {totalPrice}</p> */}
        </div>
      
      
      
      
      <p><PassOrder props={this.props}/></p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { updatePrice }
)(TotalAmount);
