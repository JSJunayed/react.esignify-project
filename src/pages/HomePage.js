import React from 'react';
import Features from '../components/Features/Features';
import Clients from '../components/Clients/Clients';
import Content from '../components/Content/Content';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects'
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';

const HomePage = () => {
  return (
    <>
    <Hero />
    <Features />
    <Clients />
    <Projects />
    <Content {...heroOne} />
    <Content {...heroTwo} />
    <Content {...heroThree} />
    <Content {...heroFour} />
    </>
    
  )
}

export default HomePage;