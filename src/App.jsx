import Hero from './components/hero'
import './App.css'
import Pr from './components/Pr'
import Navbar from './components/navbar'
import Insights from './components/insights'
import Footer from './components/Footer'
import Test from './components/Test'
import Stats from './components/Stats'
import Feed from './components/Feed'



function App() {
  return (
    <>
      <div className="area bg-cover ">
        <ul className="circles absolute top-0 left-0 w-full h-full z-[-1]">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Navbar className="relative z-[-1]" />
        <Hero />
        <Insights />
        <Footer />
        <Pr />
        <Stats />
        <Test />
        <Feed />
        <h1 className="text-3xl underline">doq</h1>
      </div>
    </>
  );
}

export default App;


