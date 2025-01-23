// src/pages/CheckoutPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

const CheckoutPage = () => {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(50000);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        price
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget) {
      paymentMethodsWidget.updateAmount(price, "COUPON");
    }
  }, [price]);

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      await paymentWidget.requestPayment({
        orderId: nanoid(),
        orderName: "상품 결제",
        customerName: "홍길동",
        customerEmail: "customer@example.com",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error) {
      console.error("결제 요청 실패:", error);
    }
  };

  return (
    <div>
      <h1>결제 페이지</h1>
      <div id="payment-widget" style={{ margin: "20px 0" }} />
      <div>
        <input
          type="checkbox"
          onChange={(e) =>
            setPrice(e.target.checked ? price - 5000 : price + 5000)
          }
        />
        <label>5,000원 할인 쿠폰 적용</label>
      </div>
      <button onClick={handlePayment}>결제하기</button>
    </div>
  );
};

export default CheckoutPage;
