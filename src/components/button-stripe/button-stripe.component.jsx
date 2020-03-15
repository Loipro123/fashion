import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publistableKey = "pk_test_08eIA16Cy2MYFsRlEockbtje00YQvBCX3y";
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="M & T Fashion"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            image="https://sendeyo.com/up/d/f3eb2117da"
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publistableKey}
        />
    )
}

export default StripeCheckoutButton;