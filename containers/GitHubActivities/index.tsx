import { useEffect, useState } from 'react';
import { Loader, GitCommit, Eye } from 'react-feather';

import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import Avatar from '../../shared/Avatar';
import { GHActivity, PushType } from './types';
import requestActivities from './services';
import PushEventCard from './PushEventCard';
import WatchEventCard from './WatchEventCard';

type GHActivitiesPropsType = {
  username: string;
};

const GitHubActivities: React.FC<GHActivitiesPropsType> = ({ username }) => {
  const [activities, setActivities] = useState<Array<GHActivity>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading) {
      requestActivities(username, {
        onStart: () => setLoading(true),
        onSuccess: (data) => setActivities(data),
        onFailed: (err) => setError(err),
        onEnd: () => setLoading(false),
      });
    }
  }, []);

  if (error) {
    return (
      <Flex flexDirection="column">
        <Text fontWeight="bold">An error Occured !</Text>
        <Text>{error || 'Unknown Error'}</Text>
      </Flex>
    );
  }

  if (loading) {
    return (
      <Flex flexDirection="column">
        <Text fontWeight="bold">
          <Loader /> Loading contents . . .
        </Text>
      </Flex>
    );
  }

  if (activities.length > 0) {
    return (
      <>
        {activities.map((act, index) => {
          if (act.type.toString() === 'WatchEvent') {
            return (
              <WatchEventCard
                actor={act.actor}
                repo={act.repo}
                index={index}
                createdAt={act.created_at}
              />
            );
          }

          if (act.type.toString() === 'PushEvent') {
            return (
              <PushEventCard
                actor={act.actor}
                payload={act.payload}
                repo={act.repo}
                index={index}
                createdAt={act.created_at}
              />
            );
          }
          return <Text>{act.type}</Text>;
        })}
      </>
    );
  }

  return (
    <Flex flexDirection="column">
      <Text fontWeight="bold">There's no activities recently</Text>
    </Flex>
  );
};

export default GitHubActivities;
