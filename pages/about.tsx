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

export default function About({ title, githubUsername }) {
  const maxWidth = ['100%', '100%', '720px'];
  return (
    <>
      <SEO title={title} />
      <TopNavigation maxWidth={maxWidth} />
      <Flex maxWidth={maxWidth} margin="auto" mt="64px" flexDirection="column">
        <IdentityCard />
        <Text fontSize="32px" fontWeight="700" mt="42px">
          <GitHub /> GitHub Activities
        </Text>
        <Divider width="100%" />
        <GitHubActivities username={githubUsername} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const meta = await import('../constants/meta.json');

  return {
    props: {
      title: `About - ${meta.site_info.title}`,
      githubUsername: meta.social_media.github,
    },
  };
};
