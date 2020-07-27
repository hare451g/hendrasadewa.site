import { ExperiencesList } from './types';
import Item from './Item';

type PropTypes = {
  experiences: ExperiencesList;
};

const Experiences: React.FC<PropTypes> = ({ experiences }) => {
  return (
    <>
      <Item
        role={experiences.current.role}
        company={experiences.current.company}
        dateJoined={experiences.current.date_joined}
        dateDepature={experiences.current.date_departure}
        description={experiences.current.description}
      />
      {experiences.past.map((exp, index) => (
        <Item
          role={exp.role}
          company={exp.company}
          dateJoined={exp.date_joined}
          dateDepature={exp.date_departure}
          description={exp.description}
          key={`past-exp-${index + 1}`}
        />
      ))}
    </>
  );
};

export default Experiences;
