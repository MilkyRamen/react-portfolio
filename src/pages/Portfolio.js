import React from 'react';
import Header from '../components/Header';
import Project from '../components/Project';
import Footer from '../components/Footer';
import '../styles/Portfolio.css';

const Portfolio = () => {
    return (
        <div>
            <Header />
            <div id="title">
                <h2>Portfolio</h2>
            </div>
            <section id="portfolio">
                <Project
                    title="Horiseon Refactor"
                    description="refactored the code for the purpose of making the website more accesible so it can appear at the top of google when searching for a website that provides information on social media marketing."
                    githubLink="https://github.com/MilkyRamen/horiseon-refactor"
                    />
                <Project
                    title="Park and Brew finder"
                    description="Created an application that would help the user find new places in nature to explore and new locales to experience."
                    githubLink="https://github.com/jjsdunc88/park-weather-app"
                    />
                <Project 
                    title="Workout Tracker"
                    description="Workout Tracker is a website that allows a user to manage and track workouts. It provides a comprehensive RESTful API for seamless workout data management."
                    githubLink="https://github.com/Lalu423/workout-tracker"
                    />
            </section>
            <Footer />
        </div>
    );
};

export default Portfolio;