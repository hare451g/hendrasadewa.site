import format from 'date-fns/format';
import Flex from '../../shared/Flex';
import Text from '../../shared/Text';

import { ActorType, RepoType, PushType } from './types';
import Divider from '../../shared/Divider';

type PushEventCardPropsType = {
  index: number;
  actor: ActorType;
  repo: RepoType;
  payload: PushType;
  createdAt: string;
};

const PushEventCard: React.SFC<PushEventCardPropsType> = ({
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
  >
    <Text fontFamily="monospace">
      {format(new Date(createdAt), 'dd/mm/yyyy-H:I')}{' '}
    </Text>
    <Divider borderWidth="2px" width="100%" />
    <Text>
      <a href={actor.url}>{actor.login}</a> pushed new update to{' '}
      <a href={repo.url}>{repo.name}</a>
    </Text>
    <ul>
      {payload.commits.map(({ message, sha, url }) => (
        <li key={sha}>
          <a href={url}>{sha.substr(0, 8)}</a> -{' '}
          <Text py="16px">{message}</Text>
        </li>
      ))}
    </ul>
  </Flex>
);

export default PushEventCard;
