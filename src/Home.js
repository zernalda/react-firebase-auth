import React from 'react';
import Gallery from './components/Gallery';

const Home = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
                <Gallery/>
        </section>
    );
};

export default Home;