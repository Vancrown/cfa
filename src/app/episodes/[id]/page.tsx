import { EpisodeInterface } from '@/components/EpisodeInterface'


async function getEpisode(id: string) {
    const result = (await fetch('https://my-json-server.typicode.com/Vancrown/rss/episodes/' + id, { next: { revalidate: 60 } })).json()

    return result

}

export async function generateStaticParams() {
    const result = await fetch('https://my-json-server.typicode.com/Vancrown/rss/episodes/')
    const episodes = await result.json()


    return episodes.map((x: EpisodeInterface) => (
        {
            id: x.id
        }))
}

export default async function EpisodeDetails({ params }: { params: { id: string } }) {
    const id = params.id
    const episode: EpisodeInterface = await getEpisode(id)


    return (
        <main>
            <div className="max-w-3xl mx-auto">
                <h2 className="text-lg text-center font-semibold text-stone-700 mb-2">{episode.title}</h2>
                <p className="text-sm text-center text-stone-500">{episode.pubDate} {episode.author}</p>

                <p>{episode.description}</p>
            </div>
        </main>
    )
}