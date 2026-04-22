import React from "react";
import PropTypes from "prop-types";

const Home = (props) => {
    const unit = props.seconds % 10;
    const tens = Math.floor(props.seconds / 10) % 10;
    const hundreds = Math.floor(props.seconds / 100) % 10;
    const thousands = Math.floor(props.seconds / 1000) % 10;
    const tenThousands = Math.floor(props.seconds / 10000) % 10;
    const hundredThousands = Math.floor(props.seconds / 100000) % 10;

    return (
        <div className="d-flex justify-content-center align-items-center bg-black p-4 rounded-4 shadow-lg mb-4 main-counter-container">
            <div className="digit-box"><i className="far fa-clock"></i></div>
            <div className="digit-box">{hundredThousands}</div>
            <div className="digit-box">{tenThousands}</div>
            <div className="digit-box">{thousands}</div>
            <div className="digit-box">{hundreds}</div>
            <div className="digit-box">{tens}</div>
            <div className="digit-box">{unit}</div>
        </div>
    );
};

Home.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default Home;