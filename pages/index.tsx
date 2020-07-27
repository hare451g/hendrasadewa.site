import { GetStaticProps } from 'next';

// shared
import Flex from '../shared/Flex';
import Divider from '../shared/Divider';
import Text from '../shared/Text';

// containers
import GitHubActivities from '../containers/GitHubActivities';

// components
import IdentityCard from '../components/IdentityCard';
import TopNavigation from '../components/TopNavigation';
import SEO from '../components/SEO';
import { GitHub } from 'react-feather';

export default function Home({ title }) {
  const maxWidth = ['100%', '100%', '720px'];
  return (
    <>
      <SEO title={title} />
      <TopNavigation maxWidth={maxWidth} />
      <Flex maxWidth={maxWidth} margin="auto" mt="64px" flexDirection="column">
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
