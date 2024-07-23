import styles from './App.module.css'
import { Navbar } from './components/Navbar/navbar'
import { About } from './components/About/about.jsx'
import { Experience } from './components/Experience/experience'
import { Projects } from './components/Projects/projects'
import { Footer } from './components/Footer/footer'

function App() {

  return (
    <div className = {styles.App}>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}
export default App
