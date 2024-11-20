import { Metadata } from 'next';
import { getGuides } from '@/lib/guides'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guides | sdcard.photos',
  description: 'Technical guides, tutorials and best practices'
}

export default async function GuidesPage() {
  const guides = getGuides()

  return (
    <main className="container text-white mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Guides</h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of technical guides and tutorials
          </p>
        </div>

        <div className="grid gap-6">
          {guides.map((guides) => (
            <Link
              key={guides.slug}
              href={`/guides/${guides.slug}`}
              className="block transition-colors hover:bg-muted/50"
            >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle>{guides.metadata.title}</CardTitle>
                    <CardDescription>
                      {guides.metadata.description}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {guides.metadata.readingTime}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {guides.metadata.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{guides.metadata.author}</span>
                    <span>•</span>
                    <time dateTime={guides.metadata.date}>
                      {new Date(guides.metadata.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}