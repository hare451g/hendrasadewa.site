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
      <a href={actor.url}>{actor.login}</a> watched{' '}
      <a href={repo.url}>{repo.name}</a>
    </Text>
  </EventCard>
);

export default WatchEventCard;
