import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const guidesDirectory = path.join(process.cwd(), '_guides')

interface GuideMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string
}

interface Guide {
  slug: string;
  metadata: GuideMetadata
}

export const getGuides = (): Guide[] => {
  // Existence check
  if (!fs.existsSync(guidesDirectory)) {
    return [];
  }

  const guideFiles = fs.readdirSync(guidesDirectory);
  return guideFiles
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(guidesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const {data} = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        metadata: {
          title: data.title,
          description: data.description,
          date: data.date,
          author: data.author,
          tags: data.tags || [],
          readingTime: data.readingTime || '5 min read'
        }
      }
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}