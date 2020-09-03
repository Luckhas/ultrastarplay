import React from "react";

function TestItem(props) {
    return (
        <div className={'carousel-item ' + props.status}>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem accusantium omnis, nam, quidem, quo voluptatum ducimus nemo facilis cupiditate esse. Itaque at molestiae rerum, nisi exercitationem unde illo ratione numquam aperiam fuga a odio labore amet sunt quidem architecto, error non ab est laborum blanditiis
                        doloremque.
                    </p>

                    <i className="fas fa-quote-right quoteR"></i>
                </div>
            </div>
        </div>
    );
}

export default TestItem;
