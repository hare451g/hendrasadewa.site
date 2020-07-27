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
    flexDirection="column"
    justifyContent="space-between"
    alignItems="flex-start"
    py="8px"
    mb="16px"
  >
    <Text fontFamily="monospace">
      {format(new Date(createdAt), 'dd/mm/yyyy-H:I')}{' '}
    </Text>
    <Divider borderWidth="2px" width="100%" />
    <Text>
      <a href={actor.url}>{actor.login}</a> created a new {payload.ref_type}{' '}
      <b>{payload.ref}</b> <a href={repo.url}>{repo.name}</a>
    </Text>
  </Flex>
);

export default CreateEventCard;
