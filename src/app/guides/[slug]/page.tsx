import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  try {
    const guide = await getGuideContent(params.slug);

    return {
      title: `${guide.metadata.title} | sdcard.photos`,
      description: guide.metadata.description,
    }
  } catch {
    return {
      title: 'Guide Not Found',
    }
  }
}

async function getGuideContent(slug: string) {
  const guidesDirectory = path.join(process.cwd(), '_guides');
  const fullPath = path.join(guidesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const html = marked(content);

  return {
    metadata: {
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      tags: Array.isArray(data.tags) ? data.tags : [],
      readingTime: data.readingTime || '5 min read'
    },
  content: html
  }
}

export default async function GuidePage({ params }: Props) {
  const guide = await getGuideContent(params.slug)

  return (
    <article className="container font-ibm-mono text-white mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 space-y-4">
          <div className="flex gap-2">
            {guide.metadata.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold">
            {guide.metadata.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{guide.metadata.author}</span>
            <span>•</span>
            <time dateTime={guide.metadata.date}>
              {new Date(guide.metadata.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{guide.metadata.readingTime}</span>
          </div>
        </header>

        <div
          className="prose prose-slate dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />
      </div>
    </article>
  )
}