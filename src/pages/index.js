import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="CampusBot"
        content="A conversational bot that enhances the college experience for Indian international students in Canada."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
