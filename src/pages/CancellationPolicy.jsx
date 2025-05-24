import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const CancellationPolicy = () => {
    
useEffect(()=>{
    window.scrollTo(0,0)
})

  return (
    <>
      <Container style={{ marginBottom: 30, marginTop: 90 }}>
        <h3 style={{ textAlign: "center", fontSize: 36, marginTop: 30 }}>
          CANCELLATION POLICY
        </h3>
        <p style={{ marginTop: 30, fontSize: 22 }}>1. Order Cancellation </p>
        <p>
          You may cancel your order within 24 hours of placement for a full
          refund. After 24 hours, we begin processing your order and cannot
          guarantee a cancellation. Please contact us as soon as possible if you
          wish to cancel.
        </p>

        <p style={{ marginTop: 30, fontSize: 22 }}>2. How to Cancel</p>
        <p>
          Email our customer service at Email:  <a href="mailto:contact@planetclothing.com">
              contact@planetclothing.com
            </a> Phone:
            <a href="tel:7865939895">+91-7865939895</a>,
            <a href="tel:1204851109">+91-1204851109</a>. Include your order number and request
          to cancel your order.
        </p>
       
        

        <p style={{ marginTop: 30, fontSize: 22 }}>3. Refund Process </p>
        <p>
        Once your cancellation is confirmed, we will process your refund within 5-7 business days.
        Refunds will be issued to the original payment method used for the order.
        </p>
       

        <p style={{ marginTop: 30, fontSize: 22 }}>4. Exceptions </p>
        <p>
        Customized or special orders may not be eligible for cancellation. Please check the product description for details.
        </p>
        
        <p>Thank you for supporting Our Planet!</p>

      </Container>
    </>
  );
};

export default CancellationPolicy;
