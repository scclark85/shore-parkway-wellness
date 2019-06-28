import React, { Component } from 'react';
import "./style.css"

class Product extends Component {
    render() {
        return (
            <div className="container">
                <div class="product-item"
                    style={{
                        borderBottom: "1px solid rgb(230, 230, 230)",
                    }}>
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex mr-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">Increases &amp; Optimizes Hormone Levels For Men</span>
                                <span class="section-heading-lower">Testostrone Therapy</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/images/healthy_male.jpg" alt="" />
                    <div class="product-item-description d-flex ml-auto">
                        <div class="bg-faded p-5 rounded">
                            <p class="mb-0">The <b>Testosterone Replacement Therapy</b> is known to provide a beneficial effect for a wide range of benefits to men with hypogonadism.  This can include better libido, cognition, mood, bone density, muscle mass, and red blood cell production.  Testosterone is prescribed to men who have lower levels of testosterone found by blood test or men who have the symptoms consistent with low testosterone. </p>
                        </div>
                    </div>
                    <br />
                </div>
                <br />

                <div className="product-item"
                    style={{
                        borderBottom: "1px solid rgb(230, 230, 230)",
                    }}>
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex ml-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">Increases &amp; Optimizes Hormone Levels For Women</span>
                                <span className="section-heading-lower">Hormone Therapy</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="/images/healthy-female.jpg" alt="" />
                    <div className="product-item-description d-flex mr-auto">
                        <div className="bg-faded p-5 rounded">
                            <p className="mb-0">Many women will experience a hormone imbalance and not even realize it.  Symptoms can range from subtle to debilitating and are often masked by medications that are prescribed for anxiety, depression, insomnia, weight gain, and more.  The good news - <b>Hormone Therapy</b> is here to help.</p>
                        </div>
                    </div>
                    <br />
                </div>
                <br />

                <div class="product-item"
                    style={{
                        borderBottom: "1px solid rgb(230, 230, 230)",
                    }}>
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
                            <p class="mb-0">Vitamin B-12 is an essential water-soluble vitamin that plays an important role in many functions in the body.  Some benefits include more energy, better mood, deeper sleep, balanced immune system, mental clarity, weight loss, and higher metabolism.</p>
                        </div>
                    </div>
                    <br />
                </div>
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
                            <p className="mb-0">The <b>HCG Diet</b> is a game changer.  HCG helps the body use stored fat for fuel while mainting muscle mass.  Expect to lose 1/2 to 1lb per day, decreased hunger, increased metabolism, and much more benefits.</p>
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