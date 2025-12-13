import "./App.css"
import Timeline from "./components/Timeline"
import AppNavbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import WorkInProgress from "./components/WorkInProgress"

function App() {
  return (
    <>
      <AppNavbar />
      <WorkInProgress />
      <Hero />
      <Timeline />
      <Footer />
    </>
  )
}

export default App
