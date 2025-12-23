import "./App.css"
import Timeline from "./components/Timeline"
import AppNavbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import WorkInProgress from "./components/WorkInProgress"
import Contacts from "./components/Contacts"

function App() {
  return (
    <>
      <AppNavbar />
      <WorkInProgress />
      <Hero />
      <Timeline />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
