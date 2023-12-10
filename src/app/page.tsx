
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Episode {
  title: string,
  episodeNo: number,
  abstract: string,
  description: string,
  link: string,
  author: string,
  pubDate: number,
  duration: number,
  id: number

}

async function getEpisodes(): Promise<Episode[]> {
  const prodRes = await fetch('https://vancrown.github.io/podcast/data/db.json')

  const result = await fetch('http://localhost:4000/episodes')
  return result.json()
}

export default async function Home() {
  const episodes = await getEpisodes()

  return (
    <main>

      <div className="grid grid-cols-3 gap-8">

        {episodes.map(x => (
          <Card key={x.id} className="flex flex-col justify-between">
            <CardHeader>
              <div>
                <CardTitle>{x.title}</CardTitle>
                <CardDescription>{x.pubDate}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <p>{x.description}</p>
            </CardContent>

            <CardFooter>
              <Button>
                View Detail
              </Button>

            </CardFooter>
          </Card>

        ))}

      </div>

    </main>
  )
}
