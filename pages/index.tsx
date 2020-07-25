import { GetStaticProps } from 'next';

import IdentityCard from '../components/IdentityCard';
import TopNavigation from '../components/TopNavigation';
import Flex from '../shared/Flex';
import SEO from '../components/SEO';

export default function Home({ title }) {
  return (
    <>
      <SEO title={title} />
      <TopNavigation />
      <Flex maxWidth="1024px" margin="auto" mt="64px">
        <IdentityCard />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const meta = await import('../constants/meta.json');

  return {
    props: {
      title: `Home - ${meta.site_info.title}`,
    },
  };
};
