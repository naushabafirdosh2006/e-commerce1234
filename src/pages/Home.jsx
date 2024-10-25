// pages/Home.jsx
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  return (
    <section className="home container">
      <SectionTitle title="Welcome to Our E-Commerce Site" subtitle="Shop the Best Products" />
      <p>Your one-stop shop for all the latest products.</p>
    </section>
  );
};

export default Home;
