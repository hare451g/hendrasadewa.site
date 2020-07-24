// styled components
import Card from './Card';
import Body from './Body';
import Title from './Title';
import Descriptions from './Descriptions';
import Image from './Image';

type ArticleCardProps = {
  slug: string;
  title: string;
  date: string;
  descriptions: string;
  heroImage: string;
  photographer: string;
  unsplashAccount: string;
  series: string;
  seasonTitle: string;
  season: number;
  episode: number;
  isPublished: boolean;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  slug,
  title,
  descriptions,
  heroImage,
}) => (
  <Card href={slug}>
    <Body>
      <Title>{title}</Title>
      <Descriptions>{descriptions}</Descriptions>
    </Body>
    <Image src={heroImage} />
  </Card>
);

export default ArticleCard;
