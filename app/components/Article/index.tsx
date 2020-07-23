import React from 'react';
import {
  Descriptions,
  HeroImage,
  HeroImageLabel,
  PublishedLabel,
  Title,
  Wrapper,
} from './styled';
import Link from 'next/link';

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
