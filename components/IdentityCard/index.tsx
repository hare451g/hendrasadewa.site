import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import Avatar from '../../shared/Avatar';

import meta from '../../constants/meta.json';

function IdentityCard() {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Avatar src="/img/me.jpg" size="lg" alt="Hendra Sadewa Avatar" />
      <Flex flexDirection="column" ml="16px">
        <Text fontFamily="Inter" fontWeight="bold" fontSize="2rem">
          {meta.identity.first_name} {meta.identity.last_name}
        </Text>
        <Text fontFamily="Inter" fontWeight={400}>
          {meta.identity.tagline}
        </Text>
      </Flex>
    </Flex>
  );
}

export default IdentityCard;
