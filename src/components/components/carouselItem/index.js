import React from "react";
import { testItems } from './../../../services/TestimonialService';

function TestItem() {
    const incomingItem = testItems;
    const testimonial = incomingItem.map((item, index) => {
        const stars = (stars) => {
            const finalStars = [];
            for(let i = 0; i < stars; i++) {
                finalStars.push(
                    <span className="golden-star">
                        <i className="fas fa-star"></i>
                    </span>
                );
            }
            for(let i = 0; i < (5 - stars); i++) {
                finalStars.push(
                    <span className="">
                        <i className="fas fa-star"></i>
                    </span>
                );
            }
            return finalStars;
        }

        return (
            <div className={'carousel-item ' + (index === 0 ? "active" : "")}>
                <div className="testimonial-item row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-xl-6 photo">
                                <img src={item.photoUrl} alt="" />
                            </div>
                            <div className="col-xl-6">
                                <div className="stars">
                                    {stars(item.score)}
                                    {/* <span className="golden-star">
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
                                    </span> */}
                                </div>
                                <div className="information">
                                    <p>{item.name}</p>
                                    <p>{item.period} meses atrás</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <i className="fas fa-quote-left quoteL"></i>

                        <p>
                            {item.message}
                        </p>

                        <i className="fas fa-quote-right quoteR"></i>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <>
            {testimonial}
        </>
    )
}

export default TestItem;