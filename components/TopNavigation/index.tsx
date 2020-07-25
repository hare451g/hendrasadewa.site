import { Home, HardDrive, Info } from 'react-feather';
import Link from 'next/link';

// Shared Components
import Avatar from '../../shared/Avatar';
import Text from '../../shared/Text';
import meta from '../../constants/meta.json';
import Flex from '../../shared/Flex';

// Styled - Components
import Bar from './Bar';
import NavItem from './NavItem';
import Navigation from './Navigation';

type TopNavigationPropsType = {
  maxWidth: Array<string>;
};

const TopNavigation: React.SFC<TopNavigationPropsType> = ({ maxWidth }) => (
  <Bar>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      m="auto"
      maxWidth={maxWidth}
    >
      <Flex alignItems="center" ml="16px">
        <Avatar src="/img/logo.svg" type="square" size="sm" />
        <Text fontSize={2} fontWeight="bold" ml="16px">
          {meta.identity.first_name} {meta.identity.last_name}
        </Text>
      </Flex>

      <Flex alignItems="center" mr="16px">
        <Navigation>
          <ul>
            <NavItem>
              <Link href="/">
                <Home size={18} />
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/blog">
                <HardDrive size={18} />
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about">
                <Info size={18} />
              </Link>
            </NavItem>
          </ul>
        </Navigation>
      </Flex>
    </Flex>
  </Bar>
);

export default TopNavigation;
