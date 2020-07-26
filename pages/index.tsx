import { GetStaticProps } from 'next';

// shared
import Flex from '../shared/Flex';

// components
import IdentityCard from '../components/IdentityCard';
import TopNavigation from '../components/TopNavigation';
import SEO from '../components/SEO';

// utils
import { readMarkdownPosts } from '../utils/files';
import ActivityCard from '../components/ActivityCard';

export default function Home({ title, files }) {
  const maxWidth = ['100%', '100%', '720px'];
  return (
    <>
      <SEO title={title} />
      <TopNavigation maxWidth={maxWidth} />
      <Flex maxWidth={maxWidth} margin="auto" mt="64px" flexDirection="column">
        <IdentityCard />
        {files.map((attributes) => (
          <ActivityCard
            heroImage={attributes.heroImage.src}
            title={attributes.title}
            date={attributes.date}
          />
        ))}
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const meta = await import('../constants/meta.json');
  const files = readMarkdownPosts(`${process.cwd()}/public/posts`);

  return {
    props: {
      title: `Home - ${meta.site_info.title}`,
      files,
    },
  };
};
