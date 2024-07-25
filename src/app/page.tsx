import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('@/modules/home/pages/Home'), {
    ssr: false
})

export default function Home() {
    return (
        <main>
            <div className="container">
                <HomePage />
            </div>
        </main>
    )
}
