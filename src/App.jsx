import Nav from './shared/layout/Nav/nav'
import './App.css'
import Banner from './shared/layout/Banner'
import About from './shared/layout/About'
import Work from './shared/layout/Work'
import Contact from './shared/layout/Contact/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
    <Nav/>
    <Banner/>
    <About/>
    <Work/>
    <Contact/>
    </div>
  )
}

export default App
