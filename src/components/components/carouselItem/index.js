import React from "react";
import { testItems } from './../../../services/TestimonialService';

function TestItem(props) {
    var testimonial = testItems.map((item, index) => {
        return item;
    })

    return (
        <>
            {console.log(testimonial.[0].name)}
        </>
    );
}

export default TestItem;


<div className={'carousel-item ' + (index == 0 ? "active" : "")}>
                    <div className="testimonial-item row">
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-xl-6 photo">
                                    <img src="/assets/images/testimonial/1.jpg" alt="" />
                                </div>
                                <div className="col-xl-6">
                                    <div className="stars">
                                        <span className="golden-star">
                                            <i className="fas fa-star"></i>
                                        </span>
                                        <span className="golden-star">
                                            <i className="fas fa-star"></i>
                                        </span>
                                        <span className="golden-star">
                                            <i className="fas fa-star"></i>
                                        </span>
                                        <span className="golden-star">
                                            <i className="fas fa-star"></i>
                                        </span>
                                        <span className="">
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="information">
                                        <p>Marcelo Henrique</p>
                                        <p>2 meses atrás{props.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <i className="fas fa-quote-left quoteL"></i>

                            <p>
                                {/* {item.map(function(item, index) {
                                    console.log(item + index);
                                })} */}
                            </p>

                            <i className="fas fa-quote-right quoteR"></i>
                        </div>
                    </div>
                </div>
