import format from 'date-fns/format';

import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import Divider from '../../shared/Divider';

import { ActorType, RepoType, CreateType } from './types';

type PropsType = {
  index: number;
  actor: ActorType;
  repo: RepoType;
  payload: CreateType;
  createdAt: string;
};

const CreateEventCard: React.SFC<PropsType> = ({
  index,
  actor,
  repo,
  payload,
  createdAt,
}) => (
  <Flex
    key={`event-${index + 1}`}
    flexDirection="row"
    alignItems="flex-start"
    py="8px"
    mb="16px"
  >
    <Flex
      flexDirection="column"
      borderRightWidth="2px"
      borderRightStyle="solid"
      pr="8px"
      mr="8px"
    >
      <Text fontFamily="monospace">
        {format(new Date(createdAt), 'dd/mm/yyyy')}{' '}
      </Text>
      <Text fontFamily="monospace" textAlign="end">
        {format(new Date(createdAt), 'H:I')}{' '}
      </Text>
    </Flex>
    <Text>
      <a href={actor.url}>{actor.login}</a> created a new {payload.ref_type}{' '}
      <b>{payload.ref}</b> <a href={repo.url}>{repo.name}</a>
    </Text>
  </Flex>
);

export default CreateEventCard;
