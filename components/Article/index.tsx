import React from 'react';
import Link from 'next/link';

// styled components
import Descriptions from './Descriptions';
import HeroImage from './HeroImage';
import HeroImageLabel from './HeroImageLabel';
import PublishedLabel from './PublishedLabel';
import Title from './Title';
import Wrapper from './Wrapper';

type ArticleProps = {
  title: string;
  date: string;
  descriptions: string;
  heroImage: string;
  photographer: string;
  unsplashAccount: string;
};

const Article: React.SFC<ArticleProps> = ({
  title,
  date,
  descriptions,
  heroImage,
  photographer,
  unsplashAccount,
}) => (
  <>
    <Title>{title}</Title>
    <PublishedLabel>{date}</PublishedLabel>
    <Descriptions>{descriptions}</Descriptions>
    <HeroImage src={heroImage} />
    <HeroImageLabel>
      Hero photo by{' '}
      <Link href={`https://unsplash.com/${photographer}`}>{photographer}</Link>,
      powered by <Link href="https://unsplash.com/">unsplash</Link>.
    </HeroImageLabel>
    <Wrapper>lorem</Wrapper>
  </>
);

export default Article;
