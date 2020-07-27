export type ExperienceType = {
  role: string;
  company: string;
  dateJoined?: string;
  date_joined?: string;
  dateDepature?: string | null;
  date_departure?: string | null;
  description: string;
};

export type ExperiencesList = {
  current: ExperienceType;
  past: Array<ExperienceType>;
};
