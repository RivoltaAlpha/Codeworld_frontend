import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/Footer";
import Main from "../components/main";

const Home = () => {
    return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
        <main className="flex-grow">
            <Header />
            <Hero />
            <Main />
            <Footer />
        </main> 
    </div>
    )
}

export default Home
