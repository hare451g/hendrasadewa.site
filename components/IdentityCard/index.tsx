import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import Avatar from '../../shared/Avatar';

import meta from '../../constants/meta.json';

function IdentityCard() {
  return (
    <Flex alignItems="center" maxWidth="768px" margin="auto">
      <Avatar src="/img/me.jpg" size="lg" alt="Hendra Sadewa Avatar" />
      <Flex flexDirection="column" margin="0 0 0 18px">
        <Text fontFamily="primary" fontWeight="bold" fontSize={36}>
          {meta.identity.first_name} {meta.identity.last_name}
        </Text>
        <Text>{meta.identity.tagline}</Text>
      </Flex>
    </Flex>
  );
}

export default IdentityCard;
