import React from 'react'

// Components
import Preview from './components/Preview'
import FAQs from './components/FAQs'
import TryForFree from './components/TryForFree'
import Footer from './components/Footer'

// Helmet
import { Helmet } from "react-helmet-async";

// Images
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | StreamAight</title>
                <meta name="description" content="Resolute Courses" />
                <meta name="robots" content="noindex" />
            </Helmet>
            <Navbar />
            <Hero />
            <Preview />
            <FAQs />
            <TryForFree />
            <Footer />
        </>
    )
}

export default Home