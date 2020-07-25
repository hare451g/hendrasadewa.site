import { GetStaticProps } from 'next';

import IdentityCard from '../components/IdentityCard';
import Flex from '../shared/Flex';
import SEO from '../components/SEO';

export default function Home({ title }) {
  return (
    <>
      <SEO />
      <Flex>
        <IdentityCard />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const meta = await import('../constants/meta.json');

  return {
    props: {
      title: meta.site_info.title,
    },
  };
};
