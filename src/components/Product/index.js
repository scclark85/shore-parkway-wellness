import React, { Component } from 'react';
import "./style.css"

class Product extends Component {
    render() {
        return (
            <div className="container">
                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex ml-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">Testostrone &amp; Hormone Replacement</span>
                                <span className="section-heading-lower">Therapy</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/images/doctor.jpg" alt="" />
                    <div className="product-item-description d-flex mr-auto">
                        <div className="bg-faded p-5 rounded">
                            <p className="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />

                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex mr-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Get Hydrated and Energized</span>
                                <span class="section-heading-lower">IV Drip Therapy with B12</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/images/B12.jpg" alt="" />
                    <div class="product-item-description d-flex ml-auto">
                        <div class="bg-faded p-5 rounded">
                            <p class="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />

                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex ml-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">Get Your Ideal Summer Body</span>
                                <span className="section-heading-lower">HCG Diet</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/images/hcg-diet.jpg" alt="" />
                    <div className="product-item-description d-flex mr-auto">
                        <div className="bg-faded p-5 rounded">
                            <p className="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />

            </div>
        )
    }
}

export default Product