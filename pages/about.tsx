import { GetStaticProps } from 'next';
import { GitHub, Briefcase } from 'react-feather';

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

// containers
import Experiences from '../containers/Experiences';

export default function About({ title, githubUsername, experiences }) {
  const maxWidth = ['100%', '100%', '720px'];
  return (
    <>
      <SEO title={title} />
      <TopNavigation maxWidth={maxWidth} />
      <Flex maxWidth={maxWidth} margin="auto" mt="64px" flexDirection="column">
        <IdentityCard />
        <Flex mt="42px">
          <article>
            <section>
              <Text fontSize="32px" fontWeight="700" mt="42px">
                <Briefcase /> Working Experiences
              </Text>
              <Divider width="100%" />
              <Experiences experiences={experiences} />
            </section>
            <section>
              <Text fontSize="32px" fontWeight="700" mt="42px">
                <GitHub /> GitHub Activities
              </Text>
              <Divider width="100%" />
              <GitHubActivities username={githubUsername} />
            </section>
          </article>
        </Flex>
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
      experiences: meta.experiences,
    },
  };
};
