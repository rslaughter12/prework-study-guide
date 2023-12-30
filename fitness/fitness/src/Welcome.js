import React from 'react';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to your fitness tracker!</h1>
            <div className="button-container">
                <button className="signin-button">Sign In</button>
                <button className="signup-button">Sign Up</button>
            </div>
        </div>
    );
};

export default Welcome;