import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="container">
      <Navbar title = "Tunay'ın"/>
      <hr/>
      <User/>
    </div>
  );
}

export default App;
