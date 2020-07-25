import meta from '../../constants/meta.json';

// shared components
import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import Avatar from '../../shared/Avatar';

function IdentityCard() {
  return (
    <Flex
      flexDirection={['column', 'row']}
      alignItems="center"
      m={'auto'}
      maxWidth={['100%', '720px']}
    >
      <Avatar src="/img/me.jpg" size="lg" alt="Hendra Sadewa Avatar" />
      <Flex flexDirection="column" ml={[0, '16px']}>
        <Text
          fontFamily="Inter"
          fontWeight="bold"
          fontSize="2rem"
          textAlign={['center', 'left']}
        >
          {meta.identity.first_name} {meta.identity.last_name}
        </Text>
        <Text
          fontFamily="Inter"
          fontWeight={400}
          textAlign={['center', 'left']}
        >
          {meta.identity.tagline}
        </Text>
      </Flex>
    </Flex>
  );
}

export default IdentityCard;
