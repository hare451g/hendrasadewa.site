import fs from 'fs';
import matter from 'front-matter';

const readMarkdownPosts = (path: fs.PathLike) => {
  const dirs = fs.readdirSync(path);
  const files = dirs.map((filename) => {
    const file = fs.readFileSync(`${path}/${filename}`, 'utf-8');
    return matter(file);
  });
  return files;
};

export { readMarkdownPosts };
