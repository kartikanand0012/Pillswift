import type { FunctionComponent } from "react";
import PolicyPage from "./PolicyPage";

const deliveryAndShippingPolicyContent = `
<div style="text-align: center;">
  <h2 style="font-weight: bold; text-decoration: underline;">DELIVERY AND SHIPPING POLICY</h2>
</div>

<p><strong>GENERAL</strong></p>
<p>1.1 PillSwift LLP, a company incorporated under the laws of India, having its registered address at 64, O-A, Shatabdi Puram, Gwalior – 474005 (“PillSwift”, “we”, “us” or “our”), manages and operates an online marketplace at www.pillswift.in and a mobile application under the brand name PillSwift (collectively referred to as the “Platform”) which facilitates different vendors to sell their Products and/or Services and enabling different buyers to purchase the Products and/or Services offered by the vendors to the users of the Platform (“User” or “Users” or “you”).</p>
<p>1.2 This delivery and shipping policy (“Policy”), together with the Terms and Conditions sets out our policies and procedures towards delivery and shipping of Products purchased on the Platform.</p>
<p>1.3 We provide shipping and delivery of our Products all over India. We aim to provide the best customer experience for you by tying-up and partnering with leading logistics service providers to handle your order in the best possible way and to ensure that you have a hassle-free experience in receiving the Product that you have ordered from the Platform. We make all commercially reasonable endeavours to ensure that the Products are delivered to you in a timely fashion.</p>
<p>1.4 By agreeing to use the Platform and/ or purchasing a Product on the Platform, you agree to be bound by the terms of this Policy without modification. We encourage you to read and understand the terms of this Policy every time you visit the Platform. If you do not agree to the terms contained in this Policy, you are advised not to use, access or transact on the Platform.</p>

<p><strong>TERMS OF SHIPPING AND DELIVERY</strong></p>
<p>2.1 We partner with third party logistic service providers ("Logistic Partners") in order to effectuate Product shipping and delivery to you. We shall provide the details of the Logistic Partners which will be responsible for processing the shipping and delivery of any Product(s) purchased by you on the Platform at the time such Product is processed and successfully handed over to the Logistic Partner by us. Our standard dispatch timelines range between 24 (twenty four) hours from the time the Product Order has been placed by you on the Platform. In any case, the user will be provided with an estimated timeline for the delivery of the Product purchased from the Platform. This estimated timeline shall be notified to the user on the order confirmation page displayed at the time the order is confirmed by us. We will also share details about your orders pursuant to their dispatch on the e-mail ID and/or mobile number provided by you/ registered with us. You agree and understand that though we effectuate Product delivery to the Users through our Logistic Partners, we reserve the right to ship and deliver the Products on our own without engaging any Logistic Partners or third party service providers.</p>

<p><strong>2.2 The Delivery charges of the Platform are as follows:</strong></p>

<p><strong>For Wholesale Customers:</strong></p>
<table>
<tr><td><strong>ORDER VALUE</strong></td><td><strong>DELIVERY CHARGE</strong></td></tr>
<tr><td>Up to Rs. 199</td><td>Rs. 69</td></tr>
<tr><td>Rs. 199 – Rs. 499</td><td>Rs. 49</td></tr>
<tr><td>Rs. 499 – Rs. 999</td><td>Rs. 29</td></tr>
<tr><td>Rs. 999 - Rs. 1999</td><td>Rs. 19</td></tr>
<tr><td>>Rs. 1999</td><td>Rs. FREE</td></tr>
</table>

<p><strong>For Retail Customers:</strong></p>
<table>
<tr><td><strong>ORDER VALUE</strong></td><td><strong>DELIVERY CHARGE</strong></td></tr>
<tr><td>Up to Rs. 99</td><td>Rs. 35</td></tr>
<tr><td>Rs. 99 or more</td><td>FREE Shipping</td></tr>
</table>

<p>Note : Delivery charges quoted above are applicable on ALL orders available on the Platform.</p>

<p>2.3 You agree and understand that though we endeavour to ship and deliver our Products all across India, we may, in our sole discretion determine a select list of areas which are unserviceable for delivery of Products. We, or our Logistic Partners, do not provide shipping and delivery services in such unserviceable areas and may not process your orders on the Platform in such cases. In the event, an area has been deemed unserviceable by us, we shall notify such user at the time of placing an order for purchase of Products on the Platform. You may also verify whether an area is unserviceable for deliveries by us by entering the relevant area pin-code on the Platform.</p>

<p>2.4 You agree and acknowledge that to effectuate timely delivery of the purchased Products to you we may inquire or collect specific information like your name, shipping address, billing address, landmarks, contact details, etc. You shall ensure that all information that is submitted by you to us on the Platform is true, complete, accurate and sufficient to identify the actual place of delivery. You understand that you shall bear absolute liability in case of any failure by us in delivering the purchased Products due to your failure to provide correct, complete, sufficient and accurate information at the time of placing the order. It is further clarified that we shall not be liable in any manner and at any point in time due to your failure to provide correct and complete information.</p>

<p>2.5 We will attempt to deliver the purchased Product to your designated address within the estimated timeline of delivery notified to you. In the event you are not available or present to accept the delivery of the Product, our Logistic Partners will make a maximum of three attempts in 3 (three) days (each attempt everyday) to deliver the purchased Product(s) to you.  If the third delivery attempt is unsuccessful and you continue to remain unavailable, we reserve the right to cancel the order of the purchased Products at our sole discretion and process the return of such Product to us. We further reserve the right to deduct the shipping and delivery charges borne by us while processing any refunds subsequent to such cancellation.</p>

<p>2.6 While we make reasonable endeavours in ensuring that purchased Products are delivered to you in a timely manner and within the timeline notified to you, you accept and acknowledge that the delivery may be delayed on account of:</p>
<ul>
<li>(a) Logistical issues beyond our control;</li>
<li>(b) Unsuitable weather conditions;</li>
<li>(c) Political disruptions, strikes, employee-lockouts, governmental restrictions, etc;</li>
<li>(d) Acts of God such as floods, earthquakes, etc;</li>
<li>(e) Other unforeseeable circumstances.</li>
</ul>

<p>In such events of delay, we shall make reasonable attempt to inform you by writing to your email ID and/or mobile number registered with us. We disclaim all liabilities that may arise on account of our failure to inform or notify you of delays in the delivery of purchased Products on the Platform. Further, we shall be under no obligation to compensate you for any claim that may otherwise arise on account of delay in the shipment or delivery or use of the purchased Products.</p>

<p>2.7 We endeavour to engage Logistic Partners, employees, agents with the highest regard for ethics and integrity; and behave in a fashion that exudes thorough professionalism, competence and good mannerism. You agree and acknowledge that the actions, inactions of delivery individuals are not in our control, and it is not possible for us to monitor and observe each delivery executive. Since we are merely facilitating delivery of a Product purchased by you, we shall not be liable for any acts or omissions on part of our delivery agents, employees, or personnel and/ or the Logistic Partner or their employees, agents, or personnel including deficiency in service, wrong delivery of Product, time taken to deliver the Product, Product package tampering, etc. For the sake of abundant clarity, it is stated that any ill-mannerism, impoliteness, discourtesy or offensiveness shown by our delivery executives or the employees, agents, personnel of the Logistic Partners is beyond our control and any issue arising between you and our delivery executive or an employee, agent, personnel of the Logistic Partner will have to be resolved by you independently. You agree and acknowledge that you will not hold us responsible or require us to settle, mediate or resolve any disputes between you and the delivery personnel delivering the Products to you.</p>

<p>2.8 Once you place an order on the Platform, we process such order and hand over the purchased Product to our Logistic Partner. The User will receive a unique tracking identity number once the purchased Product is handed over to the Logistics Partner, which will enable the User in tracking the status of delivery of the purchased Products. The User may use the tracking identity number on the Platform or the website and/or the mobile application of the Logistic Partner to check the status and location of the purchased Product and its estimated time of delivery. Our customer service team coordinates with the Logistic Partners to ensure that the Products are delivered to you at the earliest and make all reasonable efforts in ensuring that the Logistic Partners update the tracking status of the purchased Products on a real time basis. It is clarified that we engage third party service providers to effectuate deliveries of the Products and hence, we do not guarantee the accuracy or correctness of the tracking status and the status may be subject to inconsistencies arising out of time-lags in updating the information and/ or other technical difficulties which are not in our control.</p>

<p>2.9 We reserve the right to charge or collect shipping fees on Products from time to time. Shipping charges may vary based on the value of the Product, type of Product, area of delivery, payment mechanism, etc.  You agree that, we are authorized to collect, on behalf of the Logistic Partner, the shipping and delivery fees for the delivery service provided by the Logistic Partner. In the event we charge a shipping fees for the delivery of a purchased Product, such shipping fees will not be refunded by us pursuant to any return request raised by you. However, we may make exceptions and refund the shipping fees in the event a defected, damaged, deficient or incorrect Product (for reasons attributable to, and accepted by us after due verification in our sole discretion) has been delivered. You acknowledge and accept that the title and risk of all Products ordered by you shall pass on to you upon the delivery of the purchased Products to you.</p>

<p>2.10 Return of purchased Products are facilitated through our reverse-Logistics Partners. On receipt of request for return of Product on the Platform and the same being duly acknowledged by us, our reverse-Logistics Partners shall get in touch with you in order to collect the purchased Products from you. We process returns and exchanges of purchased Products in accordance with our Cancellation, Return and Refund Policy.</p>

<p><strong>CUSTOMER SUPPORT</strong></p>
<p>You may direct any queries or concerns relating to the shipping and delivery of Products as per this Policy to our customer support team who can be contacted at the below mentioned details:</p>
<p>Contact Details:<br/>
E-mail id - online.pharmacy@pillswift.in<br/>
Contact No - 9039054361</p>

<p><strong>CONSOLIDATED SHIPMENT CASHBACK PROGRAM TERMS AND CONDITIONS</strong></p>
<p>This consolidated shipment cashback program (“Cashback Program”) is a promotional offer brought by PillSwift LLP (“PillSwift”) to the users (“Customer” / “you”) of www.pillswift.in (“PillSwift”). The below mentioned terms (“Terms”) govern the terms and conditions for availing the aforesaid Cashback Program.</p>
<p>4.1 Cashback Program: The Customers while placing a pre-paid order on PillSwift, may opt for the all the products ordered in single order to be delivered in a consolidated shipment. Customers opting for such consolidated shipment at the time of checkout would be eligible to receive a fixed cashback as prescribed under these Terms (“Cashback”). The Cashback shall be available for a period of 90 (ninety) days, or such period as determined by PillSwift at its sole discretion. The Cashback would be credited to your wallet as ‘PillSwift Cash’ upon expiry of return window of the Eligible Products (defined below). If the Customer opts for cash on delivery as a mode of payment for the order or returns any items or the order, whether in part or full, the Customer shall not be eligible for the Cashback.</p>

<p>4.2 Eligible Products: This Cashback Program shall apply to any pharmaceutical, personal care, wellness products, or instruments purchased on PillSwift, however, shall not apply to such products which fall under the consultation and diagnostic categories (“Eligible Products”).</p>

<p>4.3 Cashback credit and utilisation: Upon expiry of return window of the Eligible Products, a fixed cashback amount of INR 20 (Indian Rupees Twenty only) will be credited to a Customer as ‘PillSwift Cash’. The Cashback can be utilised by the Customer as mode of payment for subsequent purchase on PillSwift.</p>

<p>4.4 Offer Rules:</p>
<ul>
<li>The Cashback Program is available for the Customer across India.</li>
<li>The Cashback can be used for subsequent purchases of Eligible Products made on PillSwift.</li>
<li>The Cashback shall expire automatically if it remains unutilised beyond a period of 90 (ninety) days or such period as determined by PillSwift in its sole discretion.</li>
<li>The Cashback is non-transferable and non-exchangeable for cash or any other items.</li>
<li>The Cashback cannot be utilised on any other website or store other than as indicated in these Terms.</li>
<li>PillSwift will not accept any responsibility if the Customer is unable to encash the Cashback within the 90 (ninety) days’ period mentioned above.</li>
<li>PillSwift reserves the right to withdraw the Cashback Program at any time it deems fit.</li>
<li>Any return of the order of Eligible Products, whether partial or full, shall disqualify the Customer from the Cashback.</li>
<li>You can view the PillSwift Cash balance by clicking on the ‘My Wallet’ section on the ‘My Account’ page.</li>
<li>In relation to the Cashback Program, the decision of PillSwift shall be final.</li>
</ul>

<p>4.5 Refunds: The Customer hereby acknowledges any return or refund of the products shall be as per the Return, Refund and Cancellation policy of PillSwift.</p>

<p>4.6 Acceptance: The Customer hereby acknowledges that he/she has understood and unconditionally accepts these Terms along with the ‘Terms and Conditions’ of PillSwift.</p>

<p>4.7 Privacy: By taking part in this Cashback Program, you consent that all information collected during the course of your participation shall be in accordance with the Privacy Policy of PillSwift. The Privacy Policy is an integral part of these Terms and acceptance thereof shall be construed as explicit consent and acceptance of the Privacy Policy.</p>

<p>4.8 Limitation of Liability: PillSwift does not accept any liability for any damage, loss, injury, delay or disappointment as a result of either participating in the Cashback Program or any cause whatsoever beyond PillSwift’s control. Under no circumstances the liability of PillSwift shall exceed the value of Cashback provided to the respective Customer.</p>

<p>4.9 Amendments or Cancellation: PillSwift reserves the right to extend, cancel, discontinue, prematurely withdraw, change, alter or modify these Terms and/or any part thereof including the eligibility criteria and other pertinent terms and conditions at its sole discretion (without giving any notice to and without the need to seek approval of the Customer) at any time during its validity as may be required including in view of business exigencies and/or changes by a regulatory authority and/or statutory changes and/or any reasons beyond their control. Customers are advised to check the applicable Cashback, including attendant terms thereto, for a pre-paid transaction, at the time of performing such transaction.</p>

<p>4.10 Disqualification: PillSwift may disqualify any Customer who fails to comply with these Terms (in PillSwift’s sole opinion) or who, in PillSwift’s sole determination, has acted in a manner that is fraudulent, dishonest including, without limitation, hacking, deceiving, cheating, tampering with the operation of the Cashback Program.</p>

<p>4.11 Governing Law & Jurisdiction: These Terms shall be governed by the laws of India and, subject to exclusive jurisdiction of competent courts at Gwalior, Madhya Pradesh.</p>

<p>4.12 Other terms and condition: This Cashback Program is subject to Terms and Conditions available on PillSwift and the Customers hereby consent to acceptance to the same by virtue of purchase made on the PillSwift.</p>
`;


const DeliveryShippingPolicy: FunctionComponent = () => (
  <PolicyPage
    title="Delivery and Shipping Policy"
    content={deliveryAndShippingPolicyContent}
  />
);

export default DeliveryShippingPolicy;
