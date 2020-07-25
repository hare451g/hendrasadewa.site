import { GetStaticProps } from 'next';

// shared
import Flex from '../shared/Flex';

// components
import IdentityCard from '../components/IdentityCard';
import TopNavigation from '../components/TopNavigation';
import SEO from '../components/SEO';
import { readMarkdownPosts } from '../utils/files';
import Avatar from '../shared/Avatar';
import Text from '../shared/Text';

export default function Home({ title, files }) {
  const maxWidth = ['100%', '100%', '720px'];
  console.log(files);
  return (
    <>
      <SEO title={title} />
      <TopNavigation maxWidth={maxWidth} />
      <Flex maxWidth={maxWidth} margin="auto" mt="64px" flexDirection="column">
        <IdentityCard />
        {files.map(({ attributes }) => (
          <Flex alignItems="center" justifyContent="space-between" py="8px">
            <Avatar src={attributes.heroImage} alt={attributes.title} />
            <Flex flex="1 1 auto" ml={['8px', '16px']}>
              <Text textAlign="left">{attributes.title}</Text>
            </Flex>
            <Text color="muted">{attributes.date}</Text>
          </Flex>
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
