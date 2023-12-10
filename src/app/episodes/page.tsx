import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { resolve } from "path"

import { EpisodeInterface } from '@/components/EpisodeInterface'


async function getEpisodes(): Promise<EpisodeInterface[]> {
    const result = await fetch('https://my-json-server.typicode.com/Vancrown/rss/episodes')
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const val = result.json()
    return val
}

export default async function Episodes() {
    const episodes = await getEpisodes()

    return (
        <main>

            <div className="grid grid-cols-3 gap-6 px-12">

                {episodes.map(x => (
                    <Card key={x.id} className="flex flex-col justify-between">
                        <CardHeader>
                            <CardTitle className="text-lg">{x.title}</CardTitle>
                            <CardDescription className="text-xs">{x.pubDate} {x.author}</CardDescription>
                        </CardHeader>

                        <CardContent className="text-sm">
                            <p>{x.description}</p>
                        </CardContent>

                        <CardFooter>
                            <p>
                                <Button variant="default" className="text-xs">
                                    详情
                                </Button>
                            </p>
                        </CardFooter>
                    </Card>

                ))}

            </div>
        </main>
    )
}