export type ActorType = {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
};

export type RepoType = {
  id: number;
  name: string;
  url: string;
};

export type ORGType = {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
};

export type WatchEventPayloadType = {
  action: string;
};

export type CommitType = {
  sha: string;
  author: {
    email: string;
    name: string;
  };
  message: string;
  distinct: boolean;
  url: string;
};

export type PushType = {
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: Array<CommitType>;
};

enum events {
  PushEvent = 'PushEvent',
  WatchEvent = 'WatchEvent',
}

export type GHActivity = {
  id: string;
  type: keyof events;
  actor: ActorType;
  repo: RepoType;
  created_at: string;
  org?: ORGType;
  payload: PushType | CommitType | WatchEventPayloadType | any;
};
