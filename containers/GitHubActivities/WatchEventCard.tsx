import Text from '../../shared/Text';

import { ActorType, RepoType } from './types';
import EventCard from './EventCard';

type PropsTypes = {
  index: number;
  actor: ActorType;
  repo: RepoType;
  createdAt: string;
};

const WatchEventCard: React.SFC<PropsTypes> = ({
  index,
  actor,
  repo,
  createdAt,
}) => (
  <EventCard index={index} createdAt={createdAt}>
    <Text>
      <a href={`https://github.com/${actor.login}`}>{actor.login}</a> watched{' '}
      <a href={`https://github.com/${repo.name}`}>{repo.name}</a>
    </Text>
  </EventCard>
);

export default WatchEventCard;
