import logo from './logo.svg';
import './App.css';
import Entry from './components/Entry';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
        <Entry/>
        <About/>
        <Experience/>
        <Projects/>
    </div>
  );
}

export default App;
