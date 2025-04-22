import React from 'react';
import backgroundImage from '../assets/background.jpg';

function Home() {
    const homeStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '85vh',
        color: 'white',
        textAlign: 'center',
    };

    return (
        <div className="home-page" style={homeStyle}>
            <p>hi, i am</p>
            <h1>Edward Salvatierra</h1>
            <h2>a web developer and designer.</h2>
        </div>
    );
}

export default Home;
