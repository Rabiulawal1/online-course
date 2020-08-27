import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {

    const cart = props.cart;

    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
        
    }

    let shipping = 15;

    if (total < 50) {
        shipping = 25
        
    }

    else if (total > 200) {
        shipping = 10
        
    }
    



    return (
        <div className='cart '>

                <div class="card border-success mb-3 shadow-lg p-3 mb-5 bg-white rounded bg-info">
                <div class="card-header bg-transparent border-success">Course enroll summary</div>
                <div class="card-body text-success">
                    <h5 class="card-title">Course enroll : {cart.length}</h5>
                    <h5 class="card-title">Shipping cost: {shipping} $</h5>
                    <p class="card-text"></p>
                </div>
                <div class="card-footer bg-transparent border-success">Total price : {total + shipping} $</div>
                </div>    



            
        </div>
    );
};

export default Cart;