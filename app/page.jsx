import '@components/Feed'
import Feed from '@components/Feed'
import PromptCard from '@components/PromptCard'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p>
            Discover and Share AI-Powered Prompts.loe
            Discover and Share AI-Powered Prompts.
        </p>
        <Feed />
        <PromptCard />
    </section>
  )
}

export default Home
