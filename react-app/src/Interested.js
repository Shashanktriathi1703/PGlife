import React from 'react';

const Interested = props => {

    let heart_image_class;
    if (props.is_interested) {
        heart_image_class = "fas";
    } else {
        heart_image_class = "far";
    }

    return (
        <div className="interested-container">
            <i
                className={`is-interested-image ${heart_image_class} fa-heart`}
                onClick={() => props.toggleInterested()}
            ></i>
            <div className="interested-text">
                <span className="interested-user-count">{props.user_count}</span> interested
            </div>
        </div>
    );
}

export default Interested;