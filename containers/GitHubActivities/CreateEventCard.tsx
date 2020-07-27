import Text from '../../shared/Text';

import { ActorType, RepoType, CreateType } from './types';
import EventCard from './EventCard';

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
  <EventCard index={index} createdAt={createdAt}>
    <Text>
      <a href={actor.url}>{actor.login}</a> created a new {payload.ref_type}{' '}
      <b>{payload.ref}</b> <a href={repo.url}>{repo.name}</a>
    </Text>
  </EventCard>
);

export default CreateEventCard;
