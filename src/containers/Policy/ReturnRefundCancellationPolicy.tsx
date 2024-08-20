import type { FunctionComponent } from "react";
import PolicyPage from "./PolicyPage";

const returnRefundCancellationPolicyContent = `
<div style="text-align: center;">
  <h2 style="font-weight: bold; text-decoration: underline;">Return, Refund & Cancellation Policy</h2>
</div>

<p>We aim to provide the best User experience to our Users beginning from placing an order and/or booking an appointment to initiating a return. While transacting on the Website, you can expect a hassle-free experience in returning the Product and cancelling the Services that you have ordered/booked and can rely on us as your preferred shopping destination or Service location.</p>

<p>This return, refund, and cancellation policy (“Policy”), should be read together with the Terms and Conditions.</p>

<p><strong>APPLICABILITY OF POLICY</strong></p>
<p>A) By agreeing to use the Website and/or placing a request for purchase of Product(s) and/or Services on the Website, you agree to be bound by the terms contained in this Policy without modification. If you do not agree to the terms contained in this Policy, you are advised not to transact on the Website.</p>
<p>B) Please note that we may from time to time change the terms of the Policy that govern your return, refund and cancellation of an order for Products on the Website. Every time you wish to use the Website, please check the Policy to ensure you understand the terms and conditions that apply at that time.</p>

<p><strong>TERMS FOR CANCELLATION, RETURN AND REFUND OF ORDERS</strong></p>
<p>Please carefully read all the parts to understand the conditions applicable in case of returns, refunds and cancellation of a Product. This section describes our Return and Refund Policy to buyers.</p>

<p><strong>(A) RETURN POLICY:</strong></p>

<p><strong>i. Return Policy:</strong></p>
<p>We do our best to ensure that the products you order are delivered according to your specifications. However, should you receive an (a) incomplete order, (b) expired product, (c) damaged product, (d) incorrect product, (e) doctor changes the prescription (f) death of a patient, please notify PillSwift User Support immediately within 7 days of receiving the products, to ensure prompt resolution. Please note that PillSwift will not accept liability for such delivery issues if you fail to notify us within 7 days of receipt.</p>
<p>User cannot return non-refundable Product; it is User’s responsibility to check whether the Product falls under returnable/non-returnable category before placing an order.</p>

<p><strong>ii. Return Policy Exceptions:</strong></p>
<p>Please note that we are unable to offer replacements or exchanges for the following product categories: Injections, Health Monitor & Equipment and Ortho Support.</p>
<p>Also, PillSwift reserves the right to refuse returns (or refunds) for certain products, as marked in the respective product pages as "Note: This item cannot be returned for a refund or exchange".</p>

<p><strong>(B) REFUND POLICY:</strong></p>

<p><strong>i. Refund Policy:</strong></p>
<p>At PillSwift, we do our best to ensure that you are completely satisfied with our products. And we are happy to issue a full refund based on the conditions listed below:</p>

<p><strong>ii. Full Refund Possible If:</strong></p>
<ul>
  <li>a. you received a defective item</li>
  <li>b. the ordered item(s) is lost or damaged during transit.</li>
  <li>c. you have received the product that has crossed the expiry date</li>
</ul>

<p>It is hereby clarified that in case return is requested for reasons attributable to the User, We may at our discretion accept such request subject to levy of a ‘Restocking Fee’ to the User. It may be noted that the amount shall be refunded to you after adjusting the Re-stocking Fee. We reserve the right to revise the said Restocking Fee from time to time without any advance notice to the User. It is further clarified We may accept return request only for those products which are original, unused condition, has not been damaged or mistreated, has no signs of use, scratches, wear or tear, and is in condition for resale as new.</p>

<p><strong>iii. Please note:</strong> Mode of refund may vary depending on circumstances. If the mode of refund is by Credit/Debit Card or Net Banking, please allow 7 to 10 working days for the credit to appear in your account. While we regret any inconvenience caused by this time frame, it is the bank's policy that delays the refund timing, and we have no control over that. If the mode of refund is by wallet, credit should be available within 24 hours.</p>

<p><strong>iv. Cash on Delivery:</strong> In order to process such refunds for COD orders, the user will be required to send an email to hello@pillswift.in or call us at +91 9039054361. Thereafter, the User will receive a refund to his/her wallet or User’s bank account. In case if it is to be refunded to User’s bank account, the User will have to provide the bank account details.</p>

<p><strong>v. In those cases, the amount shall be refunded back to the source account of the User.</strong> If the User chooses to get the amount into the Wallet, then at the time of deactivation of the User's account, the amount that is unused in his/her wallet account will be transferred back to User’s bank account.</p>

<p><strong>vi. PillSwift shall directly refund to the User’s bank account during situations such as:</strong></p>
<ul>
  <li>a. When excessive price has been charged/collected from the User and amount needs to be refunded;</li>
  <li>b. Any other cases where PillSwift has to refund the amount to the User which belongs to the User shall be refunded to original payment mode.</li>
</ul>

<p><strong>vii. If the User chooses to get the refund to the wallet during the above-mentioned scenarios [as per clause B(v)],</strong> at the time of deactivation of the User’s account, any amount that is unused in the wallet shall be transferred to the User’s Bank account.</p>

<p><strong>viii. How to Request a Refund:</strong> To request a refund, simply email us your order details, including the reason why you're requesting a refund. We take User feedback very seriously and use it to constantly improve our quality of service.</p>

<p><strong>(C) CANCELLATION:</strong></p>

<p><strong>i. Product Cancellation:</strong> User may cancel the order of a product before it is out for delivery. On the receipt of order cancellation request, your order will be cancelled with immediate effect.</p>

<p><strong>ii. Service Cancellation:</strong> The Website shall only connect the User with the Doctor/registered medical practitioners of the service booked. Once the appointment has been made and a confirmation has been given to the User, the Company shall inform the Doctor/registered medical practitioners who shall render the consult at the agreed time, location and mode provided at the time of booking the service. We are in no way liable for any deficiency of services if any arises including but not limited to cancellation of order due to unavailability of the Doctor/registered medical practitioners.</p>

<p>Once a booking has been made and it is confirmed at our end, no amount shall be refunded, in the event of a cancellation. However, in certain circumstances, the Company at its discretion shall permit a refund of the full or partial amount if the Doctor/registered medical practitioners becomes unavailable or if an alternative Doctor/registered medical practitioners is arranged to consult. The decision of the Company shall be final in such cases.</p>

<p><strong>User Complaints:</strong> If you have any queries, do call our help-desk at +91 9039054361, email us at hello@pillswift.in, or contact our User support executives through online chat. We're here for you!</p>
`;

const ReturnRefundCancellationPolicy: FunctionComponent = () => (
  <PolicyPage
    title="Return Refund Policy"
    content={returnRefundCancellationPolicyContent}
  />
);

export default ReturnRefundCancellationPolicy;
