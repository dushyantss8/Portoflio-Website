import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Projects from "./components/Projects"

const App = () => {
    return (
        <>
            {/* Navbar  */}
            <Navbar />

            {/* Profile  */}
            <Profile />

            {/* About */}
            <About />

            {/* Experience  */}
            <Experience />

            {/* Projects  */}
            <Projects />

            {/* Contact  */}
            <Contact />

            {/* Footer  */}
            <Footer />
        </>
    )
}

export default App
