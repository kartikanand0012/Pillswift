import React from 'react';
import './About.css';

const OurClients = () => {
    return (
        <div className="our-clients-container">
            <h2>Our Clients</h2>
            <div className="clients-grid">
                <div className="client-item">
                    <div className="icon">🔒</div>
                    <h3>Guarantee</h3>
                    <p>We stand behind the value we deliver through our products and services.</p>
                </div>
                <div className="client-item">
                    <div className="icon">🎯</div>
                    <h3>Excellence</h3>
                    <p>We strive for continuous improvement in everything we do, delivering exceptional results that consistently meet and exceed the highest standards.</p>
                </div>
                <div className="client-item">
                    <div className="icon">💼</div>
                    <h3>Commitment</h3>
                    <p>We are deeply dedicated to understanding your needs and exceeding expectations with every interaction.</p>
                </div>
                <div className="client-item">
                    <div className="icon">⚖️</div>
                    <h3>Professionalism</h3>
                    <p>Deliver the highest degree of professionalism in all that we do for our customers, making each interaction so pleasant, that they always recommend our businesses.</p>
                </div>
                <div className="client-item">
                    <div className="icon">🔧</div>
                    <h3>Value</h3>
                    <p>Always leave the customer with the feeling that the value they receive outweighs the cost for our products and services.</p>
                </div>
            </div>
        </div>
    );
}

export default OurClients;
