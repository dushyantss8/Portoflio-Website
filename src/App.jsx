import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

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

            {/* Technologies  */}
            <Technologies />

            {/* Contact  */}
            <Contact />

            {/* Footer  */}
            <Footer />
        </>
    )
}

export default App
