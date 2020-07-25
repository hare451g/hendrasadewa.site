import Head from 'next/head';
import meta from '../../constants/meta.json';
import { lightColors } from '../../theme/colors';

type SEOProps = {
  title?: string;
  descriptions?: string;
  image?: string;
  url?: string;
  keywords?: [string];
};

const SEO: React.SFC<SEOProps> = ({
  title = meta.site_info.title,
  descriptions = meta.site_info.descriptions,
  url = meta.site_info.url,
  image = '/img/logo.svg',
  keywords = meta.site_info.keywords,
}) => (
  <Head>
    <title>{title}</title>
    {/* Manifest */}
    <link rel="manifest" href="/site.webmanifest" />

    {/* FavIcon */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/img/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/img/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/img/favicon-16x16.png"
    />
    <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5" />
    {/* Browser Meta */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    {/* Theme colors Meta */}
    <meta name="theme-color" content={lightColors.background.body} />
    <meta
      name="msapplication-TileColor"
      content={lightColors.background.body}
    />
    <meta
      name="msapplication-navbutton-color"
      content={lightColors.background.body}
    />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content={lightColors.background.body}
    />
    {/* Search Engine Metas */}
    <meta name="description" content={descriptions} />
    <meta name="keywords" content={keywords.join(',')} />
    {/* Open Graph Core Metas */}
    <meta property="og:title" content={title} />
    <meta property="og:author" content={meta.social_media.facebook_url} />
    <meta property="og:type" content="blog" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={descriptions} />
    <meta property="og:locale" content="id-ID" />
    {meta.site_info.locales.alt.map((locale) => (
      <meta property="og:locale:alternate" content={locale} key="locale" />
    ))}
    <meta property="og:site_name" content={title} />
    {/* Twitter Meta */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={descriptions} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:creator" content={`@${meta.social_media.twitter}`} />
    {/* Article Metas */}
    <meta property="article:published_time" content="" />
    <meta property="article:modified_time" content="" />
    <meta property="article:author" content="" />
    <meta property="article:publisher" content="" />
    <meta property="article:section" content="" />
  </Head>
);

export default SEO;
