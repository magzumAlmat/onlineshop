import React, { Component } from 'react'

export default class PassOrder extends Component {
    render() {
        
        return (
            <div>
                 <button type="button" className="btn-custom "  
                    onClick={(props)=>(
                        console.log('btn',this.props)

                        )}
                    // onClick={passCartData}
                    >
                    Сформировать заказ единожды
                </button>

                
            </div>
        )
    }
}
