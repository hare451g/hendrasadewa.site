import { useEffect, useState } from 'react';
import { Loader, GitCommit, Eye } from 'react-feather';

import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import Avatar from '../../shared/Avatar';
import { GHActivity } from './types';
import requestActivities from './services';
import PushEventCard from './PushEventCard';
import WatchEventCard from './WatchEventCard';
import CreateEventCard from './CreateEventCard';
import LoadingContents from './LoadingContents';
import ErrorContents from './ErrorContents';
import EmptyContent from './EmptyContent';

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
    return <ErrorContents error={error} />;
  }

  if (loading) {
    return <LoadingContents />;
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

          if (act.type.toString() === 'CreateEvent') {
            return (
              <CreateEventCard
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

  return <EmptyContent />;
};

export default GitHubActivities;
