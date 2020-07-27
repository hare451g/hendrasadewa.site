import { GetStaticProps } from 'next';

// shared
import Flex from '../shared/Flex';

// components
import IdentityCard from '../components/IdentityCard';
import TopNavigation from '../components/TopNavigation';
import SEO from '../components/SEO';
import GitHubActivities from '../containers/GitHubActivities';

export default function Home({ title, githubUsername }) {
  const maxWidth = ['100%', '100%', '720px'];
  return (
    <>
      <SEO title={title} />
      <TopNavigation maxWidth={maxWidth} />
      <Flex maxWidth={maxWidth} margin="auto" mt="64px" flexDirection="column">
        <IdentityCard />
        <GitHubActivities username={githubUsername} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const meta = await import('../constants/meta.json');

  return {
    props: {
      title: `Home - ${meta.site_info.title}`,
      githubUsername: meta.social_media.github,
    },
  };
};
