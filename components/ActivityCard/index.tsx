import Flex from '../../shared/Flex';
import Avatar from '../../shared/Avatar';
import Text from '../../shared/Text';

type ActivityCardPropTypes = {
  heroImage: string;
  title: string;
  date: string;
};

const ActivityCard: React.SFC<ActivityCardPropTypes> = ({
  heroImage,
  title,
  date,
}) => (
  <Flex alignItems="center" justifyContent="space-between" py="8px">
    <Avatar src={heroImage} alt={title} />
    <Flex flex="1 1 auto" ml={['8px', '16px']}>
      <Text textAlign="left">{title}</Text>
    </Flex>
    <Text color="muted">{date}</Text>
  </Flex>
);

export default ActivityCard;
