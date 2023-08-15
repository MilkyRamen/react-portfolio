import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                <section id="home">
                    Hello there my name is John Dawson, I am 19 years old, Currently working in a restaurant and am looking for a change in careers. Right now I dont have to much under my belt just yet but in the coming months I will have many accomplishments to write about.
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;