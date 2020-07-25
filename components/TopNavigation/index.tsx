import { Home, HardDrive, Info } from 'react-feather';

// Shared Components
import Avatar from '../../shared/Avatar';
import Text from '../../shared/Text';
import meta from '../../constants/meta.json';
import Flex from '../../shared/Flex';

// Styled - Components
import Bar from './Bar';
import Link from './Link';
import Navigation from './Navigation';

const TopNavigation: React.SFC = () => (
  <Bar>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      m="auto"
      maxWidth={['100%', '100%', '1024px']}
    >
      <Link href="/">
        <Flex alignItems="center" ml="16px">
          <Avatar src="/img/logo.svg" type="square" size="sm" />
          <Text fontSize={2} fontWeight="bold" ml="16px">
            {meta.identity.first_name} {meta.identity.last_name}
          </Text>
        </Flex>
      </Link>

      <Flex alignItems="center" mr="16px">
        <Navigation>
          <ul>
            <li>
              <Link href="/">
                <Home size={18} />
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <HardDrive size={18} />
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Info size={18} />
              </Link>
            </li>
          </ul>
        </Navigation>
      </Flex>
    </Flex>
  </Bar>
);

export default TopNavigation;
