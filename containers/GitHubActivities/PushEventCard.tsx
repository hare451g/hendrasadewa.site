import Flex from '../../shared/Flex';
import Text from '../../shared/Text';

import { ActorType, RepoType, PushType } from './types';
import EventCard from './EventCard';

type PropsTypes = {
  index: number;
  actor: ActorType;
  repo: RepoType;
  payload: PushType;
  createdAt: string;
};

const PushEventCard: React.SFC<PropsTypes> = ({
  index,
  actor,
  repo,
  payload,
  createdAt,
}) => (
  <EventCard index={index} createdAt={createdAt}>
    <Flex flexDirection="column">
      <Text>
        <a href={`https://github.com/${actor.login}`}>{actor.login}</a> pushed
        new update to{' '}
        <a href={`https://github.com/${repo.name}`}>{repo.name}</a>
      </Text>
      <ul>
        {payload.commits.map(({ message, sha }) => (
          <li key={sha}>
            <a href={`https://github.com/${repo.name}/commits/${sha}`}>
              {sha.substr(0, 8)}
            </a>{' '}
            - <Text py="16px">{message}</Text>
          </li>
        ))}
      </ul>
    </Flex>
  </EventCard>
);

export default PushEventCard;
