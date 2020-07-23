import { Card, Body, Title, Descriptions, Image } from './styled/ArticleCard';

type ArticleCardProps = {
  slug: string;
  title: string;
  descriptions: string;
  heroImage: string;
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
