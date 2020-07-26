import fs from 'fs';
import matter, { FrontMatterResult } from 'front-matter';

type MatterType = {
  title: string;
  date: string;
  description: string;
  heroImage: string;
  photographer: string;
  unsplashAccount: string;
  series: string;
  seasonTitle: string;
  season: number;
  episode: number;
  isPublished: string;
};

type MorphedArticle = {
  title: MatterType['title'];
  date: MatterType['date'];
  description: MatterType['description'];
  heroImage: {
    src: MatterType['heroImage'];
    photographer: MatterType['photographer'];
    unsplashAccount: MatterType['unsplashAccount'];
    source: string;
  };
  meta: {
    slug: string;
    series: MatterType['series'];
    seasonTitle: MatterType['seasonTitle'];
    season: MatterType['season'];
    episode: MatterType['episode'];
    isPublished: MatterType['isPublished'];
    words: number;
    sentences: number;
    timeToRead: string;
  };
  body: string;
};

const readMarkdownPosts = (path: fs.PathLike) =>
  fs.readdirSync(path).map((filename) => {
    const file = fs.readFileSync(`${path}/${filename}`, 'utf-8');

    const markdown: FrontMatterResult<MatterType> = matter(file);

    const article: MorphedArticle = {
      title: markdown.attributes.title,
      date: markdown.attributes.date,
      description: markdown.attributes.description,

      heroImage: {
        src: markdown.attributes.heroImage,
        photographer: markdown.attributes.photographer,
        unsplashAccount: markdown.attributes.unsplashAccount,
        source: 'unsplash',
      },

      meta: {
        slug: markdown.attributes.title.split(' ').join('-'),
        words: markdown.body.split(' ').length,
        sentences: markdown.body.split('.').length,
        series: markdown.attributes.series,
        seasonTitle: markdown.attributes.seasonTitle,
        season: markdown.attributes.season,
        episode: markdown.attributes.episode,
        isPublished: markdown.attributes.isPublished,
        timeToRead: `${Math.round(
          markdown.body.split(' ').length / (200 / 60) / 60
        )} minutes`,
      },
      body: markdown.body,
    };

    return article;
  });

export { readMarkdownPosts };
